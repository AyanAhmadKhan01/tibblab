import {
  Handshake,
  Users,
  Package,
  Rocket,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

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

export default function Service() {
  return (
    <div className="max-w-[1500px] w-full m-auto my-10 relative">
      <div className="w-[5px] top-9 h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_100px_40px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px] -z-50"></div>
      <div className="w-[5px] ml-3 h-[100px] absolute bg-[hsl(202,100%,41%)]">
        </div>
        <div className="w-[5px] right-0 top-90 mt-auto h-[100px] absolute bg-[hsl(202,100%,41%)]">
        </div>
        <div className="w-[5px] right-4 top-96 h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_100px_50px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px] -z-50">
        </div>
        
       <div className="lg:ml-30 ml-10 mb-6 ">
  <h1 className="text-4xl">Services That We Offer</h1>
  <p className="opacity-80">Unlock powerful creator-driven marketing tailored for your brand.</p>
</div>

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
  );
}
