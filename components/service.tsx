import {
  Handshake,
  Users,
  Package,
  Rocket,
  PlayCircle,
} from "lucide-react";

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

export default function Service() {
  return (
   <>
    <div className="mt-20 max-w-[1500px] w-[100%] m-auto">
   <div className=" mb-12 2xl:mx-0 mx-5">
     <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Our offerings ]
          </h1>

  <h1 className="text-4xl">Services That We Offer</h1>
  <p className="opacity-80">Unlock powerful creator-driven marketing tailored for your brand.</p>
</div>

       <div className="flex 2xl:justify-start justify-center flex-wrap mt-10">
            {services.map((s) => {
        return (
            

            <div className="relative group"    key={s.id}>

  <span className="absolute -top-1 -left-1 w-2 h-2 border-2 bg-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity" />

  <span className="absolute -top-1 -right-1 w-2 h-2 border-2 bg-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity" />

  <span className="absolute -bottom-1 -left-1 w-2 h-2 border-2 bg-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity" />

  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-2 bg-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity" />

          <div
           
            className={`hover:border-[rgba(255,255,255,.2)] 
 cursor-pointer p-10 border-[rgba(255,255,255,.0)] border-1 xl:border-l-[rgba(255,255,255,.2)] border-l-[rgba(255,255,255,0)] xl:border-b-[rgba(255,255,255,0)] border-b-[rgba(255,255,255,.2)] py-20 md:w-[500px] h-[300px] xl:w-[500px] relative group overflow-hidden `}

          >
            <div className="border-12 w-full absolute top-0 left-60 border-[rgba(255,255,255,.7)] blur-[100px] opacity-0 group-hover:opacity-100 "></div>
            <s.icon size={40} className="mb-4 text-accent" />

            <h3 className="text-2xl font-medium mb-2 text-text">{s.title}</h3>

            <p className="opacity-45 mb-4 text-white">{s.description}</p>

          </div>
          </div>
        );
      })}
      </div>
    </div>
   </>
  );
}
