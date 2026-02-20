import camera from "../assets/images/camera.svg"
import video from "../assets/images/video.svg"
import retouching from "../assets/images/retouching.svg"
import arial from "../assets/images/arial.svg"
import lighting from "../assets/images/lighting.svg"
import grading from "../assets/images/grading.svg"

import wedding from "../assets/images/1.jpg"
import fashion from "../assets/images/fashion.jpg"
import personal from "../assets/images/personal.jpg"
import travel from "../assets/images/travel.jpg"
import sports from "../assets/images/sports.jpg"
import interior from "../assets/images/interior.jpg"

const servicesData = [
  {
    id: 1,
    title: "Photography",
    description:
      "Photography bibendum eros amet vacun the vulputate in the vitae miss.",
    image: camera,
    serviceImage: wedding,
    borderClass: "border-01",
  },
  {
    id: 2,
    title: "Videography",
    description:
      "Videography bibendum eros amen vacun the vulputate in the vitae miss.",
    image: video,
    serviceImage: fashion,
    borderClass: "border-01",
  },
  {
    id: 3,
    title: "Photo Retouching",
    description:
      "Photo Retouching bibenum eros amen vacun the vulputate the vitae miss.",
    image: retouching,
    serviceImage: personal,
    borderClass: "border-01",
  },
  {
    id: 4,
    title: "Aerial Photography",
    description:
      "Aerial Photography bibendum eros amen vacun the vulputate in the miss.",
    image: arial,
    serviceImage: travel,
    borderClass: "border-02",
  },
  {
    id: 5,
    title: "Lightning Setup",
    description:
      "Lightning Setup bibendum eros amen vacus duru in the vitae miss.",
    image: lighting,
    serviceImage: sports,
    borderClass: "border-02",
  },
  {
    id: 6,
    title: "Video Color Grading",
    description:
      "Video Color Grading bibendum amen vacus the vulputate in the vitae.",
    image: grading,
    serviceImage: interior,
    borderClass: "border-02 border-03",
  },
]

export default servicesData
