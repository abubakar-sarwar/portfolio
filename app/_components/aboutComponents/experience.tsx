"use client";
import { useEffect } from "react";
import { addObserver, createObserver, removeObserver } from "@/utils/utils";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      var observer = createObserver();
      addObserver(observer);
    }

    return () => {
      removeObserver(observer);
    };
  }, []);

  return (
    <div className="experience mt-2">
      <div className="container">
        <div className="sec-title mb-2">
          <h1 className="title animate animate-top">Experience</h1>
        </div>
        <div className="row animate">
          <div className="col-33">
            <h3 className="experience-des">MERN Stack Developer</h3>
          </div>
          <div className="col-33 item-center">
            <p className="experience-para">Noble Bridge Technologies</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">November 2023 — Present</span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">
              As a dedicated MERN Stack Developer at Noble Bridge Technologies,
              I specialize in crafting seamless user interfaces that are smooth
              and easy to use. I work closely with teams in this dynamic
              profession to convert design thoughts into responsive and
              interactive online applications. <br /> I specialize in Node.js
              and Express.js for server-side development, while also utilizing
              Next.js for building responsive and interactive front-end
              applications.
            </p>
          </div>
        </div>
        <div className="row animate mt-1">
          <div className="col-33">
            <h3 className="experience-des">Freelaner</h3>
          </div>
          <div className="col-33 item-center">
            <p className="experience-para">Fiverr</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">August 2021 — Present</span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">
              One notable project involved developing a dynamic e-commerce
              platform with custom real time cars number plates editing for a
              client from United Kingdom. <br /> You can explore this project:
              <Link
                className="ml-1"
                target="_blank"
                href="https://boostremap.co.uk"
              >
                <strong>
                  https://boostremap.co.uk
                  <BsArrowRight />
                </strong>
              </Link>
              <br /> This experience confirmed my capacity to produce customized
              online solutions while working alone, and I'm excited to keep
              applying my love of coding to new projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
