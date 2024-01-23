import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <header className="flx flx-sb flx-c">
      <div className="logo">
        <Link href="/">
          <Image src="/assets/logo.png" alt="brand" width={50} height={50} ></Image>
          <Image src="/assets/logo.svg" alt="brand" width={160} height={50} className="ml-1" ></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className="menu flx flx-c">
          <li><Link href="/">expertise</Link></li>
          <li><Link href="/">work</Link></li>
          <li><Link href="/">experiance</Link></li>
          <li><Link href="/">contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Nav