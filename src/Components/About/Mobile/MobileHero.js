function MobileHero() {
  return (
    <div className="  flex  flex-col  smallhide largehide bg-peach w-full h-[1580px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full h-[715px]  ">
        <div className="w-[375px] h-[320px] hero bg-cover bg-white"></div>
        <div className="flex flex-col font-regular w-full   mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              About Us
            </p>
          </div>
        </div>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-white leading-6 px-5  pattern">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
      <div className="flex flex-col  pattern   bg-cover items-center w-full h-[865px] bg-pink-100  ">
        <div className="w-[375px] h-[320px] class bg-cover bg-white"></div>
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-peach   jostmed w-full text-center tracking-wide">
              World-class talent
            </p>
          </div>
        </div>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-black leading-7 px-5 ">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="jostreg  mt-5  mb-5 text-center tracking-widest  text-black leading-7 px-5 ">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </div>
  );
}

export default MobileHero;
