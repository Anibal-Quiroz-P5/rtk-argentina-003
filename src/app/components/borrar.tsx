
'use client'

import React, { useState } from 'react';
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

  const handleNavLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      router.push(`/${link}`);
    } else {
      // Si es una ruta normal, redirige usando Next.js Router
      router.push(link);
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={40} />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px] ">
          {navLinks.map((item, index) => (
            <p
              key={index}
              onClick={() => handleNavLinkClick(item.link)}
              className="text-[#4a47f3] font-medium cursor-pointer"
            >
              {item.name}
            </p>
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
