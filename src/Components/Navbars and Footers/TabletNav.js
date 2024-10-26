import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function TabletNav() {
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);

  const navigate = useNavigate();
  function HandleClick() {
    let isOpen = hamburger.current?.classList.contains("open");
    let body = document.getElementById("body");

    let overlay = document.getElementById("overlay");

    if (isOpen) {
      hamburger.current?.classList.remove("open");

      mobileMenu.current?.classList.remove("flex");
      mobileMenu.current?.classList.add("hidden");
      overlay.classList.add("hidden");
      body.style.position = "";
    } else {
      hamburger.current?.classList.add("open");
      mobileMenu.current?.classList.add("flex");
      mobileMenu.current?.classList.remove("hidden");
      overlay.classList.remove("hidden");
      body.style.position = "fixed";
    }
  }
  function Home() {
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center bg-white mediumhide largehide h-[70px] px-8">
      <div className="flex w-full bg-white py-4  px-4 items-center justify-between ">
        <div className="flex justify-between w-full bg-white h-[27px]">
          <div onClick={Home} className="w-[202px] darklogo  bg-cover"></div>

          <div className="flex space-x-16">
            <NavLink to="/about">OUR COMPANY</NavLink>
            <NavLink to="/location">LOCATIONS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
