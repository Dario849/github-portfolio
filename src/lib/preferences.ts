export const supportedLocales = ['en', 'es'] as const
export const supportedThemes = ['dark', 'light'] as const

export type SupportedLocale = (typeof supportedLocales)[number]
export type ThemeMode = (typeof supportedThemes)[number]

export const DEFAULT_LOCALE: SupportedLocale = 'en'
export const DEFAULT_THEME: ThemeMode = 'dark'

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale)
}

export function isSupportedTheme(value: string | null | undefined): value is ThemeMode {
  return supportedThemes.includes(value as ThemeMode)
}

export function parseLocale(value: string | null | undefined): SupportedLocale {
  return isSupportedLocale(value) ? value : DEFAULT_LOCALE
}

export function parseTheme(value: string | null | undefined): ThemeMode {
  return isSupportedTheme(value) ? value : DEFAULT_THEME
}
