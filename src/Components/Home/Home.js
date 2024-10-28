import DesktopNav from "../Navbars and Footers/DesktopNav";
import Desktopfooter from "../Navbars and Footers/Desktopfooter";
import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Tabletfooter from "../Navbars and Footers/TabletFooter";
import TabletNav from "../Navbars and Footers/TabletNav";
import DesktopCategory from "./Desktop/DesktopCategory";
import DesktopHero from "./Desktop/DesktopHero";
import DesktopIllustration from "./Desktop/DesktopIllustration";
import Illustration from "./Mobile/Illustration";
import MobileCategory from "./Mobile/MobileCategory";
import MobileHero from "./Mobile/MobileHero";
import TabletCategory from "./Tablet/TabletCategory";
import TabletHero from "./Tablet/TabletHero";
import TabletIllustration from "./Tablet/TabletIllustration";

function Home() {
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
            <MobileCategory />
            <TabletCategory />
            <DesktopCategory />
            <Illustration />
            <TabletIllustration />
            <DesktopIllustration />
          </div>
          <Mobilefooter />
          <Tabletfooter />
          <Desktopfooter />
        </div>
      </main>
    </div>
  );
}

export default Home;
