import React from "react"

const AppointmentModal = () => {
  return (
    <div
      className="modal fade"
      id="form-modal"
      tabIndex="-1"
      aria-labelledby="form-modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">

            <h3 className="text-center req-heading">
              <span>Get an </span>Appointment
            </h3>

            <form className="class-form">
              <div className="container">
                <div className="row">

                  <div className="col-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="0665 Broadway NY, New York 10001"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Email ID</label>
                    <input
                      type="email"
                      placeholder="info@gmail.com"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="9183537282"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="common_btn btn"
                      style={{ border: "1px solid" }}
                    >
                      Get Appointment
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