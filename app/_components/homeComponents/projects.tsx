import { projects } from "@/constants";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="about sec-pd">
      <div className="container">
        <div className="sec-title">
          <h1 className="title animate animate-top">Case studies</h1>
        </div>
        {projects?.map((item: ProjectType, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              className={`featured ${isRight ? "right-flow" : "left-flow"}`}
              key={index}
            >
              <div className={`row ${isRight ? "" : "row-reverse"}`}>
                <div className="col-50">
                  <div
                    className={`flx featured-img animate ${
                      isRight ? "" : "flx-je"
                    }`}
                  >
                    <Image
                      src={item?.image}
                      alt="project"
                      width={100}
                      height={100}
                      className="img-fluid"
                      style={{ width: "100%" }}
                      quality={100}
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      loading="lazy"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>

                <div className="col-50 flx flx-c">
                  <div
                    className={`item animate ${
                      isRight ? "detail-right" : "detail-left"
                    }`}
                  >
                    <span>Featured Project</span>
                    <h1>{item?.title}</h1>
                    <p className="m-2">{item?.description}</p>
                    <ul className="item-tool">
                      {item?.technologies?.map((tec: string, i) => (
                        <li key={i}>{tec}</li>
                      ))}
                    </ul>
                    <div className="links">
                      <ul className="ic-link">
                        {item?.gitLink ? (
                          <li>
                            <Link
                              href={item?.gitLink}
                              target="_blank"
                              className="ic-git"
                              aria-label="Project Github Link"
                            >
                              <AiFillGithub />
                            </Link>
                          </li>
                        ) : null}
                        {item?.liveLink ? (
                          <li>
                            <Link
                              href={item?.liveLink}
                              target="_blank"
                              className="ic-live"
                              aria-label="Project Live Link"
                            >
                              <BsArrowRight />
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
