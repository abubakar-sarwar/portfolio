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
              <li>Designed and developed frontend and backend of a multi-role application.</li>
              <li>Built scalable APIs with secure role-based access control.</li>
              <li>Crafted responsive UI/UX for seamless cross-device experience.</li>
              <li>Optimized performance and enforced security best practices.</li>
              <li>Followed clean architecture principles for maintainability and scalability.</li>
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
              <li>Developed a full-stack e-commerce platform handling frontend and backend.</li>
              <li>Built secure APIs with authentication and role-based access control.</li>
              <li>Designed responsive UI/UX for optimal customer experience across devices.</li>
              <li>Improved performance via caching strategies and optimized rendering.</li>
            </ul>
            <p className="project_name">KAF:</p>
            <ul className="project_do_list">
              <li>Developed the backend of a multi-role user application.</li>
              <li>Implemented API endpoints and role-based access control.</li>
              <li>Ensured robust security and optimized cross-device performance.</li>
            </ul>
            <p className="project_name">Dream Home:</p>
            <ul className="project_do_list">
              <li>Contributed to frontend and backend of an e-commerce furniture app.</li>
              <li>Built RESTful API endpoints using Node.js and MongoDB.</li>
              <li>Implemented discount features and optimized platform performance.</li>
            </ul>
            <p className="project_name">GuideLine:</p>
            <ul className="project_do_list">
              <li>Built frontend components collaboratively and handled backend independently.</li>
              <li>Integrated backend services to ensure seamless data flow.</li>
              <li>Delivered a cohesive full-stack consultancy platform.</li>
            </ul>
            <p className="project_name">Just Imagine:</p>
            <ul className="project_do_list">
              <li>Developed the frontend of a multi-role user application.</li>
              <li>Implemented dynamic interfaces and role-based UI features.</li>
              <li>Ensured full responsiveness across all devices and screen sizes.</li>
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
