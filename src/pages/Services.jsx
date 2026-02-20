import React from 'react'
import CommonSection from "../components/CommonSection"
import servicesData from "../data/servicesData"
import arrow from "../assets/images/cta-arrow.png"

const Services = () => {
  return (
    <>
      <CommonSection
        title="My Services"
        description="Praesent sed nisl ullamcorper, viverra magna the finibus viventa ipsum eros amet vacun in the vitae miss."
      />
      <section className="service-area bg-black p-100">
        <div className="container">
          <div className="row">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-12 col-md-6 col-lg-4"
              >
                <div className="box-item">
                  <div className="flip-box">

                    {/* FRONT */}
                    <div
                      className="flip-box-front text-center"
                      style={{
                        backgroundImage: `url(${service.serviceImage})`
                      }}
                    >
                      <div className="inner color-white">
                        <h3 className="flip-box-header">
                          {service.title}
                        </h3>
                        <img
                          src={arrow}
                          alt=""
                          className="flip-box-img"
                        />
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="flip-box-back text-center"
                      style={{ backgroundColor: "#1B1B1B" }}
                    >
                      <div className="inner color-white">
                        <h3 className="flip-box-header">
                          {service.title}
                        </h3>

                        <p>{service.description}</p>

                        <button
                          type="button"
                          className="common_btn btn"
                          data-bs-toggle="modal"
                          data-bs-target="#form-modal"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
