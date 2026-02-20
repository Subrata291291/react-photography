const AboutInfoSection = ({ data }) => {
  if (!data?.aboutInfo) return null

  const { left, right } = data.aboutInfo

  return (
    <section className="about-info-area p-100">
      <div className="container">
        <div className="row">

          {/* Left Side */}
          <div className="col-12 col-md-5 order-2 order-md-1">
            <div className="about-info-left">

              <div className="about-info-pic d-none d-md-block">
                <img
                  src={left.image}
                  alt="about-info"
                  className="img-fluid"
                />
              </div>

              <div className="title-box">
                <h3 data-aos="fade-right">
                  {left.title}
                </h3>

                <p data-aos="fade-left">
                  {left.description}
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 offset-md-1 order-1 order-md-2">
            <div className="about-info-right">

              <div className="title-box">
                <h3 data-aos="fade-right">
                  {right.title}
                </h3>

                {right.paragraphs.map((text, index) => (
                  <p
                    key={index}
                    data-aos="fade-left"
                    className={index > 0 ? "mt-4" : ""}
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="about-info-pic">
                <img
                  src={right.image}
                  alt="about-info"
                  className="img-fluid"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutInfoSection
