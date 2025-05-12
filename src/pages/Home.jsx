import React from "react";

import SwiperCarousel from "../components/Swiper";
import Navbar from "../components/Navbar";
import logo1 from "/logo/logo1.png";
import logo2 from "/logo/logo2.png";
import logo3 from "/logo/logo3.png";
import logo4 from "/logo/logo3.png";
import rise from "/rise.png";
import bottle from "/bottle.png";
import bottle2 from "/bottle2.png";
import Footer from "../components/Footer";
import Section3 from "../sections/Section3";
import video1 from "/helios/helios.mp4";
import helios5 from "/helios/bottles.jpeg";
import Section2 from "../sections/Section2";

const Home = () => {
  const logoArr = [
    { logo: logo1, text: "Vedica - Himalayan Spring Water" },
    { logo: logo2, text: "Carbonated Soft Drinks" },
    { logo: logo3, text: "Carbonated Soft Drinks" },
  ];
  return (
    <div className=" ">
      <Navbar />
      <SwiperCarousel />

      <section className="lg:px-96   w-full flex flex-col items-center gap-12 p-20  bg-white  mt-12">
        <div className="flex items-center flex-col gap-4  justify-center w-full">
          <h1 className="text-sky-700 font-bold text-5xl italic font-[new]">
            Rise Above the blues
          </h1>
          <p className="text-lg italic text-gray-400">
            A household name for decades gone, decades to come.
          </p>
        </div>

        <div className="lg:w-[1200px] w-fit flex-col lg:flex-row flex justify-center items-center gap-5">
          <div className="lg:w-64  h-full flex lg:flex-col flex-row justify-around   lg:gap-12">
            {logoArr.map((item, idx) => (
              <div className="lg:w-48 w-32 flex flex-col gap-2 items-center ">
                <img
                  src={item.logo}
                  alt=""
                  className="object-cover lg:w-16 w-12 bg-white rounded-lg"
                />
                <h2 className="text-center text-sm text-sky-700 w-32    ">
                  {item.text}
                </h2>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className=" lg:h-[800px] pb-12 rounded-4xl border-sky-300 bg-sky-200 shadow-md backdrop-blur-xl px-12 lg:pl-32">
              <p className="text-3xl text-sky-700 font-[new] italic  py-8">
                Helios Packaged Drinking Water Helios Bottles
              </p>
              <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
                <video
                  src={video1}
                  className=" object-cover w-[300px] rounded-lg"
                  autoPlay
                  loop
                ></video>
                <img
                  src={helios5}
                  alt=""
                  className="w-[300px] lg:w-[400px] rounded-lg object-cover"
                />
              </div>
              <h2 className="text-sky-800 tracking-wider text-xl mt-5 ">
                Values Quality with Care
              </h2>
              <p className="text-lg text-gray-500 pt-12 px-12 font-[new] lg:pr-24">
                Helios Packaged Drinking Water stands apart with its promise of
                goodness that goes through rigorous 10 STEP QUALITY PROCESS and
                90 TE drop is safe, pure and hygienic to the core and meets the
                quality set by the Bureau of Indian Standards (BIS).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#74ebd5] overflow-hidden to-[#acb6e5]  relative lg:px-[400px] h-[150vh] px-8 flex flex-col items-center">
        <img
          src={bottle}
          className="lg:w-[600px] w-[300px] -rotate-45 object-cover absolute lg:top-32 top-64 left-24"
          alt=""
        />
        <img
          src={bottle}
          className="lg:w-[600px] w-[300px] rotate-3 object-cover absolute lg:top-32 top-64 rotate-45 duration-2000 right-24"
          alt=""
        />{" "}
        <img
          src={bottle2}
          className="w-[600px] rotate-45 object-cover absolute lg:top-[800px]  top-[80%]  right-[100px]"
          alt=""
        />
        <img
          src={bottle2}
          className="w-[600px] -rotate-45 object-cover absolute lg:top-[800px]  top-[50%] left-[100px]"
          alt=""
        />
        <img
          src={rise}
          alt=""
          className="object-cover lg:relative absolute top-10 w-[1400px]"
        />
      </section>
      <div className="h-[10vh] bg-white w-full"></div>
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;
