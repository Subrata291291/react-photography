import React, { useState, useEffect } from "react"
import workData from "../data/workData"

import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { id: "all", label: "All" },
    { id: "pre-wedding", label: "Pre-Wedding" },
    { id: "wedding", label: "Wedding" },
    { id: "post-wedding", label: "Post-Wedding" },
    { id: "fashion", label: "Fashion" },
  ]

  const filteredWork =
    activeTab === "all"
      ? workData
      : workData.filter((item) => item.category === activeTab)

  // ✅ IMPORTANT: Re-bind Fancybox after render
  useEffect(() => {
    Fancybox.bind("[data-fancybox='mygallery']", {
      groupAll: true,
    })

    return () => {
      Fancybox.destroy()
    }
  }, [filteredWork])   // <-- re-run when tab changes

  return (
    <section className="work-area p-100">
      <div className="container">
        <div className="title-box">
          <h3>My Recent Work</h3>
          <p>
            There are few portfolio's I have shared for you to know more about my work.
          </p>
        </div>

        <hr className="border-2" />

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="work-tab">
              <ul className="tabs d-flex">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`tab-link ${
                      activeTab === tab.id ? "current" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <p>{tab.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              {filteredWork.map((item) => (
                <div
                  key={item.id}
                  className="col-6 col-md-6 col-lg-3"
                >
                  <div className="tab-box">
                    <div className="gallery-content">
                      <a
                        href={item.image}
                        data-fancybox="mygallery"
                        data-caption="portfolio"
                      >
                        <img src={item.image} alt="portfolio" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkSection
