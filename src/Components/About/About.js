import DesktopNav from "../Navbars and Footers/DesktopNav";
import Desktopfooter from "../Navbars and Footers/Desktopfooter";
import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Tabletfooter from "../Navbars and Footers/TabletFooter";
import TabletNav from "../Navbars and Footers/TabletNav";
import DesktopHero from "./Desktop/DesktopHero";
import DesktopLocations from "./Desktop/DesktopLocations";
import DesktopPoster from "./Desktop/DesktopPoster";
import Locations from "./Mobile/Locations";
import MobileHero from "./Mobile/MobileHero";
import Poster from "./Mobile/Poster";
import TabletHero from "./Tablet/TabletHero";
import TabletPoster from "./Tablet/TabletPoster";

function About() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <TabletNav />
        <DesktopNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <div id="body" className="w-full h-full ">
          <MobileHero />
          <TabletHero />
          <DesktopHero />
          <div className=" w-full flex flex-col  items-center  bg-white ">
            <Locations />
            <DesktopLocations />
          </div>
          <Poster />
          <DesktopPoster />

          <TabletPoster />

          <Mobilefooter />
          <Tabletfooter />
          <Desktopfooter />
        </div>
      </main>
    </div>
  );
}

export default About;
