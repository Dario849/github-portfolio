import { atom } from 'nanostores'
import type { ThemeMode } from '@/lib/preferences'

export const $theme = atom<ThemeMode>('dark')

export function seedTheme(theme: ThemeMode) {
  if ($theme.get() !== theme) {
    $theme.set(theme)
  }
}
