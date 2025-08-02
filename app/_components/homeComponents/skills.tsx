import { SKILLS } from "@/constants";
import { addTilt, removeTilt } from "@/utils/utils";
import Image from "next/image";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    addTilt();

    return () => {
      removeTilt();
    };
  }, []);

  const chunkArray = (
    arr: {
      icon: string;
      label: string;
    }[],
    size: number,
  ) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const skillData = chunkArray(SKILLS, 5);

  return (
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
                Passionate about creating fast, responsive, and user-centric
                interfaces. I specialize in building seamless digital
                experiences that prioritize performance, accessibility, and
                visual appeal. With over 2+ years of experience, I bring strong
                expertise in UI architecture, component-driven design, and
                modern frontend workflows.
              </p>
              <h2 style={{ transitionDelay: ".35s" }} className="mt-1">
                Back-end Dev
              </h2>
              <p style={{ transitionDelay: ".45s" }}>
                Skilled in building scalable, secure, and high-performance
                server-side systems. I design and develop robust APIs, manage
                databases efficiently, and ensure smooth integration between
                front-end and back-end. With a strong foundation in application
                architecture, authentication, and data handling, I deliver
                backend solutions that are reliable and production-ready.
              </p>
              <p className="mt-1">
                <strong>Technologies</strong>:{" "}
                {SKILLS.map((item) => item.label).join(", ")}
              </p>
            </div>
          </div>
          <div className="col-7 md-full">
            <div className="skills-wrap">
              <div className="skills-case flx animate">
                {skillData.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className={`case-group${
                      groupIndex === skillData.length - 1 ? "" : " c-mr"
                    }`}
                  >
                    {group.map((skill, index) => (
                      <div key={index} className="case-outer c-mb">
                        <div className="case">
                          <Image
                            src={skill.icon}
                            alt={skill.label}
                            width={65}
                            height={65}
                          />
                        </div>
                        <p>{skill.label}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
