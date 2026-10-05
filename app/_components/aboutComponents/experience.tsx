"use client";
import { useEffect } from "react";
import { addObserver, createObserver, removeObserver } from "@/utils/utils";

const Experience = () => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (typeof IntersectionObserver !== "undefined") {
      observer = createObserver();
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
          <h2 className="title animate animate-top">Experience</h2>
        </div>
        <div className="row animate">
          <div className="col-33">
            <h3 className="experience-des">Full Stack Developer</h3>
          </div>
          <div className="col-33 item-center">
            <p className="experience-para">Epazz Tech</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">October 2025 — Present</span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">Full Stack Developer at Epazz Tech, handling both frontend and backend development.</p>
            <p className="experience-para">I build scalable web applications and collaborate with cross-functional teams.</p>
            <p className="experience-para">I develop robust APIs, implement secure authentication, and craft responsive UI/UX.</p>
            <p className="experience-para">Projects include:</p>
            <p className="project_name">Othership:</p>
            <ul className="project_do_list">
              <li>
                Designed and developed both frontend and backend of a multi-role
                user application using modern web technologies.
              </li>
              <li>
                Built and integrated scalable APIs, implementing secure
                role-based access control for efficient user management.
              </li>
              <li>
                Crafted responsive and intuitive UI/UX to ensure a seamless
                experience across devices.
              </li>
              <li>
                Optimized application performance and enforced strong security
                practices for reliability and data protection.
              </li>
              <li>
                Followed best practices for clean architecture, maintainability,
                and scalability, resulting in a robust and efficient system.
              </li>
            </ul>
          </div>
        </div>
        <div className="row animate mt-2">
          <div className="col-33">
            <h3 className="experience-des">Full Stack Developer</h3>
          </div>
          <div className="col-33 item-center">
            <p className="experience-para">Motive Coder</p>
          </div>
          <div className="col-33 item-right">
            <span className="experience-para">
              November 2023 — October 2025
            </span>
          </div>
          <div className="col-1">
            <p className="experience-para m-1">Software Engineer at Motive Coder, converting design concepts into responsive web applications.</p>
            <p className="experience-para">I specialize in Express.js, React.js, Next.js, Node.js, and MongoDB.</p>
            <p className="experience-para">I build scalable, dynamic solutions that prioritize user experience.</p>
            <p className="experience-para">Notable projects:</p>
            <p className="project_name">BLZ Furniture:</p>
            <ul className="project_do_list">
              <li>
                Developed a modern e-commerce platform using the latest web
                technologies, handling both frontend and backend architecture.
              </li>
              <li>
                Built scalable and secure APIs, implementing authentication and
                role-based access for efficient user and admin management.
              </li>
              <li>
                Designed and optimized a responsive, user-friendly UI/UX to
                enhance customer experience across all devices.
              </li>
              <li>
                Improved performance through efficient data handling, caching
                strategies, and optimized rendering.
              </li>
              <li>
                Followed best practices for maintainability and scalability,
                ensuring a fast, reliable, and production-ready system.
              </li>
            </ul>
            <p className="project_name">KAF:</p>
            <ul className="project_do_list">
              <li>
                Developed the backend of a multi-role user application using
                modern web technologies.
              </li>
              <li>
                Ensured robust security and optimized performance for a seamless
                experience across various devices.
              </li>
              <li>
                Implemented API endpoints and role-based access control to
                enhance user engagement and functionality.
              </li>
              <li>
                Followed best practices for code maintainability and
                scalability, ensuring a resilient and efficient codebase.
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
          </div>
        </div>
        {/* <div className="row animate mt-2">
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
              of clients. In the freelance world, I&apos;ve built a solid reputation
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
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
