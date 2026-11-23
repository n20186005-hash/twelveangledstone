"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
  qu: "QU",
};

const LANG_NAMES: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  es: "Español",
  qu: "Runasimi",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es", "qu"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = `/${l}${window.location.hash}`;
            }
          }}
          lang={l}
          aria-label={LANG_NAMES[l]}
          aria-current={locale === l ? "page" : undefined}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
