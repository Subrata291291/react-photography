import aboutImage from "../assets/images/about.jpg"
import aboutImage2 from "../assets/images/about2.jpg"
import aboutImage3 from "../assets/images/about3.jpg"
import signatureDark from "../assets/images/signature-dark.svg"
import signatureWhite from "../assets/images/signature.svg"

export const aboutData = {
  title:
    "Hello, I'm Martin Dan, a professional photographer based on New York",

  description:
    "I love to pause the wild, happy and real moments of life...",

  highlights: [
    "Over 15 years of experience",
    "200+ successfully executed projects",
    "Exceptional work quality"
  ],

  author: {
    name: "Martin Dan",
    role: "Founder of Dreamshot",
    signatures: {
      dark: signatureDark,
      white: signatureWhite
    }
  },

  image: aboutImage,

  //NEW SECTION DATA
  aboutInfo: {
    left: {
      title: "My only mission: Capture captivating moments",
      description:
        "Nulla quis efficitur lacus, pulvinar posuere augue...",
      image: aboutImage2
    },

    right: {
      title: "Why I started as a photographer",
      paragraphs: [
        "Nulla quis efficitur lacus, pulvinar posuere augue...",
        "Integer leo nisl, auctor ac aliquam a, placerat quis risus..."
      ],
      image: aboutImage3
    }
  }
}

export default aboutData
