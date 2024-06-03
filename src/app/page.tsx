import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq"; 
import { Footer } from "./components/Footer";
import CorreoContact from "./components/CorreoContact"; 
import AboutUs from "./components/AboutUs";


export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features />
      <AboutUs />
      <Faq />
      <CorreoContact />
      <Footer />
    </div>
   </>
  );
}
