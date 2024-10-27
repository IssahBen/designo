import Locations from "../About/Mobile/Locations";
import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Tabletfooter from "../Navbars and Footers/TabletFooter";
import TabletNav from "../Navbars and Footers/TabletNav";
import Form from "./Mobile/Form";
import TabletForm from "./Tablet/TabletForm";

function Contact() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <TabletNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <div id="body" className="w-full h-full ">
          <Form />
          <TabletForm />
          <div className=" w-full flex flex-col  items-center  bg-white mb-[250px] ">
            <Locations />
          </div>

          <Mobilefooter />

          <Tabletfooter />
        </div>
      </main>
    </div>
  );
}

export default Contact;
