import { useNavigate } from "react-router-dom";
import image from "../../../images/Home/Mobile/image-hero-phone.png";
export default function MobileHero() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark2");
  }

  return (
    <div className="  flex    smallhide largehide bg-peach w-full h-[320px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full   ">
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              Web Design
            </p>
          </div>
        </div>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-white leading-7 px-5 ">
          We build wwebsites that serve as powerful marketing tools and bring
          memorable experiences
        </p>
      </div>
    </div>
  );
}
