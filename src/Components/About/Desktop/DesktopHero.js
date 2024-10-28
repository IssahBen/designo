function DesktopHero() {
  return (
    <div className="w-full  desktophide  flex justify-center">
      <div className="  flex  flex-col  bg-white w-[1111px]    overflow-hidden  space-y-20">
        <div className="flex     bg-peach   w-full h-[480px]   rounded-xl">
          <div className="flex flex-col font-regular w-[635px]   pattern bg-cover justify-center px-20">
            <div className="flex">
              <p className=" text-white   josth1 w-full tracking-wide">
                About Us
              </p>
            </div>
            <p className="jostreg  mt-5  mb-5  tracking-widest  text-white leading-6  ">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
          <div className="w-[476px] h-[480px] desktophero bg-cover bg-white"></div>
        </div>
        <div className="flex   pattern     w-full h-[640px] bg-pink-100 rounded-xl  ">
          <div className="w-[476px] h-[640px] desktopclass bg-cover bg-white"></div>
          <div className="flex flex-col font-regular w-[635px] justify-center px-16">
            <div className="flex">
              <p className=" text-peach   josth1 w-full  tracking-wide">
                World-class talent
              </p>
            </div>
            <p className="jostreg  mt-5  mb-2 tracking-widest  text-black leading-7 ">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="jostreg  mt-5  mb-5  tracking-widest  text-black leading-7 ">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopHero;
