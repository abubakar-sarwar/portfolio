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
        <Link href="/" aria-label="Muhammad Abu Bakar — Home">
          <Image
            src="/assets/logo.png"
            alt="Muhammad Abu Bakar logo"
            width={50}
            height={50}
          ></Image>
          <Image
            src="/assets/logo.svg"
            alt="Muhammad Abu Bakar"
            width={160}
            height={50}
            className="ml-1 name-logo"
            loading="eager"
            priority
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
            <button className="menu-close" onClick={() => setMenuMobile(false)} aria-label="Close menu">
              <FiX />
            </button>
            <ul className="menu-list flx flx-c flx-jc">
              <li>
                <div className="link-bg">
                  <Image
                    src="/assets/projects.avif"
                    alt="Expertise section"
                    width={500}
                    height={500}
                    quality={50}
                    sizes="(max-width: 1024px) 30vw, 50vw"
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
                    src="/assets/about-me.avif"
                    alt="About Me section"
                    quality={50}
                    sizes="(max-width: 1024px) 30vw, 50vw"
                    width={500}
                    height={500}
                  />
                </div>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <div className="link-bg">
                  <Image
                    src="/assets/experience.avif"
                    alt="Projects section"
                    quality={50}
                    sizes="(max-width: 1024px) 30vw, 50vw"
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
