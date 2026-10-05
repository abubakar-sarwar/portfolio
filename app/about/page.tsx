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
                    <p className="about-para">Hello, I&apos;m Muhammad Abu Bakar.</p>
                    <p className="about-para">Software Engineer with 3+ years of experience in web development.</p>
                    <p className="about-para">I build scalable and maintainable web apps with a focus on user experience and performance.</p>
                    <p className="about-para">I design and implement user interfaces optimized for speed and cross-browser compatibility.</p>
                  </div>
                </div>
              </div>
              <div className="col-50">
                <div className="flx flx-c flx-jc">
                  <Image
                    src="/assets/about_computer.avif"
                    className="about-image"
                    width={200}
                    height={300}
                    alt="Muhammad Abu Bakar at computer"
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
