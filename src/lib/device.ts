export type DeviceKind = 'mobile' | 'desktop'

export interface DeviceContext {
  kind: DeviceKind
  rawType: string
  userAgent: string
  isMobile: boolean
}

export function detectDevice(userAgent: string): DeviceContext {
  const rawType = /iphone|android.+mobile|mobile|windows phone/i.test(userAgent) ? 'mobile' : 'desktop'
  const kind: DeviceKind = rawType === 'mobile' ? 'mobile' : 'desktop'

  return {
    kind,
    rawType,
    userAgent,
    isMobile: kind === 'mobile'
  }
}
