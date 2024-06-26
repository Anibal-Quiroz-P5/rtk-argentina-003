// import React from 'react'
// import Image from 'next/image'
// /* import Logo from '../../../public/assets/Logo.svg' */
// import Logo from '../../../public/assets/Logo.png'
// import Facebook from '../../../public/assets/Facebook.svg'
// import X2 from '../../../public/assets/X2.svg'
// import Instagram from '../../../public/assets/Instagram.svg'
// /* import Feed from '../../public/assets/Feed.svg' */
// import Link from 'next/link'

// export const Footer = () => {
//   return (
//     <div className='pt-[80px] pb-[40px]'>
//       <div className='flex items-center justify-center gap-x-[12px] '>
//         <Image src={Logo} alt='Logo' width={40}/>
//         <p className='font-bold text-[#36485C] text-[17px]'>RTK-Argentina</p>
//       </div>

//       <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
//         <Link href="#servicio" >
//           <li>Servicio</li>
//         </Link>
//         <Link href="#aplicaciones">
//           <li>Aplicaciones</li>
//         </Link>
//         <Link href="#quienes-somos">
//           <li>Quienes somos</li>
//         </Link>
//         <Link  href="#contacto">

//         <li>Contacto</li>
//         </Link>
//       </ul>

//       <p className='pt-[56px] text-center text-[14px] font-medium text[#5F7896] sm:pt-5'>© Copyright 2024. Your Site. All rights reserved.</p>

//       <div className='flex items-center justify-center gap-x-[56px] pt-[40px] '>
//         <Image src={Facebook} alt='Facebook' />
//         <Image src={X2} alt='Twitter' width={32} height={42}/>
//         <Image src={Instagram} alt='Instagram' width={20} height={21}/>
//         {/* <Image src={Feed} alt='Feed' /> */}
//       </div>
//     </div>
//   )
// }

import React from "react";
import Image from "next/image";
/* import Logo from '../../../public/assets/Logo.svg' */
import Logo from "../../../public/assets/Logo.png";
import Facebook from "../../../public/assets/Facebook.svg";
import X2 from "../../../public/assets/X2.svg";
import Instagram from "../../../public/assets/Instagram.svg";
import Whatsapp from "../../../public/assets/Whatsapp.svg";
/* import Feed from '../../public/assets/Feed.svg' */
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="pt-[0px] pb-[40px]">
      {/* <div className='flex items-center justify-center gap-x-[76px] pt-[40px] '> */}

      {/* <div className="flex flex-row  justify-center gap-x-40  ">
        <div>
          <div className="flex gap-4 items-center">
            <Image src={Whatsapp} alt="Facebook" width={42} height={42} />
            <span> holaaaetrete</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={Facebook} alt="Facebook" width={42} height={42} />
            <span> holaaaetrete</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <Image src={X2} alt="Twitter" width={60} height={42} />
            <span> holaaaertert</span>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={Instagram} alt="Instagram" width={35} height={21} />
            <span> holaaasrtee</span>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex lg:flex-row justify-center items-center lg:gap-x-40 ">
        <a
          /* href="https://www.whatsapp.com" */
          href="https://wa.me/5491141747989"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Whatsapp} alt="Whatsapp" width={34} height={42} />
          <span>+54911-41747989</span>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Facebook} alt="Facebook" width={42} height={42} />
          <span>@rtk-argentina</span>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={X2} alt="Twitter" width={55} height={42} />
          <span>@rtk-argentina</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Instagram} alt="Instagram" width={35} height={21} />
          <span>@rtk-argentina</span>
        </a>
      </div>

      {/* <div className='flex flex-col items-center justify-center gap-y-[40px] pt-[40px]'>
  <div className='flex items-center gap-x-4'>
    <Image src={Facebook} alt="Icon 1" />
    <span>Texto 1</span>
  </div>
  <div className='flex items-center gap-x-4'>
    <Image src={X2} alt="Icon 2" />
    <span>Texto 2</span>
  </div>
  <div className='flex items-center gap-x-4'>
    <Image src={Instagram} alt="Icon 3" />
    <span>Texto 3</span>
  </div>
</div> */}

      {/* ----------------------------------------------------------------------------------

      <div className="flex items-center justify-center gap-x-[12px] pt-14">
        <Image src={Logo} alt="Logo" width={40} />
        <p className="font-bold text-[#36485C] text-[17px]">RTK-Argentina</p>
      </div>

    ---------------------------------------------------------------------------------- */}

      <nav>
        <Link
          href="/"
          className="font-semibold text-white hover:text-gray-300 "
        >
          <div className="flex items-center justify-center gap-x-[12px] justify-start pt-8">
            <Image src={Logo} alt="Logo" width={40} />
            <p className="font-bold text-[#36485C] text-[17px]">
              RTK-Argentina
            </p>
          </div>
        </Link>
      </nav>

      {/* <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <Link href="#servicio">
          <li>Servicio</li>
        </Link>
        <Link href="#aplicaciones">
          <li>Aplicaciones</li>
        </Link>
        <Link href="#quienes-somos">
          <li>Quienes somos</li>
        </Link>
        <Link href="#contacto">
          <li>Contacto</li>
        </Link>
      </ul> */}

      <p className="pt-[56px] text-center text-[14px] font-medium text[#5F7896] sm:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>
    </div>
  );
};
