"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type PwaInstallContextValue = {
  canNativeInstall: boolean;
  isStandalone: boolean;
  isIOS: boolean;
  install: () => Promise<boolean>;
};

const PwaInstallContext = createContext<PwaInstallContextValue | null>(null);

function isIosDevice() {
  const ua = navigator.userAgent || "";
  return (
    /iphone|ipad|ipod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function isStandaloneMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function PwaInstallProvider({ children }: { children: ReactNode }) {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsStandalone(isStandaloneMode());
    setIsIOS(isIosDevice());

    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstallEvent(null);
      setIsStandalone(true);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = useCallback(async () => {
    if (!installEvent) return false;
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    setInstallEvent(null);
    if (choice.outcome === "accepted") setIsStandalone(true);
    return choice.outcome === "accepted";
  }, [installEvent]);

  return (
    <PwaInstallContext.Provider
      value={{
        canNativeInstall: Boolean(installEvent),
        isStandalone,
        isIOS,
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
