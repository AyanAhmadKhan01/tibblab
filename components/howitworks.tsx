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
      img: '/Innovation-amico.png'
    },
    {
      step: 2,
      title: "Creator Matching",
      desc: "Shortlist & finalize best-fit fitness creators",
      icon: Users,
      img: '/Social media-bro.png'
    },
    {
      step: 3,
      title: "Campaign Execution",
      desc: "Content creation, publishing & tracking",
      icon: Rocket,
       img: '/Team work-bro.png'
    },
    {
      step: 4,
      title: "Analyze, Optimize & Scale",
      desc: "Improve performance and scale winning campaigns",
      icon: TrendingUp,
       img: '/Online world-bro.png'
    },
   
  ];

  return (
    <>
      <div className="max-w-[1500px] w-full m-auto mt-50">
        <div>
          <div className="ml-20">

            <h1 className="text-left text-4xl  text-[hsl(202,100%,55%)] ">
            How it Works?
          </h1>
            <p className="text-left text-xl opacity-80">A refined workflow engineered for performance</p> 
            </div>
   <div>
            {steps.map((s, i) => (
              <div style={{top: '15px'}} key={i} className={`flex justify-center items-center h-fit xl:w-[52%] w-full m-auto
 bg-[hsl(210,40%,2%)] z-10 sticky rounded-3xl p-10 md:mx-0 ${i === 2 ? '2xl:float-right z-40' : i === 0 ? ' z-0' : i === 1 ? 'float-right z-40' : i === 3 ? ' z-50' : ''}`}>
            
     <div>
                   <h1 className="text-xl text-text w-fit p-4  bg-[rgba(255,255,255,.03)]"> <span className="text-[rgba(255,255,255,.9)]">#</span> {s.step}</h1>                 
               
                  <div className={` flex  items-center gap-5 ml-2`}>
                 
                  <s.icon height={64} width={64}/>   
                   
               <div className="py-10 ">
                    <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] leading-[2.5rem] text-text  transition-all duration-500">{s.title}</h2>
<p className="text-[hsl(202,100%,30%)] md:mt-2 nt-0">{s.desc}</p>
</div>
                    </div>
                    <div className="flex justify-center">
                      <img className="md:h-[65vh] h-[40vh] bg-[rgba(255,255,255,.02)] p-3 rounded-2xl object-cover" src={s.img} alt={s.title} />
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
