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
          <Image
            src="/assets/bg_home_2.svg"
            alt="coder"
            width={100}
            height={100}
            className="bg-img"
            loading="lazy"
            quality={100}
            sizes="(max-width: 1024px) 30vw, 50vw"
          />
          <div className="home-bg"></div>
          <div className="container">
            <div className="flx flx-c flx-jc">
              <Image
                src="/assets/bg_home_04.avif"
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
                    <p>Muhammad Abu Bakar</p>
                    <h1 className="large mt-1">
                      I'm developing Creative & Interactive webapps.
                    </h1>
                    <h2 className="header-light mt-1">
                      Over the past 3+ years, as a developer, I build web-based
                      solutions that prioritize functionality and user
                      experience. I enjoy turning ideas into reality by creating
                      practical and visually appealing web applications.
                    </h2>
                    <nav className="links flx flx-c">
                      <h3>
                        <a href="#Projects" className="scroll-to special">
                          View Projects
                        </a>
                      </h3>
                      <span className="ml-1 mr-1">or</span>
                      <h3>
                        <Link href="/about" className="internal special">
                          Read About Me
                        </Link>
                      </h3>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="ic-mouse">
                <div className="ic-scroll"></div>
              </div>
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
