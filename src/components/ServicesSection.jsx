import React from "react"
import servicesData from "../data/servicesData"

const ServicesSection = () => {
  return (
    <section
      className="service-area bg-black p-100">
      <div className="container">
        <div className="title-box">
          <h3>
            My Services
          </h3>
          <p>
            Quverra tristique justo duis vitae diam neque nivamus aestan
            ateuene artinaelition finibus viverra nec lacus setlie suscipe
            tristique.
          </p>
        </div>

        <div className="row">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`col-6 col-md-4 ${service.borderClass}`}
            >
              <div className="service-box">
                <a href="#">
                  <img src={service.image} alt={service.title} />
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
