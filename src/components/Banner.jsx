import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

import { bannerSlides } from "../data/bannerData"
import { animateBannerSlide } from "../animations/bannerAnimation"

const Banner = () => {

  const bannerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    animateBannerSlide(bannerRef.current)
  }, [])

  return (
    <section className="banner-area position-relative" ref={bannerRef}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        watchSlidesProgress={true}
        onSlideChangeTransitionEnd={() =>
          animateBannerSlide(bannerRef.current)
        }
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider">
              <div className="container">
                <div className="banner-content">
                  <h6>{slide.subtitle}</h6>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                </div>

                <div className="banner-btns">
                  <button
                    className="common_btn btn"
                    onClick={() => navigate(slide.buttonLink)}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Banner
