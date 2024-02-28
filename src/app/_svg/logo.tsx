"use client"
import { useTheme } from 'next-themes'
import { useState, type SVGProps, useEffect } from 'react'
const SvgLogo = (props: SVGProps<SVGSVGElement>) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const logoPath = theme === 'dark' ? '/images/logo-dark.png' : '/images/logo.png'
  return (
  <img width={326} height={94} src={logoPath} />
) }
export default SvgLogo
