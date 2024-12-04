'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from '@/components/ui/carousel'

interface CarouselWrapperProps {
  children: React.ReactNode
  duration: number
}

const CarouselWrapper = ({ children, duration }: CarouselWrapperProps) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [isForward, setIsForward] = React.useState(true)

  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (isForward) {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          setIsForward(false)
          api.scrollPrev()
        }
      } else {
        if (api.canScrollPrev()) {
          api.scrollPrev()
        } else {
          setIsForward(true)
          api.scrollNext()
        }
      }
    }, duration)

    return () => {
      clearInterval(interval)
    }
  }, [api, isForward, duration])

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  )
}

export default CarouselWrapper
