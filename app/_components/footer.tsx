import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="sec-title">
          {/* <h1 className="title">Interested ?<br />Let's Get In Touch !</h1> */}
        </div>
        <div className="row">
          <div className="col">
            <div className="contact">
              <h1>Contact information</h1>
              <p className="txt-muted">Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
              <ul className="flx">
                <li><Link href="/"><AiFillGithub /></Link></li>
                <li><Link href="/"><AiFillLinkedin /></Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="projects">
              <h1>Latest Projects</h1>
              <ul>
                <li><Link href="/">Learning Cafe&nbsp;<BsArrowRight /></Link></li>
                <li><Link href="/">Hirely&nbsp;<BsArrowRight /></Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="avail">
              <h1>Current Availability</h1>
              <p className="txt-muted">I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer