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


'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/Logo.png";
import User from "../../../public/assets/User.svg";
import Menu from "../../../public/assets/Menu.svg";
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center justify-between px-[20px] py-[16px]  lg:mx-auto lg:px-80 bg-[#BCD7FF]`}
    >
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={40} />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <div key={index} className="group relative">
              <p
                onClick={() => handleNavLinkClick(item.link)}
                className="text-[#0D0D0D] font-medium cursor-pointer"
              >
                {item.name}
              </p>
              <div className="absolute left-0 right-0 h-[2px] bg-[#0D0D0D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <Link href="/signup">
            <span className="hidden font-medium text-[#36485C] lg:flex gap-x-4 flex-row-reverse">
              <div>
                <Image src={User} alt="User Profile" />
              </div>
              <div>Registrate</div>
            </span>
          </Link>
        </div>
        <Image
          src={Menu}
          alt="Menu Button"
          className="lg:hidden"
          onClick={handleMenuClick}
        />
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