import { useNavigate } from "react-router-dom";
import image from "../../../images/Home/Mobile/image-hero-phone.png";
export default function MobileHero() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark2");
  }

  return (
    <div className="  flex    smallhide largehide bg-peach w-full h-[843px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full   ">
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              Award-winning custom
            </p>
          </div>
          <p className=" text-white jostmed text-center tracking-wide">
            designs and digital
          </p>
          <p className=" text-white   jostmed text-center tracking-wide">
            branding solutions
          </p>
        </div>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-white leading-7 px-5 ">
          With over 10years in the industry, we are experiend in creating fully
          responsive websites,app design, and engaging brand experiences.FInd
          out more about our services
        </p>

        <button
          onClick={HandleClick}
          class="bg-white hover:bg-hoverbrown  text-black font-normal py-4 px-10 rounded-xl "
        >
          Learn More
        </button>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
