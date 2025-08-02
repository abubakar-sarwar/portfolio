import { useEffect } from "react";
import Link from "next/link";
import { addTilt, removeTilt } from "@/utils/utils";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WhatsNew = () => {
  useEffect(() => {
    addTilt();

    return () => {
      removeTilt();
    };
  }, []);

  return (
    <div className="container">
      <div className="about">
        <div className="sec-title">
          <h1 className="title animate animate-top">WHAT&apos;S NEW?</h1>
        </div>
        <div className="row">
          <div className="col-50 mb-2">
            <div className="card-tilt lr-crc">
              <div className="content">
                <div className="txt dsc-insta">
                  <p>
                    <strong>Social</strong>&nbsp;latest on instagram.
                  </p>
                  <Link
                    href="https://www.instagram.com/web_dev_pk/"
                    target="_blank"
                    className="mt-1 lr-crc"
                  >
                    Discover My Insta&nbsp;
                    <BsArrowRight />
                  </Link>
                </div>
                <Image
                  src="/assets/Insta-card.avif"
                  width={100}
                  height={100}
                  alt="instagram"
                  className="card-img"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div className="card-tilt-skew"></div>
            </div>
          </div>
          <div className="col-50 mb-2">
            <div className="card-tilt lr-crc">
              <div className="content">
                <div className="txt">
                  <p>
                    <strong>Get In Touch</strong>&nbsp;on professional
                    platforms. Feel free to browse my other profiles for a
                    broader view of my interests and contributions across the
                    web.
                  </p>
                  <ul className="ic-link flx flx-c mt-1">
                    <li>
                      <Link
                        href="https://github.com/abubakar-sarwar"
                        target="_blank"
                        className="ic-git lr-crc"
                        aria-label="Github Profile"
                        title="Github Profile"
                      >
                        <AiFillGithub />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/muhammad-abubakar-b238a5298"
                        target="_blank"
                        className="ic-live lr-crc"
                        aria-label="Linkedin Profile"
                        title="Linkedin Profile"
                      >
                        <AiFillLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/assets/git_linkedin.avif"
                  alt="instagram"
                  width={100}
                  height={100}
                  className="card-img"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <div className="card-tilt-skew"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
