import { useEffect } from 'react'
import { MonitorSmartphone } from 'lucide-react'
import { useStore } from '@nanostores/react'
import type { DeviceKind } from '@/lib/device'
import { $device, seedDevice } from '@/stores/device'

export interface DevicePillProps {
  readonly initialDevice: DeviceKind
  readonly labels: {
    mobile: string
    desktop: string
  }
}

export function DevicePill({ initialDevice, labels }: DevicePillProps) {
  const device = useStore($device)

  useEffect(() => {
    seedDevice(initialDevice)
  }, [initialDevice])

  return (
    <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-surface)] px-4 text-sm font-medium text-[var(--accent-text)]">
      <MonitorSmartphone className="h-4 w-4" />
      <span>{device === 'mobile' ? labels.mobile : labels.desktop}</span>
    </div>
  )
}

export default DevicePill
