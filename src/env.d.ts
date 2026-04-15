type DeviceKind = 'mobile' | 'desktop'

declare namespace App {
  interface Locals {
    device: {
      kind: DeviceKind
      rawType: string
      userAgent: string
      isMobile: boolean
    }
    locale: import('./lib/preferences').SupportedLocale
    theme: import('./lib/preferences').ThemeMode
  }
}
