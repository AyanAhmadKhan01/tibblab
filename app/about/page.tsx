
import {Handshake, Users, Package, Rocket, PlayCircle } from "lucide-react"
import Link from "next/link";

export default function Aboutus() {
    const iconMap = {
  Handshake,
  Users,
  Package,
  Rocket,
  PlayCircle,
};

const services = [
  {
    id: 1,
    title: "One-Time Collaboration",
    description: "Partner with top creators for a single, high-impact campaign.",
    icon: Handshake,
    link: "/services/one-time-collaboration",
  },
  {
    id: 2,
    title: "Talent Management",
    description: "End-to-end creator management to grow and scale influence.",
    icon: Users,
    link: "/services/talent-management",
  },
  {
    id: 3,
    title: "Influencer Seeding",
    description: "Get your product into the hands of the right creators.",
    icon: Package,
    link: "/services/influencer-seeding",
  },
  {
    id: 4,
    title: "Full Campaign Management",
    description: "Complete planning, execution, and optimization of campaigns.",
    icon: Rocket,
    link: "/services/full-campaign-management",
  },
  {
    id: 5,
    title: "Influencer Video",
    description: "High-quality creator-led videos for strong brand impact.",
    icon: PlayCircle,
    link: "/services/influencer-video",
  },
];

const items = [
  {
    title: "Built for Real Results",
    description:
      "Tibblab is a modern influencer marketing agency built for brands that demand outcomes not vanity metrics. We focus on performance, clarity, and measurable impact.",
    image: "/Analytics-bro.png",
    reverse: false,
  },
  {
    title: "Data-Driven Global Reach",
    description:
      "We connect health, wellness, fitness, and lifestyle brands with high-impact creators across MENA, the US, and Europe, powered by smart data, precise targeting, and authentic storytelling.",
    image: "/Globalization-bro.png",
    reverse: true,
  },
  {
    title: "Genuine Creator Partnerships",
    description:
      "Through a curated network of micro and nano creators, we deliver campaigns that generate meaningful engagement and measurable growth built on partnerships that feel real, not transactional.",
    image: "/Partnership-bro.png",
    reverse: false,
  },
];


    return(
        <>
          <div className="mt-20 text-center pb-30 border-b-2 border-[rgba(255,255,255,.05)]">
    <h1 className="text-6xl">Our Philosophy</h1>
    <p className="text-xl mt-5 opacity-60"> <span className="border-r-2 border-[rgba(255,255,255,.2)] px-5">[ Minimalist ]</span> <span className="border-r-2 border-[rgba(255,255,255,.4)]  px-5">[ Precise ]</span> <span className="px-5">[ Performance-first ]</span></p>
   </div>
        <div className="mt-20 max-w-[1500px] w-[100%] m-auto">
            <div className="ml-5">
               <div>           
                    <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  About Us ]
          </h1>
                <h1 className="text-2xl md:text-6xl font-medium tracking-tighter"><span className=""></span> Tibb <span className='tracking-wide text-accent'>Labs</span></h1>
                </div>
<p className="font-medium text-text mt-4 md:w-[40%]">Tibblab is a modern influencer marketing agency built for brands that value
    real results over vanity metrics.</p>
            </div>
           <div className="mt-0 mb-40 border-b-1 border-[rgba(255,255,255,.2)]">


 <div className="flex flex-col gap-x-32 mt-8">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex gap-x-16 border-2 border-[rgba(255,255,255,.05)] md:p-20 p-5
            ${item.reverse ? "flex-row-reverse" : ""}
            max-md:flex-col `}
        >
         
          <div className="w-1/2 max-md:w-full flex justify-center items-center">
            <img
              src={item.image}
              alt={item.title}
              className="md:w-[100%] w-[90%] object-contain"
            />
          </div>

       
          <div className="w-1/2 max-md:w-full md:mt-55 mt-10">
            <h1 className="text-4xl font-medium tracking-tight ">
              {item.title}
            </h1>
            <p className="mt-3 opacity-70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  
     
 
        </div>
        </>
    )
}