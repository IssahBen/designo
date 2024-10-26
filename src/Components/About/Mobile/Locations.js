import canada from "../../../images/Locations/canada.svg";
import australia from "../../../images/Locations/australia.svg";
import uk from "../../../images/Locations/uk.svg";
import { useNavigate } from "react-router-dom";
function Locations() {
  const navigate = useNavigate();
  function Redirect() {
    navigate("/location");
  }
  return (
    <div className="flex flex-col space-y-14 w-full h-[1188px] mt-20 mb-20  largehide">
      <div className="flex flex-col items-center px-10 relative h-[364px]">
        <div
          className="pattern270 w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={canada} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">CANADA</p>
        <button
          onClick={Redirect}
          class="bg-peach hover:bg-hoverbrown  text-white font-medium tracking-widest py-5 px-5 rounded-xl "
        >
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center px-10 relative h-[364px]">
        <div
          className="pattern180 w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={australia} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">AUSTRALIA</p>
        <button
          onClick={Redirect}
          class="bg-peach hover:bg-hoverbrown  text-white font-medium tracking-widest py-5 px-5 rounded-xl "
        >
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col items-center px-10 relative h-[364px]">
        <div
          className="pattern w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={uk} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">UNITED KINGDOM</p>
        <button
          onClick={Redirect}
          class="bg-peach hover:bg-hoverbrown  text-white font-medium tracking-widest py-5 px-5 rounded-xl "
        >
          SEE LOCATION
        </button>
      </div>
    </div>
  );
}

export default Locations;
