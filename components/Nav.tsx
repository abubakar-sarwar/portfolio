"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {

  const [menuMobile, setMenuMobile] = useState<boolean>(false);

  return (
    <header className="flx flx-sb flx-c">
      <div className="logo">
        <Link href="/">
          <Image src="/assets/logo.png" alt="brand" width={50} height={50} ></Image>
          <Image src="/assets/logo.svg" alt="brand" width={160} height={50} className="ml-1 name-logo" ></Image>
        </Link>
      </div>
      <div className="nav">
        <button onClick={() => setMenuMobile(true)} className="menu-toggle link">
          <FiMenu />
        </button>
        <ul className={`menu flx flx-c ${menuMobile ? "open-mobile" : ""}`}>
          <li className="menu-close"><span onClick={() => setMenuMobile(false)}><FiX /></span></li>
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