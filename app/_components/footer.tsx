import { projects } from "@/constants";
import { ProjectType } from "@/types";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact">
              <h1>Contact information</h1>
              <p className="txt-muted">
                Feel free to reach out to me any time. I prefer to talk over
                email, especially since we may be a few time zones away.
              </p>
              <ul className="flx">
                <li>
                  <Link
                    target="_blank"
                    href="https://github.com/abubakar-sarwar"
                  >
                    <AiFillGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad-abubakar-b238a5298"
                  >
                    <AiFillLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="projects">
              <h1>Latest Projects</h1>
              <ul>
                {projects.map((item: ProjectType, index) => (
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
            </div>
          </div>
          <div className="col">
            <div className="avail">
              <h1>Current Availability</h1>
              <p className="txt-muted">
                I usually work on several projects but I’ll be happy to discuss
                new opportunities. Let’s get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
