import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Image from 'next/image'
import Logo from '../../public/assets/Logo.png'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>ESTE TITULOOOOOOOOOO</h1> */}
        {children}
        {/* <Footer/> */}
{/*         <footer>
        <div className='flex items-center justify-center gap-x-[12px] '>
        <Image src={Logo} alt='Logo' width={40}/>
        <p className='font-bold text-[#36485C] text-[17px]'>RTK-Argentina</p>
      </div>
        </footer> */}
        </body>
    </html>
  );
}