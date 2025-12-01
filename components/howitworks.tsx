"use client";

import { TrendingUp, Users, Rocket, ClipboardList } from "lucide-react";
import Lenis from "lenis";
import { useEffect } from "react";

export default function HowItWorks() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const steps = [
    {
      step: 1,
      title: "Strategy & Requirements",
      desc: "Understand your goals, audience, budget & KPIs",
      icon: ClipboardList,
    },
    {
      step: 2,
      title: "Creator Matching",
      desc: "Shortlist & finalize best-fit fitness creators",
      icon: Users,
    },
    {
      step: 3,
      title: "Campaign Execution",
      desc: "Content creation, publishing & tracking",
      icon: Rocket,
    },
    {
      step: 4,
      title: "Analyze, Optimize & Scale",
      desc: "Improve performance and scale winning campaigns",
      icon: TrendingUp,
    },
   
  ];

  return (
    <>
      <div className="max-w-[1500px] w-full m-auto mt-50">
        <div>
          <div className="mr-20">

            <h1 className="text-right text-4xl  text-[hsl(202,100%,55%)] ">
            How it Works?
          </h1>
            <p className="text-right text-xl opacity-80">A refined workflow engineered for performance</p> 
            </div>
          <div>
            {steps.map((s, i) => (
              <div style={{top: '80px'}} key={i} className={`bg-[hsl(210,40%,2%)] z-10 sticky top-0 rounded-3xl p-15 md:mx-0 mx-3`}>
                      <div className="w-[5px] left-0 top-9 h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_1000px_30px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px] -z-50"></div>
      <div className="w-[5px] ml-3 h-[100px] left-0  absolute bg-[hsl(202,100%,41%)]">
        </div>
        <div className="w-[5px] right-0 top-90 mt-auto h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_1000px_70px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px]">
        </div>
        <div className="w-[5px] right-4 top-96 h-[100px] absolute bg-[hsl(202,100%,41%)]">
        </div>
   
     
                   <h1 className="text-xl text-text w-fit p-4 rounded-br-4xl border-2 bg-[rgba(255,255,255,.03)] border-[rgba(255,255,255,.05)]"> <span className="text-[rgba(255,255,255,.9)]">Step</span> {s.step}</h1>                 
                <div className="py-10  rounded-2xl">
                  <div className={`flex md:flex-row flex-col justify-betweenround-2xl mim-h-[20vh] ${i === 0 ? 'mb-[300px]' : i === 1 ? ' mb-[300px]' : i === 2 ? ' mb-[300px]' : i === 3 ? 'mb-[300px]' : '' }`}>
                    <div className="flex flex-col justify-center w-full mr-5 rounded-2xl ">
                  <s.icon height={64} width={64} className="ml-10"/>   
                    <div className="ml-10 text-accent">
                     
                       </div>
               <div className="p-10 w-fit">
                    <h2 className="text-4xl text-text  transition-all duration-500">{s.title}</h2>
<p className="text-[hsl(202,100%,30%)] mt-2">{s.desc}</p>
</div>
                    </div>
                    <div >
                      <img className="h-[100%] rounded-2xl object-cover" src="https://dreamwallv2.vercel.app/img/Wallpapers/Wallpaper%201.jpg" alt="" />
                      </div>
                     </div>
                 
              
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
