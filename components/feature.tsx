export default function Feature() {
    
const tibbLabBoxes = [
  {
    icon: "/bolt-svgrepo-com.svg",
    title: "Niche Fitness Network",
    desc: "Direct access to health, wellness & fitness creators"
  },
  {
    icon: "/clapperboard-play-svgrepo-com.svg",
    title: "Performance Driven Campaigns",
    desc: "ROI focused, data-backed activations"
  },
  {
    icon: "/medal-ribbons-star-svgrepo-com.svg",
    title: "Health Brand Specialists",
    desc: "Built for nutrition, supplements & wellness brands"
  },
  {
    icon: "/course-up-svgrepo-com.svg",
    title: "End-to-End Execution",
    desc: "Strategy → Creators → Content → Reporting"
  }
];


    return( 
        <> 
        <div className="relative z-30 mt-50 mx-8">
        <div className="max-w-[1500px] w-full m-auto relative">
          
            <div className="hidden md:block w-[5px] -left-20 top-9 h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_100px_30px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px] -z-50"></div>
      <div className="hidden md:block w-[5px] ml-3 h-[100px] -left-20 absolute bg-[hsl(202,100%,41%)]">
        </div>
        <div className="hidden md:block w-[5px] -right-20 top-90 mt-auto h-[100px] absolute bg-[hsl(202,100%,41%)]">
        </div>
        <div className="hidden md:block w-[5px] -right-24 top-96 h-[100px] absolute bg-[hsl(202,100%,41%)] shadow-[0_0_1000px_50px_hsl(202,100%,41%)] border-[100px] border-black blur-[200px] -z-50">
        </div>
          
                <h1 className=" text-5xl font-medium text-[hsl(202,100%,55%)]">Why Tibb Lab</h1>
                 <p className="font-medium text-text  w-fit ml-2"> Experience, precision, and results all under one roof.</p>
                 
           
                <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 mt-[50px]">
                 
  {tibbLabBoxes.map((item, i) => (
    <div key={i} className={`flex flex-col   
  p-10  bg-[rgba(255,255,255,.04)]  ${i === 0 ? 'lg:col-span-2 col-span-1' : i === 3  ? 'lg:col-span-2 col-span-1' : '' }`}>
        <div className="flex justify-center bg-[rgba(255,255,255,.06)] p-20 rounded-3xl">
      <img src={item.icon}  alt={item.title} height={82} width={82} />
      </div>
      <h1 className="mt-12 text-2xl font-medium text-left text-[hsl(202,100%,99%)]">{item.title}</h1>
      <p className="mt-2 text-sm text-primary">{item.desc}</p>
      </div>
  ))}

               
              
            </div>
        </div>
       
   
        </div>
        
       
        </>
    )
}