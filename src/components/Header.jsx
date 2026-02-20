import { useEffect, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const Header = () => {

  const collapseRef = useRef(null)
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "My Services", path: "/services" }
  ]

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-area")
      if (window.scrollY > 50) {
        header?.classList.add("scrolled")
      } else {
        header?.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto close mobile menu
  const closeMenu = () => {
    if (collapseRef.current?.classList.contains("show")) {
      collapseRef.current.classList.remove("show")
    }
  }

  return (
    <>
      <header>
        <section className="header-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg">

              {/* Logo */}
              <Link className="navbar-brand" to="/" onClick={closeMenu}>
                <img src={logo} alt="logo" width="120" />
              </Link>

              {/* Toggle */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Nav Items */}
              <div
                className="collapse navbar-collapse"
                id="navbarContent"
                ref={collapseRef}
              >
                <ul className="navbar-nav ms-auto align-items-lg-center">

                  {navItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link active fw-bold"
                            : "nav-link"
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}

                  {/* Dropdown */}
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </span>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/services/wedding"
                          onClick={closeMenu}
                        >
                          Wedding
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/services/reception"
                          onClick={closeMenu}
                        >
                          Reception
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/services/party"
                          onClick={closeMenu}
                        >
                          Party
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  {/* Modal */}
                  <li className="nav-item ms-lg-3">
                    <button
                      className="common_btn btn"
                      data-bs-toggle="modal"
                      data-bs-target="#appointmentModal"
                    >
                      Book Appointment
                    </button>
                  </li>

                </ul>
              </div>
            </nav>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
