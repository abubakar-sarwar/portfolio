import Image from "next/image";

const Skills = () => {
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
                Passionate about UI/UX. Over 3+ years of development experience
                in Next.js, React.js, React-Router-Dom, TailwindCSS, SCSS, CSS,
                Redux, Redux ToolKit, GSAP, JavaScript, TypeScript.
              </p>
              <h2 style={{ transitionDelay: ".35s" }} className="mt-1">
                Back-end Dev
              </h2>
              <p style={{ transitionDelay: ".45s" }}>
                Over 2+ years of development experience in Laravel with MySQL
                and Node.js with MonogDB.
              </p>
              <p style={{ transitionDelay: ".55s" }} className="mt-2">
                All My Websites/Webapps Are Lovingly Hand Coded, Responsive and
                Cross-browser compatible.
              </p>
            </div>
          </div>
          <div className="col-7 md-full">
            <div className="skills-wrap">
              <div className="skills-case flx animate">
                <div className="case-group">
                  <div className="case c-mb">
                    <Image
                      src="/skills/react.png"
                      alt="React"
                      width={65}
                      height={65}
                    />
                    <p>React JS</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/next.avif"
                      alt="next"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/node.svg"
                      alt="node"
                      width={57}
                      height={57}
                    />
                  </div>
                  <div className="case">
                    <Image
                      src="/skills/typescript.avif"
                      alt="typescript"
                      width={130}
                      height={40}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/skills/laravel.avif"
                      alt="laravel"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/mysql.avif"
                      alt="mysql"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/mongoDB.avif"
                      alt="mongoDB"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case">
                    <Image
                      src="/skills/tailwind.avif"
                      alt="tailwind"
                      width={57}
                      height={57}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/skills/html.avif"
                      alt="html"
                      width={75}
                      height={70}
                    />
                    <p>HTML</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/css.avif"
                      alt="css"
                      width={63}
                      height={60}
                    />
                    <p>CSS</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/javascript.avif"
                      alt="javascript"
                      width={57}
                      height={57}
                    />
                    <p>JavaScript</p>
                  </div>
                  <div className="case">
                    <Image
                      src="/skills/sass.avif"
                      alt="SASS"
                      width={75}
                      height={65}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/skills/jquery.avif"
                      alt="jquery"
                      width={130}
                      height={40}
                    />
                    <p>Jquery</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/npm.avif"
                      alt="npm"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/postman.avif"
                      alt="postman"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case">
                    <Image
                      src="/skills/vs_code.avif"
                      alt="vs_code"
                      width={130}
                      height={40}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/skills/git.avif"
                      alt="git"
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/redux.avif"
                      alt="redux"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/skills/gsap.avif"
                      alt="gsap"
                      width={130}
                      height={40}
                    />
                  </div>
                  {/* <div className="case">
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
