import passion from "../../../images/Home/Mobile/passionate.svg";
import friendly from "../../../images/Home/Mobile/friendly.svg";
import resource from "../../../images/Home/Mobile/resourceful.svg";
function Illustration() {
  return (
    <div className="flex flex-col space-y-10 w-full mt-20 mb-72 smallhide largehide">
      <div className="flex flex-col items-center px-10 relative">
        <div
          className="pattern270 w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={passion} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">PASSIONATE</p>
        <p className="jostreg text-center font-light">
          Each Project starts with an in-depth brand research to ensure we only
          create products that serve a purpose.We merge art,design and
          technology into exciting new solutions
        </p>
      </div>
      <div className="flex flex-col items-center px-10 relative">
        <div
          className="pattern180 w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={resource} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">RESOURCEFUL</p>
        <p className="jostreg text-center font-light">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div className="flex flex-col items-center px-10 relative">
        <div
          className="pattern w-[202px] h-[202px] flex justify-center bg-cover 
        "
        ></div>
        <img src={friendly} alt="" className="absolute" />
        <p className="jost20 tracking-widest mb-5 mt-10">FRIENDLY</p>
        <p className="jostreg text-center font-light">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </div>
    </div>
  );
}

export default Illustration;
