"use client";

import type { LLMProvider } from "@/lib/constants";

interface ProviderToggleProps {
  provider: LLMProvider;
  onChange: (provider: LLMProvider) => void;
}

export function ProviderToggle({ provider, onChange }: ProviderToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-white p-1">
      <button
        type="button"
        onClick={() => onChange("gemini")}
        className={`provider-btn ${provider === "gemini" ? "provider-btn-active" : ""}`}
      >
        Gemini
        <span className="ml-1 text-[10px] opacity-70">Default</span>
      </button>
      <button
        type="button"
        onClick={() => onChange("deepseek")}
        className={`provider-btn ${provider === "deepseek" ? "provider-btn-active" : ""}`}
      >
        DeepSeek
      </button>
    </div>
  );
}
