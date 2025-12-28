'use client'

import { Flag, Instagram, MoveDown, Twitch, Twitter, Youtube,} from "lucide-react";
import { motion } from "motion/react"
import Link from "next/link";

export default function Hero() {
    const icons = [Youtube, Twitter, Instagram, Twitch];
    return(
        <>
        <div className="flex justify-center text-center
">
            <div className="max-w-[1500px] w-full md:mt-40 mt-20 ">
                <div className="w-12 h-1 mb-10 bg-[hsl(202,100,55)] m-auto"></div> 
               <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[hsl(202,100,55)]">
  Health & Fitness Influencer
</h1>

<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-2 font-bold text-[hsl(202,100%,98%)]">
  Marketing that Delivers Real Results
</h2>

             <p className="mt-12 w-[90%] sm:w-[70%] lg:w-[40%] mx-auto text-[hsl(202,80%,25%)]">
  A dedicated influencer marketing partner for fitness and wellness brands seeking real engagement and measurable growth.
</p>

                <MoveDown className="m-auto mb-10 scale-150 text-[hsl(202,100,20)]"  height={55}/>
                <Link href={'/contact'}>
                     <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="flex w-fit m-auto flex-row cursor-pointer  bg-accent p-4  border-2 border-b-12 border-[hsl(202,100,15)]"
  >
   
              
                  <Flag className="mr-2 text-text" />
             
                 Start your campaign
                 </motion.button>
                 </Link>
                
    <div className="flex justify-center gap-18 mt-10 lg:flex hidden">
 
  {icons.map((Icon, i) => (
    <span key={i} className={`hover:animate-pulse border-2 bg-[rgba(255,255,255,.03)] border-[hsl(202,100%,55%)]  shadow-[12px_12px_1000px_hsl(202_100%_40%)]
 m-5 p-5 rounded-full ${i === 0 ? '-translate-x-26  -translate-y-28 -rotate-5' : i === 1 ? '-translate-x-18 -rotate-5' : i === 2 ? 'translate-x-18 -rotate-5' : i === 3 ? 'translate-x-26 translate-y-28 -rotate-5' : ''}`}>
  
      <Icon height={45} width={45} className="text-[hsl(202,100%,29%)] "/>
 
    </span>
        
  ))}
</div>
<div className="md:block hidden">
                   <div className="w-1 h-20 bg-[hsl(202,100,55)]"></div> 
                    <div className="w-1 h-50 ml-auto bg-[hsl(202,100,55)] "></div> 
                    </div>
            </div>
        </div>
        
        </>
    )
}