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
                      alt="next"
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
                      alt="typescript"
                      width={130}
                      height={40}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/assets/laravel.png"
                      alt="laravel"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/mysql.png"
                      alt="mysql"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/mongoDB.png"
                      alt="mongoDB"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case">
                    <Image
                      src="/assets/tailwind.png"
                      alt="tailwind"
                      width={57}
                      height={57}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/assets/html.png"
                      alt="html"
                      width={75}
                      height={70}
                    />
                    <p>HTML</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/css.png"
                      alt="css"
                      width={63}
                      height={60}
                    />
                    <p>CSS</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/javascript.png"
                      alt="javascript"
                      width={57}
                      height={57}
                    />
                    <p>JavaScript</p>
                  </div>
                  <div className="case">
                    <Image
                      src="/assets/sass.png"
                      alt="SASS"
                      width={75}
                      height={65}
                    />
                  </div>
                </div>
                <div className="case-group c-mr">
                  <div className="case c-mb">
                    <Image
                      src="/assets/jquery.png"
                      alt="jquery"
                      width={130}
                      height={40}
                    />
                    <p>Jquery</p>
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/npm.png"
                      alt="npm"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case c-mb">
                    <Image
                      src="/assets/postman.png"
                      alt="postman"
                      width={130}
                      height={40}
                    />
                  </div>
                  <div className="case">
                    <Image
                      src="/assets/vs_code.png"
                      alt="vs_code"
                      width={130}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills