import { useRef } from "react";

import { useNavigate } from "react-router-dom";

export default function MobileNav() {
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
    <div className="w-full flex justify-center bg-white smallhide largehide h-[70px]">
      <div className="flex w-full bg-white py-4  px-4 items-center justify-between ">
        <div className="flex justify-between w-full">
          <div onClick={Home} className="w-[202px] darklogo  bg-cover"></div>
          <div className=" poppins-regular ">
            <button
              id="menu-btn"
              type="button"
              ref={hamburger}
              className="  z-40 block hamburger md:hidden focus:outline-none"
              onClick={HandleClick}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
            <div
              id="menu"
              ref={mobileMenu}
              className="absolute  rounded-bl-2xl   z-20 tracking-tighter top-14 right-0 hidden   manropereg  w-full    pb-10 px-10  uppercase bg-white text-tintwhite"
            >
              <p>fdgdg</p>
              <p>fdgdg</p>
              <p>fdgdg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
