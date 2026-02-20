const ContactSection = ({ data }) => {
  if (!data) return null

  return (
    <section className="contact-area p-100">
      <div className="container">
        <div className="row justify-content-between">

          {/* Left Side */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="contact-left">
              <div className="title-box">
                <h3>
                  {data.heading.split(" ")[0]}{" "}
                  <span>
                    {data.heading.split(" ")[1]}
                  </span>
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
                            <a href={item.link}>
                              {item.value}
                            </a>
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

          {/* Right Side (Form) */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="contact-right shadow">
              <form className="contact-form class-form">

                <div className="row">

                  <div className="col-12 col-md-6">
                    <input type="text" placeholder="John" required />
                  </div>

                  <div className="col-12 col-md-6">
                    <input type="text" placeholder="Doe" required />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Address"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      placeholder="info@gmail.com"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <input
                      type="tel"
                      placeholder="9183537282"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      placeholder="Message"
                      rows="2"
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="common_btn"
                      type="submit"
                    >
                      Send Mail
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