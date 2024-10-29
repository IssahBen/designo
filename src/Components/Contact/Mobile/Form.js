import { useState } from "react";

function Form({ setSuccessMessage, setErrorMessage }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function Send(obj) {
    try {
      const res = await fetch(
        `
        http://localhost:3000/contact`,
        {
          method: "post",
          body: obj,
        }
      );

      const data = await res.json();

      if (data.message) {
        return "ok";
      } else {
        return "error";
      }
    } catch (error) {
      return "error";
    }
  }
  async function Submit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("customer[name]", name);
    formData.append("customer[email]", email);
    formData.append("customer[number]", phone);
    formData.append("customer[message]", message);

    const status = await Send(formData);

    if (status === "ok") {
      setSuccessMessage("Message Sent");
    } else {
      setErrorMessage("Error");
    }
  }
  return (
    <div className="  flex    smallhide largehide bg-peach w-full h-[764px]   overflow-hidden">
      <div className="flex flex-col  pattern   bg-cover items-center w-full   ">
        <div className="flex flex-col font-regular w-full mt-[60px]">
          <div className="flex">
            <p className=" text-white   jostmed w-full text-center tracking-wide">
              Contact Us
            </p>
          </div>
        </div>
        <p className="jost14  mt-5  mb-5 text-center tracking-widest  text-white leading-7 px-5 ">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        <div className="flex flex-col w-[327px] h-[387px] ">
          <form onSubmit={Submit} class="w-full max-w-lg   ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  class="appearance-none block w-full bg-peach placeholder-white text-white border-b-2 border-gray-200  py-3 px-4 leading-tight  "
                  id="grid-city"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight   "
                  id="grid-city"
                  type="text"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  class="appearance-none block w-full placeholder-white bg-peach text-white border-b-2 border-gray-200  py-3 px-4 leading-tight  "
                  id="grid-city"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  rows="5"
                  class="appearance-none block w-full bg-peach placeholder-white  text-white border-b-2 border-gray-200  py-3 px-4 leading-tight  "
                  id="grid-city"
                  type="text"
                  placeholder="Your Message"
                />
              </div>
            </div>
            <div className="flex justify-center w-full ">
              <button class="bg-white hover:bg-hoverbrown  text-black font-medium py-5 px-10 rounded-xl ">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
