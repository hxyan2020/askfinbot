"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export type InstallOutcome =
  | "accepted"
  | "dismissed"
  | "unavailable"
  | "already"
  | "shortcut-saved"
  | "shortcut-downloaded";

type PwaInstallContextValue = {
  canNativeInstall: boolean;
  isStandalone: boolean;
  isDesktop: boolean;
  install: () => Promise<InstallOutcome>;
};

const PwaInstallContext = createContext<PwaInstallContextValue | null>(null);
const INSTALLED_KEY = "askfinbot-installed";

declare global {
  interface Window {
    __pwaDeferredPrompt?: BeforeInstallPromptEvent | null;
    showSaveFilePicker?: (options?: {
      suggestedName?: string;
      startIn?: string;
      types?: Array<{
        description?: string;
        accept: Record<string, string[]>;
      }>;
    }) => Promise<FileSystemFileHandle>;
  }
}

function appUrl() {
  return SITE_URL.endsWith("/") ? SITE_URL : `${SITE_URL}/`;
}

function isStandaloneMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.matchMedia("(display-mode: window-controls-overlay)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isDesktopDevice() {
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 767px)").matches;
  return !(coarse && narrow);
}

function isApplePlatform() {
  const ua = navigator.userAgent || "";
  return /Mac|iPhone|iPad|iPod/i.test(ua);
}

function readDeferredPrompt() {
  if (typeof window === "undefined") return null;
  return window.__pwaDeferredPrompt ?? null;
}

function clearInstalledFlag() {
  try {
    localStorage.removeItem(INSTALLED_KEY);
  } catch {
    /* ignore */
  }
}

function markInstalled() {
  try {
    localStorage.setItem(INSTALLED_KEY, "1");
  } catch {
    /* ignore */
  }
}

function buildShortcutFile() {
  const url = appUrl();
  if (isApplePlatform()) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>URL</key><string>${url}</string></dict></plist>`;
    return {
      name: `${SITE_NAME}.webloc`,
      type: "application/xml",
      content: xml,
    };
  }
  return {
    name: `${SITE_NAME}.url`,
    type: "application/internet-shortcut",
    content: `[InternetShortcut]\r\nURL=${url}\r\nIconIndex=0\r\n`,
  };
}

async function saveDesktopShortcut(): Promise<
  "shortcut-saved" | "shortcut-downloaded" | "dismissed"
> {
  const file = buildShortcutFile();
  const blob = new Blob([file.content], { type: file.type });

  if (typeof window.showSaveFilePicker === "function") {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: file.name,
        startIn: "desktop",
        types: [
          {
            description: "Desktop shortcut",
            accept: {
              [file.type]: [file.name.endsWith(".webloc") ? ".webloc" : ".url"],
            },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      return "shortcut-saved";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return "dismissed";
      }
    }
  }

  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = file.name;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(objectUrl);
  return "shortcut-downloaded";
}

async function waitForDeferredPrompt(timeoutMs = 2000) {
  const existing = readDeferredPrompt();
  if (existing) return existing;

  return new Promise<BeforeInstallPromptEvent | null>((resolve) => {
    let settled = false;
    const finish = (value: BeforeInstallPromptEvent | null) => {
      if (settled) return;
      settled = true;
      window.removeEventListener("pwa-installable", onReady);
      window.removeEventListener("beforeinstallprompt", onReady);
      window.clearTimeout(timer);
      resolve(value);
    };
    const onReady = () => finish(readDeferredPrompt());
    const timer = window.setTimeout(() => finish(readDeferredPrompt()), timeoutMs);
    window.addEventListener("pwa-installable", onReady);
    window.addEventListener("beforeinstallprompt", onReady);
  });
}

export function PwaInstallProvider({ children }: { children: ReactNode }) {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsStandalone(isStandaloneMode());
    setIsDesktop(isDesktopDevice());
    setInstallEvent(readDeferredPrompt());
    if (readDeferredPrompt()) clearInstalledFlag();

    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const syncPrompt = () => {
      clearInstalledFlag();
      setInstallEvent(readDeferredPrompt());
    };
    const onInstalled = () => {
      window.__pwaDeferredPrompt = null;
      setInstallEvent(null);
      markInstalled();
      setIsStandalone(isStandaloneMode());
    };
    const onDisplayMode = () => setIsStandalone(isStandaloneMode());

    window.addEventListener("pwa-installable", syncPrompt);
    window.addEventListener("beforeinstallprompt", syncPrompt);
    window.addEventListener("appinstalled", onInstalled);
    window.matchMedia("(display-mode: standalone)").addEventListener("change", onDisplayMode);

    return () => {
      window.removeEventListener("pwa-installable", syncPrompt);
      window.removeEventListener("beforeinstallprompt", syncPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      window.matchMedia("(display-mode: standalone)").removeEventListener("change", onDisplayMode);
    };
  }, []);

  const install = useCallback(async (): Promise<InstallOutcome> => {
    if (isStandaloneMode()) return "already";
    clearInstalledFlag();

    const promptEvent =
      installEvent ?? readDeferredPrompt() ?? (await waitForDeferredPrompt(2000));

    if (promptEvent) {
      setInstallEvent(promptEvent);
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      window.__pwaDeferredPrompt = null;
      setInstallEvent(null);
      setIsStandalone(isStandaloneMode());
      if (choice.outcome === "accepted") markInstalled();
      return choice.outcome;
    }

    // Desktop one-click shortcut when the browser withholds the PWA install prompt.
    if (isDesktopDevice()) {
      const shortcut = await saveDesktopShortcut();
      if (shortcut === "dismissed") return "dismissed";
      return shortcut;
    }

    return "unavailable";
  }, [installEvent]);

  return (
    <PwaInstallContext.Provider
      value={{
        canNativeInstall: Boolean(installEvent),
        isStandalone,
        isDesktop,
        install,
      }}
    >
      {children}
    </PwaInstallContext.Provider>
  );
}

export function usePwaInstall() {
  const ctx = useContext(PwaInstallContext);
  if (!ctx) {
    throw new Error("usePwaInstall must be used within PwaInstallProvider");
  }
  return ctx;
}
