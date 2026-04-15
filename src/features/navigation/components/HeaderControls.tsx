import { useEffect, useMemo } from 'react'
import { useStore } from '@nanostores/react'
import { Languages, MoonStar, SunMedium, FileOutput, Download } from 'lucide-react'
import type { SupportedLocale, ThemeMode } from '@/lib/preferences'
import { $locale, seedLocale } from '@/stores/locale'
import { $theme, seedTheme } from '@/stores/theme'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface HeaderControlsProps {
  readonly initialLocale: SupportedLocale
  readonly initialTheme: ThemeMode
  readonly currentPath: string
  readonly labels: {
    languageLabel: string
    languageToggleLabel: string
    themeLabel: string
    themeToggleLabel: string
    pdfLabel: string
    pdfDescription: string
    pdfDownloadLabel: string
    pdfDownloadDescription: string
    englishShort: string
    spanishShort: string
    darkLabel: string
    lightLabel: string
  }
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`
}

export function HeaderControls({
  initialLocale,
  initialTheme,
  currentPath,
  labels
}: HeaderControlsProps) {
  const locale = useStore($locale)
  const theme = useStore($theme)

  useEffect(() => {
    seedLocale(initialLocale)
    seedTheme(initialTheme)
    document.documentElement.lang = initialLocale
  }, [initialLocale, initialTheme])

  const pdfHref = useMemo(
    () => `/portfolio-print?lang=${locale}&theme=${theme}&autoprint=1&from=${encodeURIComponent(currentPath)}`,
    [currentPath, locale, theme]
  )

  const pdfDownloadHref = useMemo(
    () => `/portfolio-download.pdf?lang=${locale}&theme=${theme}`,
    [locale, theme]
  )

  return (
    <div className="screen-only no-scrollbar flex items-center gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8" aria-label="Preference controls">
      <div className="surface-panel flex items-center gap-1 rounded-full p-1">
        <span className="sr-only">{labels.languageLabel}</span>
        <button
          type="button"
          className={`control-button ${locale === 'en' ? 'control-button-active' : ''}`}
          aria-label={labels.languageToggleLabel}
          aria-pressed={locale === 'en'}
          onClick={() => {
            if (locale === 'en') return
            seedLocale('en')
            writeCookie('lang', 'en')
            const url = new URL(window.location.href)
            url.searchParams.set('lang', 'en')
            window.location.href = url.toString()
          }}
        >
          <Languages className="h-4 w-4" />
          <span>{labels.englishShort}</span>
        </button>
        <button
          type="button"
          className={`control-button ${locale === 'es' ? 'control-button-active' : ''}`}
          aria-label={labels.languageToggleLabel}
          aria-pressed={locale === 'es'}
          onClick={() => {
            if (locale === 'es') return
            seedLocale('es')
            writeCookie('lang', 'es')
            const url = new URL(window.location.href)
            url.searchParams.set('lang', 'es')
            window.location.href = url.toString()
          }}
        >
          <Languages className="h-4 w-4" />
          <span>{labels.spanishShort}</span>
        </button>
      </div>

      <button
        type="button"
        className="surface-panel control-button"
        aria-label={labels.themeToggleLabel}
        aria-pressed={theme === 'dark'}
        onClick={() => {
          const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark'
          seedTheme(nextTheme)
          document.documentElement.dataset.theme = nextTheme
          document.documentElement.style.colorScheme = nextTheme
          localStorage.setItem('theme', nextTheme)
          writeCookie('theme', nextTheme)
        }}
      >
        {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
        <span>{theme === 'dark' ? labels.lightLabel : labels.darkLabel}</span>
      </button>

      <Button asChild variant="secondary" className={cn(buttonVariants({ variant: 'secondary' }), 'surface-panel shrink-0')}>
        <a
          href={pdfHref}
          target="_blank"
          rel="noreferrer"
          aria-label={labels.pdfDescription}
        >
          <FileOutput className="h-4 w-4" />
          <span>{labels.pdfLabel}</span>
        </a>
      </Button>

      <Button asChild variant="secondary" className={cn(buttonVariants({ variant: 'secondary' }), 'surface-panel shrink-0')}>
        <a
          href={pdfDownloadHref}
          aria-label={labels.pdfDownloadDescription}
        >
          <Download className="h-4 w-4" />
          <span>{labels.pdfDownloadLabel}</span>
        </a>
      </Button>
    </div>
  )
}

export default HeaderControls
