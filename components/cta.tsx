'use client';

import {  Instagram, Twitch, Twitter, Youtube, Flag} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
    const icons = [Youtube, Twitter, Instagram, Twitch, Youtube, Twitter, Instagram, Twitch];
  return (
    <>
   
         <div className='max-w-[1500px] w-full m-auto my-20 px-4 md:px-0'>
                    
          <div className='border-[rgba(255,255,255,.03)] border-2 z-10 p-8 md:p-20  rounded-2xl relative overflow-hidden '>
          
  <div className="hidden md:flex absolute w-[50%]">

 {icons.map((Icon, i) => (
    <span key={i} className={`hover:animate-pulse border-2 bg-[rgba(255,255,255,.03)] border-[hsl(202,100%,55%)]  shadow-[12px_12px_1000px_hsl(202_100%_40%)]
 m-5 p-5 rounded-full ${i === 0 ? '-translate-x-28  -translate-y-28 -rotate-5' : i === 1 ? '-translate-x-35  translate-y-45   -rotate-5' : i === 2 ? '-translate-x-28 -rotate-5' : i === 4 ? '-translate-x-55  translate-y-45   -rotate-5' :  i === 5 ? 'translate-x-49  translate-y-42   -rotate-5' :  i === 6 ? 'translate-x-85  translate-y-25   -rotate-5' :  i === 7 ? 'translate-x-95  -translate-y-20   -rotate-5' :  i === 3 ? 'translate-x-235  translate-y-61   -rotate-5' : ''}`}>
  
      <Icon height={45} width={45} className="text-[hsl(202,100%,29%)] "/>
 
    </span>
        
  ))}
</div>

          
  <h1 className='text-2xl md:text-4xl text-center px-4 md:px-0'>Ready to Grow With <span className='text-accent'>Influencer Marketing?</span></h1>

  <p className='w-[90%] md:w-[40%] m-auto mt-4 text-center opacity-80 px-4 md:px-0'>
    Whether you're a brand looking to launch impactful campaigns or an influencer
    wanting to collaborate with top clients, we’ve got you covered.
  </p>
   <Link href={'/contact'}>
                         <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="flex justify-center cursor-pointer  md:text-base w-fit m-auto mt-12 md:mt-20 bg-[rgba(255,255,255,.04)] py-4 px-7 rounded-2xl shadow-[0px_10px_0_rgba(0,0,0,.7)]"
  >
     <Flag className="mr-2 text-text " />
    Start our Campaign
    </motion.button>
    </Link>
  </div> 
          </div>
     
       
    </>
  );
}
