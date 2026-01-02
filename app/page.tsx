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
    <Script 
        id="gtag-lib"
        src="https://www.googletagmanager.com/gtag/js?id=G-G8ZE96F3DT"
        strategy="afterInteractive"
     />
     <Script id="gtag-init" strategy="afterInteractive">
       {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-G8ZE96F3DT');
       `}
     </Script>
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
