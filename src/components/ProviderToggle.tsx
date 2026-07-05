"use client";

import type { LLMProvider } from "@/lib/constants";

interface ProviderToggleProps {
  provider: LLMProvider;
  onChange: (provider: LLMProvider) => void;
}

export function ProviderToggle({ provider, onChange }: ProviderToggleProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gold/20 bg-navy-light/60 p-1">
      <button
        type="button"
        onClick={() => onChange("gemini")}
        className={`provider-btn ${provider === "gemini" ? "provider-btn-active" : ""}`}
      >
        Gemini
        <span className="ml-1 text-[10px] opacity-60">Default</span>
      </button>
      <button
        type="button"
        onClick={() => onChange("deepseek")}
        className={`provider-btn ${provider === "deepseek" ? "provider-btn-active" : ""}`}
      >
        DeepSeek
        <span className="ml-1 text-[10px] opacity-60">中文</span>
      </button>
    </div>
  );
}
