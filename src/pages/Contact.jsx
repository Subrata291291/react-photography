import React from 'react'
import CommonSection from "../components/CommonSection"
import ContactSection from "../components/ContactSection"
import contactData from "../data/contactData"

const Contact = () => {
  return (
    <>
      <CommonSection
        title="My Blogs"
        description="Praesent sed nisl ullamcorper, viverra magna the finibus viventa ipsum eros amet vacun in the vitae miss."
      />
      <ContactSection data={contactData} />
    </>
  )
}

export default Contact
