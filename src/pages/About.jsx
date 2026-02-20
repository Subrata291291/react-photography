import CommonSection from "../components/CommonSection"
import aboutData from "../data/aboutData.js"
import AboutSection from "../components/AboutSection"
import AboutInfoSection from "../components/AboutInfoSection"


const About = () => {
  return (
    <>
      <CommonSection
        title="About Me"
        description="Praesent sed nisl ullamcorper, viverra magna the finibus viventa ipsum eros amet vacun in the vitae miss."
      />
      <AboutSection data={aboutData} signatureType="white" className="about-area-1" />
      <AboutInfoSection data={aboutData} />
    </>
  )
}

export default About