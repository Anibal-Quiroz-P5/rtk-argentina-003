"use client";

import React from "react";
import Image from "next/image";

import Foto1 from "../../../public/assets/foto1.jpeg";
import Foto2 from "../../../public/assets/foto2.jpeg";

const News = () => {
  return (
    <div className="lg:pt-[30px] pt-[50px]   bg-gradient-to-b from-custom-green-start to-custom-green-end items-start xl:items-start justify-center font-monserrat font-extrabold lg:text-[58px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px] ">
      <div id="cursos" className="flex flex-col items-center justify-center min-h-screen bg-[#002E1E] text-white p-10 ">
            <h1 className=" font-bold mb-8 mt-4 text-[18px]">CURSOS</h1>
              <div className="flex flex-col gap-8 px-7 ">
                <div className="lg:pb-8 lg:pt-10" >
                  <Image
                    src={Foto1}
                    alt="Feature 1 image"
                    className="w-full  sm:block "
                  />
                </div>

                <div className="flex flex-col gap-4 pb-10">
                  <Image
                    src={Foto2}
                    alt="Feature 1 image"
                    className="w-full  sm:block "
                  />
                </div>
              </div>
      </div>
    </div>
  );
};

export default News;
