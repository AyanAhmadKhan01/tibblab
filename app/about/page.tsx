
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
  <h1 className="text-xl text-center mb-6 text-[rgba(255,255,255,.5)] uppercase">
            [  Our Services ]
          </h1>
            <h1 className="text-2xl text-center md:text-5xl font-medium tracking-tighter 
            mb-10">What We Do?</h1>
           <div className="flex justify-center flex-wrap gap-6">
      {services.map((s) => {
        return (
          <div
            key={s.id}
            className={`p-10 bg-[rgba(255,255,255,.04)] md:w-[400px] w-[300px] ${s.id === 1 ? 'border-4 border-b-4 border-[rgba(255,255,255,.05)] rounded-tl-2xl': s.id === 3 ? 'rounded-tr-2xl border-4 border-b-4 border-[rgba(255,255,255,.05)]' : s.id === 4 ? 'border-l-4 border-b-4 border-[rgba(255,255,255,.05)] rounded-bl-2xl' : s.id === 5 ? 'rounded-br-2xl border-r-4 border-b-4 border-[rgba(255,255,255,.05)]' : ''}`}
          >
            <s.icon size={40} className="mb-4 text-accent" />

            <h3 className="text-2xl font-medium mb-2 text-text">{s.title}</h3>

            <p className="opacity-80 mb-4 text-primary">{s.description}</p>

            {/* <Link
              href={s.link}
              className="text-sm underline underline-offset-4 text-accent"
            >
              Learn more
            </Link> */}
          </div>
        );
      })}
    </div>

     
 
        </div>
        </>
    )
}