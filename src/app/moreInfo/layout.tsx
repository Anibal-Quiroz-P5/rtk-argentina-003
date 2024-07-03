import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import Link from "next/link";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* <Divisiones /> */}
      <div className=" h-[495px] bg-gradient-to-b from-custom-green-start to-custom-green-end"></div>
      
      

    
      
{/*       <nav>
      <Link href="/" className="font-semibold text-white hover:text-gray-300 ">
          <div className="flex items-center  gap-x-[12px] justify-start pt-8">
            <Image src={Logo} alt="Logo" width={40} />
            <p className="font-bold text-[#36485C] text-[17px]">
              RTK-Argentina
            </p>
          </div>
        </Link>
      </nav> */}

<div >
             
             </div>
 
      {children}

    </section>
  );
}
