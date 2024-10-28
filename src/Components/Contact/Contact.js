import DesktopLocations from "../About/Desktop/DesktopLocations";
import Locations from "../About/Mobile/Locations";
import DesktopNav from "../Navbars and Footers/DesktopNav";
import Desktopfooter from "../Navbars and Footers/Desktopfooter";
import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Tabletfooter from "../Navbars and Footers/TabletFooter";
import TabletNav from "../Navbars and Footers/TabletNav";
import DesktopForm from "./Desktop/DesktopForm";
import Form from "./Mobile/Form";
import TabletForm from "./Tablet/TabletForm";

function Contact() {
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
          <Form />
          <TabletForm />
          <DesktopForm />
          <div className=" w-full flex flex-col  items-center  bg-white mb-[250px] ">
            <Locations />
            <DesktopLocations />
          </div>

          <Mobilefooter />

          <Tabletfooter />
          <Desktopfooter />
        </div>
      </main>
    </div>
  );
}

export default Contact;
