import {
  Handshake,
  Layers,
  Package,
  Users,
  Video,
} from "lucide-react";


export default function Service() {
    const services = [
  {
    title: "One-Time Collaborations",
    description:
      "Perfect for brands testing influencer marketing or launching new products. Simple, fast, and effective.",
    icon: Handshake,
  },
  {
    title: "Full Campaign Management",
    description:
      "We plan, execute, manage, and optimize complete influencer marketing campaigns from end to end.",
    icon: Layers,
  },
  {
    title: "Influencer Seeding",
    description:
      "Send products to creators who share genuine reviews and organic content with zero pressure.",
    icon: Package,
  },
  {
    title: "Talent Management",
    description:
      "We represent select creators and help them scale brand partnerships, content quality, and market reach.",
    icon: Users,
  },
  {
    title: "Influencer Video Production",
    description:
      "High-quality, creator-led videos crafted for ads, social media, and brand campaigns.",
    icon: Video,
  },
];
    return(
        <>
        <div className="max-w-[1500px] w-full m-auto mt-20">
           <h1 className="text-4xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Our Services ]
          </h1>
        <div className="flex flex-wrap gap-3 ">
            {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <div key={index} className={`flex flex-wrap justify-between  border-b-2 border-[rgba(255,255,255,.1)] p-10 w-full ${index === 4 ? 'border-[rgba(255,255,255,0)]' : ''}`}>
      <div className="text-6xl flex items-center}">
      <h1>0{index + 1}</h1>
      </div>
      <div className="w-[800px]">
      <Icon height={55} width={55}/>
      <h3 className="mt-5 text-4xl">{service.title}</h3>
      <p>{service.description}</p>
      </div>
    </div>
  );
})}
        </div>
        </div>
        </>
    )
}