import Hero from "@/components/hero";
import Feature from "@/components/feature";
import HowItWorks from "@/components/howitworks";
import Service from "@/components/service";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import QNA from "@/components/qna";
import Script from "next/script";

export default function Home() {
  return (
   <>
    
   <div>
   <Hero/>
    <Feature/>
    <Service/>
    <HowItWorks/>
    {/* <QNA/> */}
   <CTA />
   </div>
   </>
  );
}
