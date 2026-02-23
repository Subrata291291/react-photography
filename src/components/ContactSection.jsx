import React, { useState } from "react"

const ContactSection = ({ data }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
      await fetch("https://script.google.com/macros/s/AKfycbweNmglov1UDVMM3W7roc2iDTsKPUQqaHmo_DXccmgE7Hr2XiBFjLr8wzoTSBw0T3kH0Q/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      })

      alert("Appointment Submitted Successfully ✅")

      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        message: ""
      })

    } catch (error) {
      alert("Something went wrong ❌")
    }

    setLoading(false)
  }

  if (!data) return null

  return (
    <section className="contact-area p-100">
      <div className="container">
        <div className="row justify-content-between">

          {/* LEFT SIDE */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="contact-left">
              <div className="title-box">
                <h3>
                  {data.heading.split(" ")[0]}{" "}
                  <span>{data.heading.split(" ")[1]}</span>
                </h3>
                <p>{data.description}</p>
              </div>

              <ul>
                {data.infoItems.map((item) => (
                  <li key={item.id}>
                    <div className="info-box d-flex align-items-center">
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="details">
                        <h6>{item.title}</h6>
                        <p>
                          {item.link !== "#" ? (
                            <a href={item.link}>{item.value}</a>
                          ) : (
                            item.value
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="contact-right shadow">

              <form
                className="contact-form class-form"
                onSubmit={handleSubmit}
              >
                <div className="row">

                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="common_btn"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Mail"}
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection