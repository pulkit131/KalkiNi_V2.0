import React from "react";
import Background from "../../components/Background";
import { FacebookIcon, Globe, MailIcon, PhoneCallIcon } from "lucide-react";
import facebook from "../icons/homepage/facebook.png";
import xicon from "../icons/homepage/x-icon.png";
import linkedin from "../icons/homepage/linkedin.png";

const Contact = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Background />
      <div className="relative z-10 flex flex-col items-center p-8 min-h-screen">
        <h1 className="font-bold text-7xl mt-20  text-white">Contact Us</h1>
        <p className="text-gray-500 mt-4 font-medium">
          Reach out, and let's create a universe of possibilities together!
        </p>
        <div
          id="contact-container"
          className="flex flex-col justify-center md:flex-row h-auto max-w-5xl gap-20 bg-black mt-8 rounded-xl py-20 px-16"
        >
          <div id="contact-form" className="mx-auto">
            <h1 className="text-4xl font-bold text-white">Send us a message</h1>
            <form className="flex flex-col mt-8 gap-4">
              <div className="flex flex-row gap-2">
                <div className="">
                  <input
                    type="text"
                    value="First Name"
                    className="p-4 rounded-lg bg-[#171618] text-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value="Last Name"
                    className="p-4 rounded-lg bg-[#171618] text-gray-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="mail"
                  value="Email"
                  className="p-4 rounded-lg bg-[#171618] text-gray-500 w-full"
                />
              </div>
              <div>
                <input
                  type="tel"
                  value="Phone no."
                  className="p-4 rounded-lg bg-[#171618] text-gray-500 w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  value="Message"
                  className="p-4 text-start rounded-lg bg-[#171618] text-gray-500 w-full pb-20"
                />
              </div>
            </form>
          </div>
          <div id="contact-info">
            <h1 className="font-medium text-4xl text-white">
              Contact Information
            </h1>
            <p className="text-white mt-4 text-lg">
              Fill up the form and our Team will get back to you within 24 hours
            </p>
            <div
              id="information"
              className="text-white mt-14 flex flex-col gap-3"
            >
              <div id="phone" className="flex items-center gap-2">
                <PhoneCallIcon className="" />
                Phone:+1235235598
              </div>
              <div id="email" className="flex items-center gap-2">
                <MailIcon />
                Email: info@yoursite.com
              </div>
              <div id="website" className="flex items-center gap-2">
                <Globe /> Website: yoursite.com
              </div>
            </div>
            <div
              id="media-logos"
              className="flex flex-row items-center gap-8 mt-16"
            >
              <img src={facebook} alt="" className="size-8 w-8" />
              <img src={xicon} alt="" className="size-12 w-16" />
              <img src={linkedin} alt="" className="size-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
