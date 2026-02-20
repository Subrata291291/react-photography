import { useEffect } from "react"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

import logo from "../assets/images/logo.png"
import galleryData from "../data/galleryData"


const Footer = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='mygallery']", {})

    return () => {
      Fancybox.destroy()
    }
  }, [])
  
  return (
    <footer className="footer-area p-100">
      <div className="container">
        <div className="row justify-content-between">

          {/* Logo + About */}
          <div className="col-12 col-md-12 col-lg-3 mb-4">
            <div className="footer-box">
              <img src={logo} alt="logo" className="footer-logo" />
              <p>
                Photography inila miss uman saten eliten finus vivera alacus miss
                the drudean seneice miss notumane tonec a fermen.
              </p>

              <ul className="d-flex gap-3 list-unstyled social-icon mt-3">
                <li>
                  <a href="#" className="text-white">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="footer-box footer-gallery">
              <h3>
                Gallery <span className="text-warning">Pic</span>
              </h3>

              <div className="row g-2">
                {galleryData.map((item) => (
                <div className="col-4" key={item.id}>
                      <a
                        href={item.image}
                        data-fancybox="mygallery"
                        data-caption="portfolio"
                      >
                        <img src={item.image} alt="portfolio" className="img-fluid rounded"  />
                      </a>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-5 col-lg-3 mb-4">
            <div className="footer-box footer-links">
              <h3>
                Contact <span className="text-warning">Info</span>
              </h3>

              <ul>
                <li>
                  <a href="tel:7001906952">
                    <span><i className="fa-solid fa-phone-volume me-2"></i></span>
                    7001906952
                  </a>
                </li>

                <li>
                  <a href="mailto:subrata291291@gmail.com">
                    <span><i className="fa-regular fa-envelope me-2"></i></span>
                    subrata291291@gmail.com
                  </a>
                </li>

                <li>
                    <a href="">
                      <span><i className="fa-solid fa-location-dot me-2"></i></span>
                    Boro Nilpur, Burdwan - 713103
                    </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright-box text-center">
          <p>Copyrights @2024 Dream Shot Photography | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
