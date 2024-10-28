import { useNavigate } from "react-router-dom";
import image from "../../../images/Home/Mobile/image-hero-phone.png";
export default function DesktopHero() {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/headphones/mark2");
  }

  return (
    <div className="w-full flex justify-center desktophide ">
      <div className=" w-[1111px] h-[600px]   ">
        <div className="  flex     bg-peach w-full h-[600px]  overflow-hidden  rounded-xl">
          <div className="flex  bg-peach  justify-between pattern   bg-cover  w-full h-full   ">
            <div className="flex flex-col w-[600px] h-[400px]  mt-[150px] pl-[130px]">
              <div className="flex flex-col font-regular w-full ">
                <div className="flex">
                  <p className=" text-white   jostmed w-full  tracking-wide">
                    Award-winning custom
                  </p>
                </div>
                <p className=" text-white jostmed  tracking-wide">
                  designs and digital
                </p>
                <p className=" text-white   jostmed  tracking-wide">
                  branding solutions
                </p>
              </div>
              <p className="jostreg  mt-5  mb-5   text-white leading-7  ">
                With over 10years in the industry, we are experiend in creating
                fully responsive websites,app design, and engaging brand
                experiences.FInd out more about our services
              </p>

              <button
                onClick={HandleClick}
                class="bg-white hover:bg-hoverbrown  text-black font-normal py-4  rounded-xl w-[103px] "
              >
                Learn More
              </button>
            </div>
            <div className=" h-full     ">
              <img src={image} alt="" className=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
