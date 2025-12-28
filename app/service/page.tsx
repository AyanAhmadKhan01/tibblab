import {
  Handshake,
  Rocket,
  PlayCircle,
  Package,
  Users,
} from "lucide-react";

import Link from "next/link";

export default function Service() {

  

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

    return(
        <>
        <div className="max-w-[1500px] w-full m-auto mt-20 border-t-2 border-x-2 border-[rgba(255,255,255,.08)] pt-20 rounded-2xl">
          <h1 className="text-xl  text-center mb-6 text-[rgba(255,255,255,.5)] uppercase">
            [  Our Services ]
          </h1>
            <h1 className="text-2xl text-center md:text-5xl font-medium tracking-tighter 
             border-b-2 pb-10 border-[rgba(255,255,255,.06)]">What We Do?</h1>
           <div className="flex justify-center flex-wrap gap-6 py-10 bg-[rgba(255,255,255,.02)]">
      {services.map((s) => {
        return (
          <div
            key={s.id}
            className={`p-10 text-center bg-[rgba(255,255,255,.04)] md:w-[400px] w-[300px] ${s.id === 1 ? 'border-4 border-b-4 border-[rgba(255,255,255,.05)] rounded-tl-2xl': s.id === 3 ? 'rounded-tr-2xl border-4 border-b-4 border-[rgba(255,255,255,.05)]' : s.id === 4 ? 'border-l-4 border-b-4 border-[rgba(255,255,255,.05)] rounded-bl-2xl' : s.id === 5 ? 'rounded-br-2xl border-r-4 border-b-4 border-[rgba(255,255,255,.05)]' : ''}`}
          >
            <s.icon size={100} className="mb-4 m-auto text-accent" />

            <h3 className="text-2xl font-medium mb-2 text-text">{s.title}</h3>

            <p className="opacity-50 mb-4">{s.description}</p>

            <Link
              href={s.link}
              className="text-sm underline underline-offset-4 text-accent"
            >
              Learn more
            </Link>
          </div>
        );
      })}
    </div>

          </div>
  </>
    )
}