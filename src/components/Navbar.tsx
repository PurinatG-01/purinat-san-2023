"use client"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
  const [isOpenNav, setIsOpenNav] = useState(false)

  return (
    <nav className="flex w-full justify-between items-center">
      <span className="logo _link tail text-white tracking-tighter font-bold italic text-xl">
        PURINAT_SAN
      </span>
      <button
        onClick={() => {
          setIsOpenNav(!isOpenNav)
        }}
        className="nav-toggle-button flex md:hidden"
      >
        {isOpenNav ? "X" : "0"}
      </button>
      <ol className="nav-list max-w-[500px] w-full justify-between items-center hidden md:flex">
        {Array(4)
          .fill({})
          .map((item, index) => (
            <li
              key={index}
              className="_link nav-list__list-item text-white font-bold italic"
            >
              BLOG
            </li>
          ))}
      </ol>
    </nav>
  )
}
