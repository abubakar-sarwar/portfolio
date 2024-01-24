"use client";

import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import {
  addObserver,
  addTilt,
  removeObserver,
  removeTilt,
} from "@/utils/utils";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      addObserver();
    }

    addTilt();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeBg = document.querySelector(".home-bg") as HTMLDivElement; // Type assertion to HTMLDivElement

      if (homeBg) {
        const opacity = 1 - scrollPosition / 600; // Adjust the division factor as needed

        if (opacity > 0) {
          homeBg.style.opacity = Math.max(0, opacity).toString();
        } else {
          homeBg.style.opacity = "0";
        }
      }
    };

    const handleMouse = (e: MouseEvent) => {
      const circleCursor = document.querySelector(
        ".circle-cursor"
      ) as HTMLDivElement;
      const xAxis = e.clientX;
      const yAxis = e.clientY;
      circleCursor.style.transform = `translate(${xAxis}px, ${yAxis}px)`;

      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === "A" || target.classList.contains("link");
      const isPopped = target.classList.contains("lr-crc");

      if (isLink) {
        circleCursor.style.transform += " scale(1.4)";
      }

      if (isPopped) {
        circleCursor.style.transform += " scale(3)";
        circleCursor.style.opacity = "0";
      } else if (circleCursor.style.opacity !== "1") {
        circleCursor.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouse);

      removeObserver();
      removeTilt();
    };
  }, []);

  return (
    <>
      <div className="circle-cursor"></div>
      <section>
        <div className="home-top">
          <img src="/assets/bg_home_2.svg" alt="brand" className="bg-img" />
          <div className="home-bg"></div>
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="home-col">
                  <div className="main-copy">
                    <h5>Muhammad Abu Bakar</h5>
                    <h1 className="large mt-1">
                      I'm developing Creative & Interactive webapps.
                    </h1>
                    <h3 className="header-light mt-1">
                      Over the past 3 years, as a developer, I build web-based
                      solutions that prioritize functionality and user
                      experience. I enjoy turning ideas into reality by creating
                      practical and visually appealing web applications.
                    </h3>
                    <nav className="links flx flx-c">
                      <h4>
                        <Link href="#portfolio" className="scroll-to special">
                          View Projects
                        </Link>
                      </h4>
                      <span className="ml-1 mr-1">or</span>
                      <h4>
                        <Link href="about" className="internal special">
                          Read About Me
                        </Link>
                      </h4>
                    </nav>
                  </div>
                </div>
              </div>
              <Link href="#portfolio" className="ic-mouse">
                <div className="ic-scroll"></div>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="flx flx-c flx-jc">
              <Image
                src="/assets/bg_home_04.png"
                alt="abubakar"
                className="banner_image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about sec-pd">
          <div className="container">
            <div className="sec-title">
              <h1 className="title animate animate-top">Case studies</h1>
            </div>
            <div className="featured right-flow">
              <div className="row">
                <div className="col-50">
                  <div className="flx featured-img animate">
                    <img
                      src="/assets/project_01.png"
                      alt="project"
                      className="img-fluid"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
                <div className="col-50 flx flx-c">
                  <div className="item detail-right animate">
                    <span>Festured Project</span>
                    <h1>Learning Cafe</h1>
                    <p className="m-2">
                      A platform for posting courses which are designed as per
                      the Industry demand with full Career Assistance.
                    </p>
                    <ul className="item-tool">
                      <li>React</li>
                      <li>Laravel</li>
                      <li>MySQL</li>
                      {/* <li>&#60;/&#62;</li> */}
                    </ul>
                    <div className="links">
                      <ul className="ic-link">
                        <li>
                          <Link href="/" target="_blank" className="ic-git">
                            <AiFillGithub />
                          </Link>
                        </li>
                        <li>
                          <Link href="/" target="_blank" className="ic-live">
                            <BsArrowRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured left-flow">
              <div className="row">
                <div className="col-50 flx flx-c">
                  <div className="item detail-left animate">
                    <span>Festured Project</span>
                    <h1>Hirely</h1>
                    <p className="m-2">
                      Hirely is a platform where candidates can get hired by the
                      recruiters from different upcoming starups.
                    </p>
                    <ul className="item-tool">
                      <li>React</li>
                      <li>Next Js</li>
                      <li>TypeScript</li>
                      <li>MySQL</li>
                    </ul>
                    <div className="links">
                      <ul className="ic-link">
                        <li>
                          <Link href="/" target="_blank" className="ic-git">
                            <AiFillGithub />
                          </Link>
                        </li>
                        <li>
                          <Link href="/" target="_blank" className="ic-live">
                            <BsArrowRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-50">
                  <div className="flx flx-je featured-img animate">
                    <img
                      src="/assets/project_02.png"
                      alt="project"
                      className="img-fluid"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about">
            <div className="sec-title">
              <h1 className="title animate animate-top">WHAT'S NEW?</h1>
            </div>
            <div className="row">
              <div className="col-50 mb-2">
                <div className="card-tilt lr-crc">
                  <div className="content">
                    <div className="txt dsc-insta">
                      <p>
                        <strong>Social</strong>&nbsp;latest on instagram.
                      </p>
                      <Link href="/" target="_blank" className="mt-1 lr-crc">
                        Discover My Insta&nbsp;
                        <BsArrowRight />
                      </Link>
                    </div>
                    <img
                      src="/assets/card-insta.png"
                      alt="instagram"
                      className="card-img"
                    />
                  </div>
                  <div className="card-tilt-skew"></div>
                </div>
              </div>
              <div className="col-50 mb-2">
                <div className="card-tilt lr-crc">
                  <div className="content">
                    <div className="txt">
                      <p>
                        <strong>Get In Touch</strong>&nbsp;on professional
                        platforms. Feel free to browse my other profiles for a
                        broader view of my interests and contributions across
                        the web.
                      </p>
                      <ul className="ic-link flx flx-c mt-1">
                        <li>
                          <Link
                            href="/"
                            target="_blank"
                            className="ic-git lr-crc"
                          >
                            <AiFillGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            target="_blank"
                            className="ic-live lr-crc"
                          >
                            <AiFillLinkedin />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="/assets/card-git.png"
                      alt="instagram"
                      className="card-img"
                    />
                  </div>
                  <div className="card-tilt-skew"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="skills sec-pd">
          <div className="container">
            <div className="row">
              <div className="col-3 md-full">
                <div className="skills-details animate">
                  <div className="sec-title">
                    <h1 className="title">Expertise</h1>
                  </div>
                  <h2 style={{ transitionDelay: ".15s" }}>Front-end Dev</h2>
                  <p style={{ transitionDelay: ".25s" }}>
                    Passionate about UI/UX. Over 3 years of development
                    experience in HTML5, CSS3, SCSS, Tailwind CSS, JS, ReactJS
                    and NextJS frameworks.
                  </p>
                  <h2 style={{ transitionDelay: ".35s" }} className="mt-1">
                    Back-end Dev
                  </h2>
                  <p style={{ transitionDelay: ".45s" }}>
                    Over 1 years of development experience in REST API Using
                    Laravel with MYSQL and Node JS with MonogDB.
                  </p>
                  <p style={{ transitionDelay: ".55s" }} className="mt-2">
                    All My Websites/Webapps Are Lovingly Hand Coded, Responsive
                    and Cross-browser compatible.
                  </p>
                </div>
              </div>
              <div className="col-7 md-full">
                <div className="skills-wrap">
                  <div className="skills-case flx animate">
                    <div className="case-group">
                      <div className="case c-mb">
                        <Image
                          src="/assets/react.png"
                          alt="React"
                          width={65}
                          height={65}
                        />
                        <p>React JS</p>
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/next.png"
                          alt="React"
                          layout="responsive"
                          width={130}
                          height={40}
                        />
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/node.svg"
                          alt="node"
                          width={57}
                          height={57}
                        />
                      </div>
                      <div className="case">
                        <Image
                          src="/assets/typescript.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                      </div>
                    </div>
                    <div className="case-group c-mr">
                      <div className="case c-mb">
                        <Image
                          src="/assets/laravel.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/mysql.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/mongoDB.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                      </div>
                      <div className="case">
                        <Image
                          src="/assets/tailwind.png"
                          alt="jquery"
                          width={57}
                          height={57}
                        />
                      </div>
                    </div>
                    <div className="case-group c-mr">
                      <div className="case c-mb">
                        <Image
                          src="/assets/html.png"
                          alt="React"
                          width={75}
                          height={70}
                        />
                        <p>HTML</p>
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/css.png"
                          alt="React"
                          width={63}
                          height={60}
                        />
                        <p>CSS</p>
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/js.png"
                          alt="React"
                          width={57}
                          height={57}
                        />
                        <p>JavaScript</p>
                      </div>
                      <div className="case">
                        <Image
                          src="/assets/sass.png"
                          alt="React"
                          width={75}
                          height={65}
                        />
                      </div>
                    </div>
                    <div className="case-group c-mr">
                      <div className="case c-mb">
                        <Image
                          src="/assets/postman.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                      </div>
                      <div className="case c-mb">
                        <Image
                          src="/assets/jquery.png"
                          alt="React"
                          width={130}
                          height={40}
                        />
                        <p>Jquery</p>
                      </div>
                      <div className="case c-mb"></div>
                      <div className="case"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
