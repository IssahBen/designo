import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Locations from "./Mobile/Locations";
import MobileHero from "./Mobile/MobileHero";
import Poster from "./Mobile/Poster";

function About() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <div id="body" className="w-full h-full ">
          <MobileHero />
          <div className=" w-full flex flex-col  items-center  bg-white ">
            <Locations />
          </div>
          <Poster />
          <Mobilefooter />
        </div>
      </main>
    </div>
  );
}

export default About;
