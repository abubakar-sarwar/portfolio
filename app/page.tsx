"use client";
import { useEffect } from "react";
import Link from "next/link";
import { addObserver, createObserver, removeObserver } from "@/utils/utils";
import Image from "next/image";
import WhatsNew from "@/app/_components/homeComponents/whatsNew";
import Skills from "@/app/_components/homeComponents/skills";
import Projects from "@/app/_components/homeComponents/projects";

export default function Home() {
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      var observer = createObserver();
      addObserver(observer);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeBg = document.querySelector(".home-bg") as HTMLDivElement; // Type assertion to HTMLDivElement

      if (homeBg) {
        const opacity = 1 - scrollPosition / 600; // Adjust the division factor as needed.

        if (opacity > 0) {
          homeBg.style.opacity = Math.max(0, opacity).toString();
        } else {
          homeBg.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      removeObserver(observer);
    };
  }, []);

  return (
    <>
      <section>
        <div className="home-top">
          <img src="/assets/bg_home_2.svg" alt="brand" className="bg-img" />
          <div className="home-bg"></div>
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
                        <a href="#Projects" className="scroll-to special">
                          View Projects
                        </a>
                      </h4>
                      <span className="ml-1 mr-1">or</span>
                      <h4>
                        <Link href="/" className="internal special">
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
        </div>
      </section>
      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <WhatsNew />
      </section>

      <section id="Experties">
        <Skills />
      </section>
    </>
  );
}
