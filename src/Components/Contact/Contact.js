import Locations from "../About/Mobile/Locations";
import Mobilefooter from "../Navbars and Footers/MobileFooter";
import MobileNav from "../Navbars and Footers/MobileNav";
import Form from "./Mobile/Form";

function Contact() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto flex flex-col">
      <main className="w-full h-full">
        <MobileNav />
        <div
          id="overlay"
          className="w-full h-lvh absolute z-10 hidden overflow-hidden bg-black opacity-80"
        ></div>
        <div id="body" className="w-full h-full ">
          <Form />
          <div className=" w-full flex flex-col  items-center  bg-white mb-[200px] ">
            <Locations />
          </div>

          <Mobilefooter />
        </div>
      </main>
    </div>
  );
}

export default Contact;
