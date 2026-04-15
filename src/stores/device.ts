import { atom } from 'nanostores'
import type { DeviceKind } from '@/lib/device'

export const $device = atom<DeviceKind>('desktop')

export function seedDevice(kind: DeviceKind) {
  if ($device.get() !== kind) {
    $device.set(kind)
  }
}

export function syncViewportDevice() {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const update = () => {
    const nextKind: DeviceKind = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'
    $device.set(nextKind)
  }

  update()
  window.addEventListener('resize', update, { passive: true })

  return () => window.removeEventListener('resize', update)
}
