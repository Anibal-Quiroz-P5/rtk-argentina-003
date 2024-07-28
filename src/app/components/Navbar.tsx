// 'use client'

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Logo from "../../../public/assets/Logo.png";
// import User from "../../../public/assets/User.svg";
// import Menu from "../../../public/assets/Menu.svg";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import HamburguerMenu from "./HamburguerMenu";

// const navLinks = [
//   { name: "Servicio", link: "#servicio" },
//   { name: "Aplicaciones", link: "#aplicaciones" },
//   { name: "Quienes somos", link: "#quienes-somos" },
//   { name: "Contacto", link: "#contacto" },
// ];

// const Navbar = () => {
//   const router = useRouter();
//   const [showMenu, setShowMenu] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleNavLinkClick = (link: string) => {
//     if (link.startsWith("#")) {
//       router.push(`/${link}`);
//     } else {
//       router.push(link);
//     }
//   };

//   const handleMenuClick = () => {
//     setShowMenu(!showMenu);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
// /*     <nav
//       className={`sticky top-0 z-50 flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 bg-[#e0e0f5] opacity-${scrollPosition > 100 ? '50' : '100'}`}
//     > */
//           <nav
//       className={`sticky top-0 z-50 flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-80 bg-[#BCD7FF]  `}
//     >
//       <div className="flex items-center">
//         <Image src={Logo} alt="Logo" width={40} />

//         <div className="hidden lg:flex pl-[74px] gap-x-[56px] ">
//           {navLinks.map((item, index) => (
//             <p
//               key={index}
//               onClick={() => handleNavLinkClick(item.link)}
//               className="text-[#0D0D0D] font-medium  cursor-pointer"
//             >
//               {item.name}
//             </p>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-x-5">
//         <div className="flex items-center gap-x-2">
//           <Link href="/signup">
//             <span className="hidden font-medium text-[#36485C]  lg:flex gap-x-4 flex-row-reverse">
//               <div>
//                 <Image src={User} alt="User Profile" />
//               </div>
//               <div>Registrate</div>
//             </span>
//           </Link>
//         </div>
//         <Image
//           src={Menu}
//           alt="Menu Button"
//           className="lg:hidden"
//           onClick={handleMenuClick}
//         />
//       </div>

//       {showMenu && (
//         <HamburguerMenu
//           showMenu={showMenu}
//           handleNavLinkClick={handleNavLinkClick}
//           setShowMenu={setShowMenu}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import User from "../../../public/assets/User.svg";
/* import Menu-orig from "../../../public/assets/Menu.svg"; */
import Menu from "../../../public/assets/Menu.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HamburguerMenu from "./HamburguerMenu";

const navLinks = [
  { name: "Servicio", link: "#servicio" },
  { name: "Aplicaciones", link: "#aplicaciones" },
  { name: "Quienes somos", link: "#quienes-somos" },
  { name: "Contacto", link: "#contacto" },
];

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNavLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      router.push(`/${link}`);
    } else {
      router.push(link);
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //     <nav
    //       className={`sticky top-0 z-50 flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-80 bg-[#002E1E] `}
    //     >
    //       <div className="flex flex-row items-center ">
    //         <div>

    //         <Image src={Logo} alt="Logo" width={40} />
    //         </div>

    //         <div className="  hidden lg:flex pl-[74px] gap-x-[56px] ">
    //           {navLinks.map((item, index) => (
    //             <div key={index} className="group relative ">
    //               <p
    //                 onClick={() => handleNavLinkClick(item.link)}
    //                 className=" font-medium cursor-pointer text-[#FFFFFF] "
    //               >
    //                 {item.name}
    //               </p>
    //               <div className="absolute left-0 right-0 h-[2px] bg-[#FFFFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    // {/*       ---------------------------------------------------------------------------------------------------------------
    //       ---------------------------------------------------------------------------------------------------------------
    //       --------------------------------------------------------------------------------------------------------------- */}

    //       {/* {NO BORRAR ES EL BOTÓN DE "REGISTRATE" QUE ESTABA A LA DERECHA EN NAVBAR} */}
    //       <div className="flex gap-x-5 ">
    // {/*         <div className="flex items-center gap-x-2">
    //           <Link href="/signup">
    //             <span className="hidden font-medium text-[#36485C] lg:flex gap-x-4 flex-row-reverse">
    //               <div>
    //                 <Image src={User} alt="User Profile" />
    //               </div>
    //               <div>Registrate</div>
    //             </span>
    //           </Link>
    //         </div> */}
    //         <Image
    //           src={Menu}
    //           alt="Menu Button"
    //           className="lg:hidden"
    //           onClick={handleMenuClick}
    //         />
    //       </div>

    // {/*   ---------------------------------------------------------------------------------------------------------------
    //       ---------------------------------------------------------------------------------------------------------------
    //       --------------------------------------------------------------------------------------------------------------- */}

    //       {showMenu && (
    //         <HamburguerMenu
    //           showMenu={showMenu}
    //           handleNavLinkClick={handleNavLinkClick}
    //           setShowMenu={setShowMenu}
    //         />
    //       )}
    //     </nav>

    // <nav className="sticky top-0 z-50 flex items-center justify-between w-full  bg-[#002E1E] px-4 py-0 lg:px-[195px] lg:w-full">
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full  bg-[#002E1E] px-4 py-0 lg:px-[70px] 2xl:px-[195px] ">
      {/* <div className="flex items-center lg:ml-[6px]">
    <Image src={Logo} alt="Logo" width={40} />
  </div> */}

      <nav>
        <Link
          href="/"
          className="font-semibold text-white hover:text-gray-300 "
        >
          <div className="flex items-center lg:ml-[6px] hover:bg-[#004A3A] p-2 rounded">
            <Image src={Logo} alt="Logo" width={40} />
            <p className=" text-[#FFFFFF] text-[15px] font-medium pl-2">
              RTK Argentina
            </p>
          </div>
        </Link>
      </nav>

      {/* Opciones de navegación a la derecha */}
      <div className="hidden gap-x-14 lg:flex lg:mr-[6px]">
        {navLinks.map((item, index) => (
          <div key={index} className="relative group">
            <p
              onClick={() => handleNavLinkClick(item.link)}
              className="font-inter font-bold text-[#FFFFFF] cursor-pointer  2xl:text-[16px]"
            >
              {item.name}
            </p>
            <div className="absolute left-0 right-0 h-[2px] bg-[#FFFFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
          </div>
        ))}
      </div>

      {/* Botón de menú (visible solo en pantallas pequeñas) */}
      <div className="flex items-center gap-x-5 lg:hidden">
        <Image src={Menu} alt="Menu Button" onClick={handleMenuClick} className="w-4/5 h-10 md:w-[50px]"/>
      </div>

      {showMenu && (
        <HamburguerMenu
          showMenu={showMenu}
          handleNavLinkClick={handleNavLinkClick}
          setShowMenu={setShowMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
