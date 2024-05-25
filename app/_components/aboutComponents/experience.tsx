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
            <h3 className="experience-des">Frontend Developer</h3>
          </div>
          <div className="col-33 item-center">
            <p className="experience-para">Noble Bridge Technologies</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">November 2023 — Present</span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">
              As a dedicated Frontend Developer at Noble Bridge Technologies, I work closely with teams in this dynamic
              profession to convert design concepts into responsive and interactive online applications. I specialize in
              Next.js, TailwindCSS and Redux for building responsive and interactive Frontend applications.
              <br />
              I have undertaken several notable projects during my tenure at Noble Bridge Technologies:
            </p>
            <p className="project_name">Just Imagine:</p>
            <ul className="project_do_list">
              <li>Developed the front-end of a multi-role user application using modern web technologies.</li>
              <li>Ensured full responsiveness, delivering a seamless experience across various devices and screen sizes.</li>
              <li>Implemented dynamic user interfaces and role-based features to enhance user engagement and
                accessibility.
              </li>
              <li>Utilized best practices for performance optimization and maintainability, ensuring a robust and
                scalable codebase.
              </li>
            </ul>
            <p className="project_name">Dream Home:</p>
            <ul className="project_do_list">
              <li>Contributed to both the front-end and back-end development of an e-commerce furniture application.</li>
              <li>Implemented discount functionalities and integrated and created part of a RESTful API using Node.js
                and MongoDB for efficient data management.</li>
              <li>Contributed to performance optimization and maintainability for a scalable and robust platform.
              </li>
            </ul>
            <p className="project_name">GuideLine:</p>
            <ul className="project_do_list">
              <li>Collaboratively developed front-end components within a team while independently handling backend development and integration for a consultancy application.</li>
              <li>Implemented back-end functionalities and integrated various services to ensure seamless
                communication and data flow.</li>
              <li>Leveraged both front-end and back-end expertise to deliver a cohesive and user-friendly consultancy
                platform.</li>
            </ul>
          </div>
        </div>
        <div className="row animate mt-2">
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
