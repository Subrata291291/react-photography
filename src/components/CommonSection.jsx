import React from "react"

const CommonSection = ({ title, description }) => {
  return (
    <section className="common-area">
      <div className="container">
        <h3>{title}</h3>
        <hr className="common-bdr" />
        <p>{description}</p>
      </div>
    </section>
  )
}

export default CommonSection
