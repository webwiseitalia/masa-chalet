import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Masa from '../components/Masa'
import Quote from '../components/Quote'
import Menu from '../components/Menu'
import Degustazione from '../components/Degustazione'
import GiftCard from '../components/GiftCard'
import Gallery from '../components/Gallery'
import Contatti from '../components/Contatti'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Masa />
      <Quote />
      <Menu />
      <Degustazione />
      <GiftCard />
      <Gallery />
      <Contatti />
      <Footer />
    </>
  )
}
