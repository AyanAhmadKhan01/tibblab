"use client";

import { TrendingUp, Users, Rocket, ClipboardList } from "lucide-react";

export default function HowItWorks() {

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
      <div className="max-w-[1500px] w-full m-auto mt-40">
        <div>
          <div className="text-center ">
             <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Our Process  ]
          </h1>

            <h1 className="text-4xl  text-[hsl(202,100%,55%)] ">
            How it Works?
          </h1>
            <p className="text-xl opacity-80">A refined workflow engineered for performance</p> 
            </div>
   <div className="flex gap-2 justify-center flex-wrap">
            {steps.map((s, i) => (
              <div style={{top: '0px'}} key={i} className={`flex flex-col max-w-[740px] w-[100%] justify-center items-center m-auto
 bg-[hsl(210,40%,2%)] z-10 sticky rounded-3xl p-10  md:mx-0`}>
            
     <div>
                   <h1 className="text-xl text-text w-fit p-4  bg-[rgba(255,255,255,.03)]"> <span className="text-[rgba(255,255,255,.9)]">#</span> {s.step}</h1>                 
               
                  <div className={`flex  items-center gap-5 ml-2`}>
                 
                  <s.icon height={64} width={64}/>   
                   
               <div className="py-10 max-w-[645px] w-[100%]">
                    <h2 className="text-[clamp(1.6rem,4vw,2.25rem)] leading-[2.5rem] text-text  transition-all duration-500">{s.title}</h2>
<p className="text-[hsl(202,100%,30%)] md:mt-2 nt-0">{s.desc}</p>
</div>
                    </div>
                    <div className="flex justify-center">
                      <img className=" bg-[rgba(255,255,255,.02)] p-3 rounded-2xl object-cover" src={s.img} alt={s.title} />
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
