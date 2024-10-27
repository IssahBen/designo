function TabletForm() {
  return (
    <div className="w-full px-10 py-10 ">
      {" "}
      <div className="  flex    mediumhide largehide bg-peach w-full h-[711px]   rounded-2xl overflow-hidden px-16">
        <div className="flex flex-col  pattern   bg-cover items-start w-full   ">
          <div className="flex flex-col font-regular w-full mt-[60px]">
            <div className="flex">
              <p className=" text-white   josth1 w-full  tracking-wide">
                Contact Us
              </p>
            </div>
          </div>
          <p className="jost14  mt-5  mb-5  tracking-widest  text-white leading-7  ">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
          <div className="flex flex-col w-full h-[387px] ">
            <form class="w-full  ">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full  px-3 mb-6 ">
                  <input
                    class="appearance-none block w-full bg-peach placeholder-white text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                    id="grid-city"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div class="w-full  px-3">
                  <input
                    class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                    id="grid-city"
                    type="text"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full placeholder-white bg-peach text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                    id="grid-city"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full  px-3 mb-6 ">
                  <textarea
                    rows="5"
                    class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                    id="grid-city"
                    type="text"
                    placeholder="Your Message"
                  />
                </div>
              </div>
              <div className="flex justify-end w-full ">
                <button class="bg-white hover:bg-hoverbrown  text-black font-medium py-5 px-10 rounded-xl ">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletForm;
