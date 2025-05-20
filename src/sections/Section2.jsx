import React from "react";
import img1 from "/helios/section2.jpg";
import img2 from "/helios/section21.png";
const Section2 = () => {
  return (
    <div className="relative lg:px-[500px] px-4">
      <div className="py-20 relative">
        <h1 className="text-7xl font-[new] pb-12 font-bold text-center italic text-[#093A7D]">
          Leading through Change
        </h1>
        <p className="text-center font-mono py-4">
          Bringing a change in the mindset of every individual in the country
        </p>
        {/* <img className="w-[200px] object-cover absolute top-5" src={img2} alt="" /> */}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-evenly min-h-[100vh]">
        <img
          className="lg:w-[400px] lg:h-[86vh] h-fit w-64 object-cover  pb-12 top-5"
          src={img2}
          alt=""
        />

        <div className="flex flex-col gap-3">
          <img
            className="rounded-3xl"
            className="w-[400px] object-cover pb-8"
            src={img1}
            alt=""
          />
          <h1 className="text-xl font-semibold py-4 text-[#4D4C4C]">
            Bottles for Change aims to create awareness that
          </h1>
          <h2 className="text-3xl font-bold text-[#4D4C4C]">
            USED PLASTIC IS NOT WASTE.
          </h2>
          <h2 className="text-3xl font-bold text-[#4D4C4C]">IT HAS VALUE.</h2>
          <h2 className="text-3xl font-bold text-[#4D4C4C]">
            IT IS RECYCLABLE.
          </h2>
          <div className="flex flex-col gap-10 py-20 ">
            <div className="gap-10">
              <div className="flex justify-between text-lg">
                <p className="text-3xl text-[#4D4C4C] font-bold">3</p>
                <p className="text-[#4D4C4C] text-3xl font-bold">34</p>
              </div>
              <div className="text-[#4D4C4C] flex justify-between mt-[3px] mb-3 w-full lg:w-[29vw] h-[2px]">
                <h1>Municipal Corporations Enrolled</h1>
                <h2>Cities</h2>
              </div>
            </div>
            <div className="gap-10">
              <div className="flex justify-between text-lg">
                <p className="text-3xl text-[#4D4C4C] font-bold">53+</p>
                <p className="text-[#4D4C4C] text-3xl font-bold">18+</p>
              </div>
              <div className="text-[#4D4C4C] flex justify-between mt-[3px] mb-3 w-full lg:w-[29vw] h-[2px]">
                <h1>Residential Welfare Association</h1>
                <h2>Corporates</h2>
              </div>
            </div>
            <div className="gap-10">
              <div className="flex justify-between text-lg">
                <p className="text-3xl text-[#4D4C4C] font-bold">120</p>
                <p className="text-[#4D4C4C] text-3xl font-bold">54</p>
              </div>
              <div className="text-[#4D4C4C] flex justify-between mt-[3px] mb-3 w-full lg:w-[29vw] h-[2px]">
                <h1>Educational Institutes</h1>
                <h2>Hotels and Restaurants</h2>
              </div>
            </div>
            <div className="gap-10">
              <div className="flex justify-between text-lg">
                <p className="text-3xl text-[#4D4C4C] font-bold">2.63 M</p>
                <p className="text-[#4D4C4C] text-3xl font-bold">1471</p>
              </div>
              <div className="text-[#4D4C4C] flex justify-between mt-[3px] mb-3 w-full lg:w-[29vw] h-[2px]">
                <h1>Tones of water Distributed</h1>
                <h2>Kilograms Of Used Plastic Collected And Recycled</h2>
              </div>
            </div>
            <div className="flex justify-between pt-12">
              <h4 className="text-lg text-white  hover:bg-sky-400  underline rounded-4xl lg:px-16 lg:py-4 py-3 px-8 w-fit cursor-pointer text-center  bg-sky-500  duration-500">
                Join the iniciative
              </h4>
              <h4 className="text-lg text-white hover:bg-sky-400  underline rounded-4xl lg:px-16 lg:py-4 py-3 px-8 w-fit text-center  bg-sky-500  duration-500 cursor-pointer">
                learn more
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
