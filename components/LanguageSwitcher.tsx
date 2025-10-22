'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile'
}

export function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
    setIsOpen(false)
  }

  const handleLanguageSelect = (lang: 'tr' | 'en') => {
    setLanguage(lang)
    setIsOpen(false)
  }

  if (variant === 'mobile') {
    return (
      <div className="px-4 py-3">
        <div className="text-sm font-medium text-muted-foreground mb-2">
          {t('lang.switch')}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleLanguageSelect('tr')}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              language === 'tr'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background/80'
            }`}
          >
            TR
          </button>
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              language === 'en'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background/80'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
        aria-label={t('lang.switch')}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
        <span className="uppercase font-semibold">
          {language}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg py-1 z-50">
          <button
            onClick={() => handleLanguageSelect('tr')}
            className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-background/50 ${
              language === 'tr' ? 'text-foreground font-medium' : 'text-muted-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🇹🇷</span>
              <span>Türkçe</span>
            </div>
          </button>
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-background/50 ${
              language === 'en' ? 'text-foreground font-medium' : 'text-muted-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🇺🇸</span>
              <span>English</span>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}
