import React from "react"
import brandData from "../data/brandData"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const BrandSection = () => {
  return (
    <section className="brand-area">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4000}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 4 },
              }}
              className="sponsored_slider"
            >
              {brandData.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="slider_content text-center">
                    <img
                      src={brand.image}
                      alt={`brand-${brand.id}`}
                      className="img-fluid"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSection
