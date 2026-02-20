import React, { useState } from "react"
import CommonSection from "../components/CommonSection"
import blogData from "../data/blogData"

const Blog = () => {

  const postsPerPage = 2
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogData.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <CommonSection
        title="My Blogs"
        description="Praesent sed nisl ullamcorper, viverra magna the finibus viventa ipsum eros amet vacun in the vitae miss."
      />

      <section className="blog-area p-100">
        <div className="container">
          <div className="row">
            <div className="col-12">

              {/* Blog Posts */}
              {currentPosts.map((blog) => (
                <div
                  key={blog.id}
                  className="blog-box position-relative"
                >
                  <div className="blog-left">
                    <h6>{blog.category}</h6>
                    <h4>
                      <a href={blog.link}>{blog.title}</a>
                    </h4>
                    <p>{blog.description}</p>

                    <hr className="border-2" />

                    <div className="info-wrapper">
                      <div className="more">
                        <a href={blog.link} className="read-btn">
                          Read more
                        </a>
                      </div>
                      <div className="date">{blog.date}</div>
                    </div>
                  </div>

                  <div className="blog-right">
                    <img
                      src={blog.image}
                      className="img-fluid"
                      alt={blog.title}
                    />
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="blog-pagination mt-5">
                <ul className="d-flex align-items-center justify-content-center list-unstyled gap-3">

                  {/* Prev Button */}
                  <li>
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="page-btn"
                    >
                      <i className="fa-solid fa-angle-left"></i>
                    </button>
                  </li>

                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`page-btn ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  {/* Next Button */}
                  <li>
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className="page-btn"
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog