import Hero from "@/components/hero";
import Feature from "@/components/feature";
import HowItWorks from "@/components/howitworks";
import Service from "@/components/service";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import QNA from "@/components/qna";

export default function Home() {
  return (
   <>
   <div className="">
   <Hero/>
    <Feature/>
    <Service/>
    <HowItWorks/>
    <QNA/>
   <CTA />
   </div>
   </>
  );
}
