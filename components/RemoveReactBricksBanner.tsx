'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export const RemoveReactBricksBanner = () => {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const removeBanner = () => {
      const links = Array.from(document.getElementsByTagName('a'))
      links.forEach((link) => {
        if (
          link.href.includes('reactbricks.com') &&
          link.href.includes('utm_campaign=site-badge')
        ) {
          link.style.visibility = 'hidden'
        }
      })
    }

    removeBanner()
  }, [pathname])

  return null
}
