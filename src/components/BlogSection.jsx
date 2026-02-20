import React from "react"
import blogData from "../data/blogData"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const BlogSection = () => {
  return (
    <section className="blog-area p-100">
      <div className="container">

        <div className="title-box">
          <h3 data-aos="fade-left">
            My Recent Work
          </h3>
          <p data-aos="fade-right">
            There are few portfolio's I have shared for you to know more about my work.
          </p>
        </div>

        <hr className="border-22" />

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        //   navigation
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
          }}
          className="blog_slider"
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="blog-box position-relative">

                <div className="blog-left">
                  <h6>{blog.category}</h6>

                  <h4>
                    <a href={blog.link}>
                      {blog.title}
                    </a>
                  </h4>

                  <p>{blog.description}</p>

                  <hr className="border-2" />

                  <div className="info-wrapper">
                    <div className="more">
                      <a href={blog.link} className="read-btn">
                        Read more
                      </a>
                    </div>
                    <div className="date">
                      {blog.date}
                    </div>
                  </div>
                </div>

                <div className="blog-right">
                  <img
                    src={blog.image}
                    className="img-fluid"
                    alt={blog.title}
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default BlogSection
