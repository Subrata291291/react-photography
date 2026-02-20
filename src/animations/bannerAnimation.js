import gsap from "gsap"

export const animateBannerSlide = (container) => {
  if (!container) return

  const activeSlide = container.querySelector(".swiper-slide-active")
  if (!activeSlide) return

  const h6 = activeSlide.querySelector("h6")
  const h1 = activeSlide.querySelector("h1")
  const p = activeSlide.querySelector("p")
  const btn = activeSlide.querySelector(".common_btn")

  if (!h6 || !h1 || !p) return

  // Kill previous tweens
  gsap.killTweensOf([h6, h1, p])

  // Reset immediately before animating
  gsap.set([h6, h1, p], { opacity: 0 })

  const tl = gsap.timeline()

  tl.fromTo(
    h6,
    { x: 40, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 }
  )
    .fromTo(
      h1,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      p,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      btn,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
}
