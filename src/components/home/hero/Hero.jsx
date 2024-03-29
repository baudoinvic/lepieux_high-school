import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container ml-10">
          <div className="row">
            <Heading
              subtitle="WELCOME TO LEPIEUX INSTITUTE"
              title="High School Education Excellence"
            />
            <p className="text-white">
              We're happy to connect with you in whatever way you're most
              comfortable
            </p>
            <div className="flex mt-5">
              <Link to="">
                <button className="primary-btn mr-4 py-4 px-4">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>

              <Link to="/courses">
                <button className="bg-white text-teal-500 border border-teal-500 py-4 px-4 rounded cursor-pointer">
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
