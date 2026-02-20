import iconCall from "../assets/images/c1.svg"
import iconEmail from "../assets/images/c2.svg"
import iconLocation from "../assets/images/c3.svg"

const contactData = {
  heading: "Contact Info",
  description:
    "Praesent sed nisl ullamcorper the drana duru metus utah phare mavna busnini viventa the ornare ipsum.",

  infoItems: [
    {
      id: 1,
      icon: iconCall,
      title: "Call Us",
      value: "+1 203-123-0606",
      link: "tel:+12031230606"
    },
    {
      id: 2,
      icon: iconEmail,
      title: "Email Us",
      value: "info@phoxel.com",
      link: "mailto:info@phoxel.com"
    },
    {
      id: 3,
      icon: iconLocation,
      title: "Visit Our Office",
      value: "24 King St, Charleston, 29401 USA",
      link: "#"
    }
  ]
}

export default contactData