import { useEffect, useMemo } from 'react'
import { useStore } from '@nanostores/react'
import type { DeviceKind } from '@/lib/device'
import type { NavSection } from '@/features/portfolio/content'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { $activeSection } from '@/stores/navigation'
import { seedDevice, syncViewportDevice } from '@/stores/device'

export interface ScrollTabsProps {
  readonly sections: NavSection[]
  readonly initialDevice: DeviceKind
}

export function ScrollTabs({ sections, initialDevice }: ScrollTabsProps) {
  const activeSection = useStore($activeSection)

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections])

  useEffect(() => {
    seedDevice(initialDevice)
    const stopSync = syncViewportDevice()
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          $activeSection.set(visible.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6]
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      stopSync()
      observer.disconnect()
    }
  }, [initialDevice, sectionIds])

  useEffect(() => {
    const activeTrigger = document.querySelector<HTMLElement>(`[data-section-trigger="${activeSection}"]`)
    activeTrigger?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeSection])

  const currentValue = sectionIds.includes(activeSection) ? activeSection : sectionIds[0]

  return (
    <Tabs
      value={currentValue}
      onValueChange={(value) => {
        $activeSection.set(value)
        document.getElementById(value)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
    >
      <div className="no-scrollbar overflow-x-auto px-4 sm:px-6 lg:px-8">
        <TabsList className="w-max min-w-full justify-start lg:min-w-0">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} asChild>
              <a
                href={`#${section.id}`}
                data-section-trigger={section.id}
                aria-label={`Jump to ${section.label}`}
              >
                {section.label}
              </a>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  )
}

export default ScrollTabs
