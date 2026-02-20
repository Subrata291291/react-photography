import React, { useState } from "react"

const AppointmentModal = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: ""
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
      await fetch("https://script.google.com/macros/s/AKfycbyQjJ05-9dC_5By0xmArK005tgbgYQHDXQG7OqF5TrseMlkvyMSnrIwSk_qHt-KPy6GBw/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      })

      alert("Appointment Submitted Successfully ✅")

      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: ""
      })

    } catch (error) {
      alert("Something went wrong ❌")
    }

    setLoading(false)
  }

  return (
    <div className="modal fade" id="form-modal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">

            <h3 className="text-center req-heading">
              <span>Get an </span>Appointment
            </h3>

            <form className="class-form" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">

                  <div className="col-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="common_btn btn"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Get Appointment"}
                    </button>
                  </div>

                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentModal