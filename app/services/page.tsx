"use client";
import { useEffect } from "react";
import {
  addObserver,
  addTilt,
  createObserver,
  removeObserver,
  removeTilt,
} from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import {
  BsCode,
  BsServer,
  BsPhone,
  BsRobot,
  BsSpeedometer2,
  BsPeople,
  BsArrowRight,
} from "react-icons/bs";

const services = [
  {
    icon: <BsCode />,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with Next.js, React, Node.js, and MongoDB. From database schema to polished UI — scalable, maintainable, and production-ready.",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB"],
  },
  {
    icon: <BsServer />,
    title: "API Design & Backend Engineering",
    description:
      "RESTful and real-time APIs built with Node.js, Nest.js, and Express. Secure authentication, role-based access control, and optimized data flows.",
    tags: ["Nest.js", "Express.js", "REST", "WebSockets"],
  },
  {
    icon: <BsPhone />,
    title: "Responsive UI / UX Implementation",
    description:
      "Pixel-perfect, cross-device interfaces from Figma designs or concepts. Smooth animations, accessibility-first, and optimized for all screen sizes.",
    tags: ["Tailwind CSS", "SCSS", "GSAP", "TypeScript"],
  },
  {
    icon: <BsRobot />,
    title: "AI Integration",
    description:
      "LLM-powered features using OpenAI, OpenRouter, and LangChain. Chatbots, document Q&A, prompt pipelines, and AI-driven automation built into your product.",
    tags: ["OpenAI", "LangChain", "OpenRouter", "Node.js"],
  },
  {
    icon: <BsSpeedometer2 />,
    title: "Performance Optimization",
    description:
      "Auditing and improving Core Web Vitals, load times, and rendering performance. Caching strategies with Redis, code splitting, and image optimization.",
    tags: ["Redis", "Next.js", "Core Web Vitals", "SEO"],
  },
  {
    icon: <BsPeople />,
    title: "Consultation & Code Review",
    description:
      "Architecture reviews, tech stack guidance, and code audits for teams. Practical advice on scaling, security, and best practices — no fluff.",
    tags: ["Architecture", "Security", "Best Practices"],
  },
];

const ServicesPage = () => {
  useEffect(() => {
    addTilt();
    let observer: IntersectionObserver;
    if (typeof IntersectionObserver !== "undefined") {
      observer = createObserver();
      addObserver(observer);
    }

    return () => {
      removeTilt();
      removeObserver(observer!);
    };
  }, []);

  return (
    <div className="services-page">
      <section>
        <div className="container">
          <div className="about-banner">
            <div className="row">
              <div className="col-50">
                <div>
                  <h1 className="about-title">
                    What I Offer
                  </h1>
                  <div className="ml-desc">
                    <p className="about-para">
                      I build complete web products from idea to deployment.
                    </p>
                    <p className="about-para">
                      Whether you need a full application, a single feature, or
                      an expert eye on your codebase, I can help.
                    </p>
                    <p className="about-para">
                      3+ years delivering scalable, production-ready software
                      across startups, agencies, and direct clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-50">
                <div className="flx flx-c flx-jc">
                  <Image
                    src="/assets/services.avif"
                    className="about-image"
                    width={200}
                    height={300}
                    alt="Muhammad Abu Bakar working on software services"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="sec-title">
            <h2 className="title animate animate-top">SERVICES</h2>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-50 mb-2" key={index}>
                <article className="card-tilt lr-crc service-card">
                  <div
                    className="flx flx-sb"
                    style={{ height: "100%", flexDirection: "column" }}
                  >
                    <div>
                      <div className="service-icon" aria-hidden="true">
                        {service.icon}
                      </div>
                      <h2 className="service-title">{service.title}</h2>
                      <p className="service-desc">{service.description}</p>
                    </div>
                    <ul className="service-tags">
                      {service.tags.map((tag, i) => (
                        <li key={i}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-tilt-skew" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="container">
          <div className="card-tilt lr-crc services-cta">
            <h2>Have a project in mind?</h2>
            <p>
              Let&apos;s talk about what you want to build. I&apos;m open to
              freelance work, part-time roles, and consulting engagements.
            </p>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-abubakar-b238a5298"
              className="lr-crc"
            >
              Get in touch&nbsp;
              <BsArrowRight />
            </Link>
            <div className="card-tilt-skew" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
