import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import Heading from "../common/heading/Heading"

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container">
          <Heading
            subtitle="Our Course Offerings"
            title="Explore Our Range of Courses"
          />
        </div>
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <p>{val.desc}</p>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    {/* <label htmlFor=''>(5.0)</label> */}
                  </div>
                  <div className="details">
                    {val.courTeacher &&
                      val.courTeacher.map((details) => (
                        <React.Fragment key={details.name}>
                          <div className="box">
                            <div className="dimg">
                              <img src={details.dcover} alt="" />
                            </div>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>

              {/* <button className='outline-btn'>ENROLL NOW </button> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesCard
