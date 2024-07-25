"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  const scrollToElement = (className: string) => {
    const element = document.getElementById(className);
    if (element && element.offsetParent !== null) {
      setMenuMobile(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flx flx-sb flx-c">
      <div className="logo">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="brand"
            width={50}
            height={50}
          ></Image>
          <Image
            src="/assets/logo.svg"
            alt="brand"
            width={160}
            height={50}
            className="ml-1 name-logo"
          ></Image>
        </Link>
      </div>
      <div className="nav">
        <button
          onClick={() => setMenuMobile(true)}
          className="menu-toggle link"
          aria-label="menu toggle"
          title="Toggle Menu"
        >
          <FiMenu />
        </button>
        <div className={`menu-container ${menuMobile ? "open-mobile" : ""}`}>
          <div className="menu">
            <div className="menu-close">
              <span onClick={() => setMenuMobile(false)}>
                <FiX />
              </span>
            </div>
            <ul className="menu-list flx flx-c flx-jc">
              <li>
                <div className="link-bg">
                  <Image
                    src="/assets/projects.jpg"
                    alt="projects"
                    unoptimized
                    width={500}
                    height={500}
                  />
                </div>
                <Link
                  onClick={() => scrollToElement("Experties")}
                  href={pathname === "/" ? "#Experties" : "/"}
                >
                  expertise
                </Link>
              </li>
              <li>
                <div className="link-bg">
                  <Image
                    src="/assets/about-me.jpg"
                    alt="projects"
                    unoptimized
                    width={500}
                    height={500}
                  />
                </div>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <div className="link-bg">
                  <Image
                    src="/assets/experience.jpg"
                    alt="projects"
                    unoptimized
                    width={500}
                    height={500}
                  />
                </div>
                <Link
                  onClick={() => scrollToElement("Projects")}
                  href={pathname === "/" ? "#Projects" : "/"}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToElement("Contact")}
                  href={pathname === "/" ? "#Contact" : "/"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
