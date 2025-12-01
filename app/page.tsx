import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import HowItWorks from "@/components/howitworks";
import Navbar2 from "@/components/navbar2";
import Service from "@/components/service";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <>
   <div className="">
 
   <Navbar/>
   <Hero/>
    <Service/>
   <HowItWorks/>
   <Navbar2/>
   <Feature/>
   <CTA />
   <Footer/>
   </div>
   </>
  );
}
