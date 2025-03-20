// "use client";

// import React from "react";
// import Image from "next/image";

// import Foto1 from "../../../public/assets/foto1.jpeg";
// import Foto2 from "../../../public/assets/foto2.jpeg";

// const News = () => {
//   return (
//     <div className=" xl:items-start justify-center font-monserrat font-extrabold lg:text-[58px] text-[#FFFFFF]  h-[115px] lg:h-[290px]  2xl:h-[290px] ">
//       <div id="cursos" className="flex flex-col items-center justify-center min-h-screen bg-[#002E1E] text-white p-10  ">
//             <h1 className=" font-bold mb-10 mt-8 2xl:mt-16 text-[17px] lg:text-[35px] 2xl:text-[40px]">CURSOS</h1>
//               <div className="flex flex-col gap-8 px-7 ">
//                 <div className="lg:pb-8 lg:pt-10 2xl:pb-14" >
//                   <Image
//                     src={Foto1}
//                     alt="Feature 1 image"
//                     className="w-full  sm:block rounded-xl"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-4 pb-10 2xl:pb-14">
//                   <Image
//                     src={Foto2}
//                     alt="Feature 1 image"
//                     className="w-full  sm:block rounded-xl"
//                   />
//                 </div>
//               </div>
//       </div>
//     </div>
//   );
// };

// export default News;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Foto1 from "../../../public/assets/foto1.jpeg";
import Foto2 from "../../../public/assets/foto2.jpeg";

const News = () => {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => setIsZoomed1(!isZoomed1);
  const toggleZoom2 = () => setIsZoomed2(!isZoomed2);

  return (
    <div className="xl:items-start justify-center font-monserrat font-extrabold lg:text-[58px] text-[#FFFFFF] h-[115px] lg:h-[290px] 2xl:h-[290px]">
      <div
        id="cursos"
        className="flex flex-col items-center justify-center min-h-screen bg-[#002E1E] text-white p-10"
      >
        <h1 className="font-bold mb-10 mt-8 2xl:mt-16 text-[17px] lg:text-[35px] 2xl:text-[40px]">
          CURSOS
        </h1>
        <div className="flex flex-col gap-8 px-7">
          <div className="lg:pb-8 lg:pt-10 2xl:pb-14">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: isZoomed1 ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
              onClick={toggleZoom1}
            >
              <Image
                src={Foto1}
                alt="Feature 1 image"
                className="w-full sm:block rounded-xl cursor-pointer"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 pb-10 2xl:pb-14">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: isZoomed2 ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
              onClick={toggleZoom2}
            >
              <Image
                src={Foto2}
                alt="Feature 2 image"
                className="w-full sm:block rounded-xl cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;