import React from "react";
import helios1 from "/helios/helios.jpg";
import helios2 from "/helios/helios2.jpg";
import helios3 from "/helios/helios3.jpg";
const Section3 = () => {
  return (
    <div>
      {" "}
      <div className=" bg-sky-200 rounded-t-4xl py-20 overflow-hidden">
        <div className="text-center ">
          <h1 className="text-sky-800 italic text-3xl lg:text-5xl font-bold py-2">
            Spreading the Promise of Goodness
          </h1>
          <p className="pt-3 ">
            Bringing a change in the mindset of every individual in the country
          </p>
        </div>
        <div className="flex justify-center flex-col lg:flex-row py-20  gap-5">
          <img
            className="w-[500px] object-cover  rounded-xl "
            src={helios1}
            alt=""
          />
          <img
            className=" w-[500px] object-cover  rounded-xl "
            src={helios2}
            alt=""
          />
          <img
            className="w-[500px]  object-cover rounded-xl "
            src={helios3}
            alt=""
          />
        </div>
        <div>
          <div className="  text-center  text-sm px-8 flex flex-col gap-8 lg:text-xl bg-sky pb-10  ">
            {" "}
            <p>
              {" "}
              A symbol of goodness, trust and purity, helios has been a
              household name for decades. A leader in its category, it is the
              most{" "}
            </p>
            <p className="italic  text-sky-700">
              {" "}
              trusted brand of packaged drinking water in India. Having a strong
              presence, with 122 operational plants (13 owned) and a strong{" "}
            </p>{" "}
            <p>
              {" "}
              distribution network of 4500 Distributors & 5000 Distribution
              trucks across India & neighbouring countries, helios stands true
              to{" "}
            </p>{" "}
            <p className="italic  text-sky-700">
              its promise of providing safe, pure & healthy water to consumers
              for the last 50 years.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-4 ">
          <a
            className="text-lg text-white  hover:border hover:bg-sky-400  underline rounded-4xl lg:px-16 lg:py-4 py-3 px-8 w-fit text-center  bg-sky-500  duration-500 "
            href="http://helioswater.in/"
          >
            learn more
          </a>
          <a
            className="text-lg text-white  hover:border hover:bg-sky-400  underline rounded-4xl lg:px-16 lg:py-4 py-3 px-8 w-fit text-center  bg-sky-500  duration-500 "
            href="http://helioswater.in/"
          >
            apply for distribution{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
