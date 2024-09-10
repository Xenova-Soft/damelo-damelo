import React from "react";
import "@/app/listing/style.css";
import { FaAngleRight } from "react-icons/fa";

export default function placeAdd() {
  return (
    <div className="w-full bg-[#f7f6cd] ">
      <div className="container   mx-auto py-10 md:px-0 px-3  ">
        <div className="bg-white p-5  rounded-lg boxShadow ">
          {/* left section  */}
          <div className="flex lg:flex-row flex-col  ">
            {/* left section  */}
            <div className="flex  flex-col flex-1 gap-7">
              <h1 className="text-[30px] font-semibold text-black">
                How to place an ad on idealista
              </h1>
              <div className=" w-[100%] xl:w-[70%] space-y-6">
                <li className="flex items-center gap-3 ">
                  <FaAngleRight />
                  <p className="text-[18px]">
                    Your <span className="font-bold">first 2 ads are free</span>
                    . If they are rooms, you can post up to 5 free ads.
                  </p>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <FaAngleRight />
                  <p className="text-[18px]">
                    You have access to a private area where you can manage your
                    ad and the contacts received.
                  </p>
                </li>
                <li className="flex items-center gap-3 justify-center">
                  <FaAngleRight />
                  <p className="text-[18px]">
                    You can resolve doubts, exchange information and arrange
                    visits efficiently with our chat
                  </p>
                </li>
              </div>
              <p className="text-[18px]">
                To sell or rent faster,{" "}
                <span className="text-blue-500 cursor-pointer underline ">
                  contact a real estate agency
                </span>
              </p>
              <button className="bg-[#B62682] px-[80px] py-3 rounded-lg w-fit font-bold text-white lg:block hidden">
                Post your free ad
              </button>
            </div>
            {/* right section  */}
            <div className=" w-full lg:w-[40%]">
              <img
                src="https://st3.idealista.com/static/common/release/homeownerplatform/resources/img/advertise_property_landing.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
            <button className="bg-[#B62682] px-[80px] py-3 rounded-lg lg:hidden block font-bold text-white">
              Post your free ad
            </button>
          </div>
          <p className="mt-7">
            Are you a real estate professional? Find out about our{" "}
            <span className="text-blue-500 underline cursor-pointer">
              advantages for professionals
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
