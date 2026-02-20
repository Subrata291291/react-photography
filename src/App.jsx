import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import ReviewSection from "./components/ReviewSection"
import BrandSection from "./components/BrandSection"
import Services from "./pages/Services"

function App() {
  return (
    <>
    
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <ReviewSection/>
      <BrandSection/>
      <Footer />
    </>
  )
}

export default App
