import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animateOnScroll = (container) => {
  if (!container) return

  const ctx = gsap.context(() => {

    const elements = container.querySelectorAll(".animate")

    elements.forEach((el) => {
      gsap.from(el, {
        y: 60,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      })
    })

  }, container)

  return () => ctx.revert()
}
