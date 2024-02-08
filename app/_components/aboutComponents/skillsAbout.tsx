"use client";
import { BackendSkills, FrontendSkills, Tools } from "@/constants";
import { addObserver, createObserver, removeObserver } from "@/utils/utils";
import { CSSProperties, useEffect } from "react";
import { FiCheck } from "react-icons/fi";

const SkillsAbout = () => {
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      var observer = createObserver();
      addObserver(observer);
    }

    return () => {
      removeObserver(observer);
    };
  }, []);

  return (
    <div className="container">
      <div className="about-skills animate">
        <div className="row">
          <div className="col-33">
            <h2 className="skill-title mb-1">Frontend Technologies</h2>
            <ul className="skills">
              {FrontendSkills.map((item: string, index) => (
                <li
                  className="flx flx-c"
                  style={
                    {
                      "--duration": `${(0.4 + index * 0.2)?.toFixed(1)}s`,
                    } as CSSProperties
                  }
                  key={item}
                >
                  <FiCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-33">
            <h2 className="skill-title mb-1">Backend Technologies</h2>
            <ul className="skills">
              {BackendSkills.map((item: string, index) => (
                <li
                  className="flx flx-c"
                  style={
                    {
                      "--duration": `${(0.4 + index * 0.2)?.toFixed(1)}s`,
                    } as CSSProperties
                  }
                  key={item}
                >
                  <FiCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-33">
            <h2 className="skill-title mb-1">Tools</h2>
            <ul className="skills">
              {Tools.map((item: string, index) => (
                <li
                  className="flx flx-c"
                  style={
                    {
                      "--duration": `${(0.4 + index * 0.2)?.toFixed(1)}s`,
                    } as CSSProperties
                  }
                  key={item}
                >
                  <FiCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
