import { atom } from 'nanostores'
import type { SupportedLocale } from '@/lib/preferences'

export const $locale = atom<SupportedLocale>('en')

export function seedLocale(locale: SupportedLocale) {
  if ($locale.get() !== locale) {
    $locale.set(locale)
  }
}
