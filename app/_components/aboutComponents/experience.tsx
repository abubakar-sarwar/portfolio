"use client";
import { useEffect } from "react";
import { addObserver, createObserver, removeObserver } from "@/utils/utils";

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
            <p className="experience-para">Motive Coder</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">November 2023 — Present</span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">
              As a dedicated MERN Stack Developer at Motive Coder, I work
              closely with teams in this dynamic profession to convert design
              concepts into responsive and interactive online applications.
              Focusing on developing interactive and responsive web
              applications. My area of expertise is using Express.js, React.js,
              Next.js, Node.js, and MongoDB to create scalable, dynamic
              solutions that place the user experience first.
              <br />I have undertaken several notable projects during my tenure
              at Motive Coder:
            </p>
            <p className="project_name">Just Imagine:</p>
            <ul className="project_do_list">
              <li>
                Developed the front-end of a multi-role user application using
                modern web technologies.
              </li>
              <li>
                Ensured full responsiveness, delivering a seamless experience
                across various devices and screen sizes.
              </li>
              <li>
                Implemented dynamic user interfaces and role-based features to
                enhance user engagement and accessibility.
              </li>
              <li>
                Utilized best practices for performance optimization and
                maintainability, ensuring a robust and scalable codebase.
              </li>
            </ul>
            <p className="project_name">Dream Home:</p>
            <ul className="project_do_list">
              <li>
                Contributed to both the front-end and back-end development of an
                e-commerce furniture application.
              </li>
              <li>
                Implemented discount functionalities and integrated and created
                part of a RESTful API using Node.js and MongoDB for efficient
                data management.
              </li>
              <li>
                Contributed to performance optimization and maintainability for
                a scalable and robust platform.
              </li>
            </ul>
            <p className="project_name">GuideLine:</p>
            <ul className="project_do_list">
              <li>
                Collaboratively developed front-end components within a team
                while independently handling backend development and integration
                for a consultancy application.
              </li>
              <li>
                Implemented back-end functionalities and integrated various
                services to ensure seamless communication and data flow.
              </li>
              <li>
                Leveraged both front-end and back-end expertise to deliver a
                cohesive and user-friendly consultancy platform.
              </li>
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
              My career has been built on my ability to independently provide
              high-caliber web apps that are customized to meet the objectives
              of clients. In the freelance world, I've built a solid reputation
              for dependability and excellence thanks to my focus on seamless,
              user-friendly experiences.
            </p>
            <p className="project_name">Plates For Cars:</p>
            <ul className="project_do_list">
              <li>
                Independently developed front-end components using React.js
                while managing backend development and integration with Laravel
                for an e-commerce and online car plates editor platform.
              </li>
              <li>
                Implemented robust back-end functionalities and integrated
                various services to ensure seamless communication and data flow.
              </li>
              <li>
                Leveraged both front-end and back-end expertise to deliver a
                cohesive, user-friendly platform for purchasing car plates and
                customizing designs online.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
