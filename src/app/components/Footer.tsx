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

/* "use client"; */
import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import Facebook from "../../../public/assets/Facebook.svg";
import X2 from "../../../public/assets/Email.svg";
import Instagram from "../../../public/assets/Instagram.svg";
import Whatsapp from "../../../public/assets/Whatsapp.svg";
import Linkedin from "../../../public/assets/Linkedin.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen ">
      <div className=" pt-[0px] pb-[40px] lg:pt-12 2xl:pt-0 2xl:pb-[50px] bg-[#002E1E] ">
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

        {/* <div className="flex flex-col lg:flex lg:flex-row justify-center items-center sm:gap-x-10 2xl:gap-x-20 "> */}
        <div className="flex flex-col lg:flex lg:flex-row justify-center  sm:gap-x-10 pt-10 2xl:gap-x-20 2xl:pt-12">
          <div className="flex flex-row  items-center">

            <div className="pl-7 pb-1 ">
              <a
                /* href="https://www.whatsapp.com" */
                href="https://wa.me/5491124940670"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center p-0 pl-0 hover:bg-green-700 rounded text-white"
              >
            <div className="pl-3">
              <Image src={Whatsapp} alt="Whatsapp" width={25} height={42} />
            </div>
                <span className="text-[16px] pl-[2px]">+54911-24940670</span>
              </a>

              {/* <a
            
            href="https://wa.me/5491151555966"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 items-center p-0 hover:bg-gray-200 rounded"
          >
            
            <span className="text-[16px]">+54911-51555966</span>
          </a> */}
            </div>
          </div>

          {/*         <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Facebook} alt="Facebook" width={34} height={42} />
          <span>@rtk-argentina---</span>
        </a> */}
          <a
            href="mailto:soporte@rtkarg.com"
            target="_blank"
            rel="noopener noreferrer"
            /* className="flex gap-4 items-center p-2   hover:bg-gray-200 rounded pl-6" */
            className="flex gap-4 items-center p-2   hover:bg-green-700 rounded pl-10"
          >
            <Image src={X2} alt="Twitter" width={25} height={42} />
            <span className="text-[16px] text-white">soporte@rtkarg.com</span>
          </a>
          {/*         <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Instagram} alt="Instagram" width={32} height={42} />
          <span>@rtk-argentina---</span>
        </a> */}
          {/* <a
          href="https://www.linkedin.com/in/anibal-quiroz-full-stack-javascript/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center p-2 hover:bg-gray-200 rounded"
        >
          <Image src={Linkedin} alt="Linkedin" width={34} height={42} />
          <span className="text-[16px]">@rtk-argentina---</span>
        </a> */}
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
            <div className="flex items-center justify-center gap-x-[12px]  pt-6">
              <Image src={Logo} alt="Logo" width={25} />
              <p className="font-semibold  text-[17px] text-white">RTK-Argentina</p>
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

        <p className="pt-[15px] text-center text-[13px] font-light text[#5F7896] sm:pt-5 text-gray-100">
          © Copyright 2024. RTK-Argentina. All rights reserved.
        </p>
      </div>
    </div>
  );
};
