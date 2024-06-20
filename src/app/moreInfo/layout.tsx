import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Esto es el Layout del MOREINFO */}
      <nav>
      <Link href="/" className="font-semibold text-white hover:text-gray-300 ">
          <div className="flex items-center  gap-x-[12px] justify-start pt-8">
            <Image src={Logo} alt="Logo" width={40} />
            <p className="font-bold text-[#36485C] text-[17px]">
              RTK-Argentina
            </p>
          </div>
        </Link>
      </nav>
      {children}
{/*       <footer>
        <Link href="/" className="font-semibold text-white hover:text-gray-300">
          <div className="flex items-center justify-center gap-x-[12px] ">
            <Image src={Logo} alt="Logo" width={40} />
            <p className="font-bold text-[#36485C] text-[17px]">
              RTK-Argentina
            </p>
          </div>
        </Link>
      </footer> */}
    </section>
  );
}
