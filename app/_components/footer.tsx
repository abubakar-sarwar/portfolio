import { projects } from "@/constants";
import { ProjectType } from "@/types";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer-mt">
          <div className="col">
            <div className="contact">
              <h2>Contact information</h2>
              <p className="txt-muted">
                Feel free to reach out to me any time. I prefer to talk over
                email, especially since we may be a few time zones away.
              </p>
              <nav aria-label="Social media profiles">
              <ul className="flx">
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/abubakar-sarwar"
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                  >
                    <AiFillGithub /><span className="sr-only">GitHub Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                    href="https://www.linkedin.com/in/muhammad-abubakar-b238a5298"
                  >
                    <AiFillLinkedin /><span className="sr-only">LinkedIn Profile</span>
                  </Link>
                </li>
              </ul>
              </nav>
            </div>
          </div>
          <div className="col">
            <div className="projects">
              <h2>Latest Projects</h2>
              <nav aria-label="Latest projects">
              <ul>
                {projects
                  ?.filter((item) => !!item.liveLink)
                  ?.slice(0, 5)
                  ?.map((item: ProjectType, index) => (
                    <li key={index}>
                      <Link
                        href={item?.liveLink || item?.gitLink}
                        target="_blank"
                      >
                        {item?.title}&nbsp;
                        <BsArrowRight />
                      </Link>
                    </li>
                  ))}
              </ul>
              </nav>
            </div>
          </div>
          <div className="col">
            <div className="avail">
              <h2>Current Availability</h2>
              <p className="txt-muted">
                I’ll be happy to discuss new opportunities. Let’s get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
