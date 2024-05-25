import Image from "next/image";
import SkillsAbout from "@/app/_components/aboutComponents/skillsAbout";
import Experience from "@/app/_components/aboutComponents/experience";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section>
        <div className="container">
          <div className="about-banner">
            <div className="row">
              <div className="col-50">
                <div>
                  <h1 className="about-title">
                    <span>Muhammad</span> <br />
                    <span className="ml-name">Abu Bakar</span>
                  </h1>
                  <div className="ml-desc">
                    <p className="about-para">Hello, I'm Muhammad Abu Bakar.</p>
                    <p className="about-para">
                      Passionate MERN Stack Developer with 3+ years of
                      experience in web development in the tech industry.
                      Skilled at creating scalable and maintainable web apps
                      while focusing on delivering excellent user experiences
                      and optimizing application speed using technologies like
                      Next.js, Node.js, Laravel, etc.
                    </p>
                    <br />
                    <p className="about-para">
                      My experience includes designing and implementing user
                      interfaces, optimizing website performance, and ensuring
                      seamless functionality across different browsers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-50">
                <div className="flx flx-c flx-jc">
                  <Image
                    src="/assets/about_computer.jpg"
                    className="about-image"
                    width={200}
                    height={300}
                    alt="about image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SkillsAbout />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
};

export default AboutPage;
