import Banner from "../components/Banner"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import WorkSection from "../components/WorkSection"
import BlogSection from "../components/BlogSection"
import aboutData from "../data/aboutData" 

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection data={aboutData} />
      <ServicesSection/>
      <WorkSection/>
      <BlogSection/>
    </>
  )
}

export default Home
