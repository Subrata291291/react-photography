const AboutSection = ({ data, signatureType = "dark", className = "" }) => {
  if (!data) return null 

  return (
    <section className={`about-area p-100 ${className}`}>
      <div className="container">
        <div className="row">

          {/* Left Side */}
          <div className="col-12 col-md-6">
            <div className="about-left">
              <div className="title-box">
                <h3>{data.title}</h3>

                <p>{data.description}</p>

                <ul>
                  {data.highlights?.map((item, index) => (
                    <li key={index}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>

                <hr className="border-2" />
              </div>

              <div className="author-box">
                <ul className="d-flex align-items-center">
                  <li>
                    <img
                      src={data.author.signatures[signatureType]}
                      alt="signature"
                    />
                  </li>
                  <li className="ms-3">
                    <h4>{data.author?.name}</h4>
                    <p>{data.author?.role}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6">
            <div className="about-right">
              <div className="about-pic">
                <img
                  src={data.image}
                  alt={data.author?.name}
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

export default AboutSection
