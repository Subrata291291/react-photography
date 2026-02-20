import React from "react"
import { useNavigate } from "react-router-dom"
import reviewData from "../data/reviewData"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const ReviewSection = () => {
  const navigate = useNavigate()

  return (
    <section className="review-area p-100 bg-black">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-12 col-md-6">
            <div className="review-left">
              <div className="title-box">
                <h3>
                  Need help with professional photography? Let's work together!
                </h3>
              </div>

              <button
                type="button"
                className="common_btn btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="col-12 col-md-5 offset-md-1">
            <div className="review-right">

              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="review_slider"
              >
                {reviewData.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="slider_content">
                      <div className="review-content">
                        <div className="title-box">

                          <h3>
                            Client's <span>Review</span>
                          </h3>

                          <p>{review.description}</p>

                          <hr className="border-04" />

                          <ul className="d-flex align-items-center">
                            <li>
                              <div className="author-pic">
                                <img
                                  src={review.image}
                                  alt={review.name}
                                />
                              </div>
                            </li>

                            <li>
                              <div className="author-name">
                                <h6 className="mb-2">
                                  {review.name}
                                </h6>
                                <span>
                                  {review.designation}
                                </span>
                              </div>
                            </li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              </Swiper>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ReviewSection
