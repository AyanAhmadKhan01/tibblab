import { Dumbbell, Workflow , TrendingUp, MoveDown, MoveRight, MoveLeft, MoveUp, ClipboardList, Users, Edit3, BarChart2} from "lucide-react"


export default function Feature() {
  const creator = [
  {
    "Creator Type": "Micro",
    "Platforms": "Instagram",
    "Audience Targeting": "Gen Z Lifestyle",
    "Engagement": "10%"
  },
    {
    "Creator Type": "Macro",
    "Platforms": "TikTok",
    "Audience Targeting": "Viral",
    "Engagement": "50%"
  },
  {
    "Creator Type": "Nano",
    "Platforms": "LinkedIn",
    "Audience Targeting": "B2B Professionals",
    "Engagement": "70%"
  }
];



    return( 
        <> 
        <div className="relative z-30 mt-50 mx-3">
        <div className="max-w-[1500px] w-full m-auto relative">
           <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Features We Have  ]
          </h1>

                <h1 className="text-[clamp(2.5rem,6vw,3rem)] leading-[1.1] font-medium text-[hsl(202,100%,55%)]">Why Tibb Lab</h1>
                 <p className="font-medium text-text  w-fit ml-2"> Experience, precision, and results all under one roof.</p>
                 
           
                <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 mt-[50px] ">           
    <div className="border-1 border-[rgba(255,255,255,.05)] flex flex-col p-10  lg:col-span-1 col-span-2 rounded-4xl bg-[rgba(255,255,255,.04)] shadow-[inset_30px_30px_200px_#000] min-h-[420px]">
        <h1 className="text-2xl font-medium text-[hsl(202,100%,99%)]">Niche Fitness Network</h1>
        <p className="text-sm text-primary opacity-80">Direct access to health, wellness & fitness creators</p>
        <div className="flex justify-center items-center h-full">
          <div className="bg-[rgba(255,255,255,.05)] border-l-[rgba(255,255,255,.2)] border-t-[rgba(255,255,255,.09)] backdrop:backdrop-blur-2xl p-10 border-2 border-[rgba(255,255,255,.05)] rounded-3xl shadow-[8px_9px_12px_#000] 
">
            < Dumbbell height={92} width={92}/>
          </div>
          <div className="bg-[rgba(255,255,255,.05)] backdrop:backdrop-blur-2xl p-10 border-2 border-[rgba(255,255,255,.02)] border-l-[rgba(255,255,255,.09)] border-t-[rgba(255,255,255,.09)]  -translate-x-8 translate-y-12  rounded-3xl shadow-[0px_10px_20px_#000] backdrop-blur-[200px] saturate-200
">
            <Workflow  height={92} width={92}/>
          </div>
        </div>
        
    </div>
  
    <div className="border-1 border-[rgba(255,255,255,.05)] flex flex-col overflow-hidden bg-[rgba(255,255,255,.04)] rounded-4xl col-span-2 shadow-[inset_30px_30px_200px_#000]  backdrop-blur-[200px] saturate-200">
      <div className="md:p-8 py-3 text-center backdrop-blur-[200px] saturate-200 ">
        <h1 className=" text-2xl font-medium  text-[hsl(202,100%,99%)] ">Performance Driven Campaigns</h1>
        <p className="mt-1 text-sm text-primary">ROI focused, data-backed activations</p>
        </div>
      <div className="bg-[rgba(255,255,255,.01)] shadow-[inset_30px_30px_160px_#000] h-[300px] lg:w-[90%] w-[100%] rounded-tr-4xl  border-2 border-[rgba(255,255,255,0)] border-r-[rgba(255,255,255,.05)] border-t-[rgba(255,255,255,.1)] shadow-[3px_20px_20px_#000] backdrop-blur-[200px] saturate-200 ">
        
          <div className=" flex justify-between  backdrop-blur-[200px] saturate-200 ">
<div className="w-full scale-90">
  <div className="flex justify-between pb-3 border-b-2 border-[rgba(255,255,255,.02)] text-left ">
    <h1 className="w-1/4 m-7">Creator Type</h1>
    <h1 className="w-1/4 m-7">Platforms</h1>
  </div>

 
  {creator.map((c, i) => (
    <div key={i} className=" flex gap-4 justify-between items-center py-7 font-light text-left border-b-2 border-[rgba(255,255,255,.02)] ">

      <div className="ml-8">
        <h1 className="bg-[rgba(255,255,255,.04)] py-3 px-6 rounded-3xl inline-block shadow-[7px_7px_14px_#000] border-2 border-t-[rgba(255,255,255,.2)] border-l-[rgba(255,255,255,.05)]  border-[rgba(255,255,255,0)]">
          {c["Creator Type"]}
        </h1>
      </div>

      

      <div className="pr-2 ">
        <h1 className={`bg-[rgba(255,255,255,.04)] py-3 px-6 rounded-3xl inline-block shadow-[7px_7px_14px_#000] border-2 border-t-[rgba(255,255,255,.2)] border-l-[rgba(255,255,255,.05)]  border-[rgba(255,255,255,0)]  ${i === 0 ? 'border-r-[#e56969]' : i === 1 ? 'border-r-[#2af0ea]' : ''}`}>
          {c["Platforms"]}
        </h1>
      </div>
      </div>
  ))}

</div>
 <div className=" flex flex-col border-2 hidden sm:block border-t-[rgba(255,255,255,.1)] border-r-[rgba(255,255,255,.04)]  border-[rgba(255,255,255,.01)]  rounded-r-2xl mt-auto  h-[390px] w-[900px] m-5  shadow-[19px_7px_22px_#000] backdrop-blur-[200px] saturate-200  ">
  <h1 className="text-center mt-9 text-sm ">Growth Rate</h1>
        <h1 className="flex items-center rounded-tr-3xl  mt-9 pl-5 border-b-2 border-[rgba(255,255,255,.02)] ">
         10%
            <TrendingUp className="ml-auto mr-5 text-primary opacity-10" height={40} width={40}/>
        </h1>
        <h1 className="flex items-center rounded-tr-3xl  mt-8 pl-5 border-b-2 border-[rgba(255,255,255,.02)] ">
         50%
            <TrendingUp className="ml-auto mr-5  text-primary opacity-40" height={40} width={40}/>
        </h1>
         <h1 className="flex items-center rounded-3xl  mt-8 ml-5 ">
         80%
            <TrendingUp className="ml-auto mr-5  text-primary opacity-70" height={40} width={40}/>
        </h1>
       
       </div>
</div>
      </div>
    </div>


  <div className="border-1 border-[rgba(255,255,255,.05)] flex flex-col bg-[rgba(255,255,255,.04)] h-[450px] rounded-t-4xl  col-span-2 shadow-[inset_0_0_100px_60px_#000] backdrop-blur-[200px] saturate-120">
  <div className="overflow-hidden text-center mt-10">
    <h1 className="text-2xl font-medium  text-[hsl(202,100%,99%)]">Health Brand Specialists</h1>
    <p className="mt-1 text-sm text-primary">Built for nutrition, supplements & wellness brands</p>

    <div className="grid grid-cols-6 gap-12 mt-5">

      <img
        className="shadow-[0_0_120px_80px_#000] h-full object-cover row-span-2 rounded-tr-3xl opacity-70 "
        src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767322813/13335_p4c9ps.jpg"
        alt="background" 
      />

    
      <div className="col-span-4 shadow-[0_0_30px_#000] rounded-4xl overflow-hidden">
        
      <div className="flex items-center justify-center gap-6   rounded-4xl  p-8  shadow-[0_0_80px_25px_#000] backdrop-blur-[200px] border-t-[rgba(255,255,255,0.2)] border-r-[rgba(255,255,255,.09)] border-l-[rgba(255,255,255,.07)] border-b-[rgba(255,255,255,.03)] border-2 border-[rgba(255,255,255,.01)] opacity-80" >
        <img
          className="w-[130px] rounded-full"
          alt="pfp" 
          src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp"
        />
      

 <img className=" w-[130px] rounded-full opacity-70" alt="pfp" src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp" />
      <img className=" w-[130px] rounded-full opacity-50" alt="pfp"   src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp" />
      <img  className=" w-[130px] rounded-full opacity-30" alt="pfp"  src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp" />
      
     

</div>
</div>
      <img
        className="shadow-[0_0_120px_80px_#000] blur-[1px] h-full object-cover row-span-2 rounded-tl-3xl opacity-70 shadow-[30px_30px_2600px_100px_#000] "
        src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767322813/13335_p4c9ps.jpg"
         alt="background" 
      />

      <img
        className="shadow-[0_0_120px_80px_#000] blur-[1px] rounded-3xl col-span-4 "
        src="https://res.cloudinary.com/dt5qoqw6u/image/upload/v1767322813/13335_p4c9ps.jpg"
        alt="background" 
      />

    </div>
  </div>
</div>



    <div className="border-1 border-[rgba(255,255,255,.05)] flex justify-center items-center  overflow-hidden xl:col-span-1 col-span-3 flex-col bg-[rgba(255,255,255,.02)] rounded-4xl shadow-[0px_0px_200px_10px_#000]">
     <div className="flex flex-col gap-2  shadow-[inset_0px_0px_2000px_0px_#000] rounded-4xl m-5">
       <ClipboardList className=" -translate-x-10 -rotate-3" height={90} width={90} />
        <h1 className="flex justify-center gap-3 bg-[rgba(255,255,255,.05)] py-8 px-6 rounded-2xl cursor-pointer border-4 border-[rgba(255,255,255,.0)] border-t-[rgba(255,255,255,.1)] border-r-[rgba(255,255,255,.04)] backdrop-blur-[200px] saturate-200 -rotate-3 -translate-x-25 shadow-[10px_15px_2px_#000]">
          Strategy <ClipboardList />
        </h1>
         <Edit3 className=" translate-x-40 -translate-y-5 rotate-3" height={90} width={90} />
          <h1 className="flex justify-center gap-3 bg-[rgba(255,255,255,.05)] py-8 px-12 rounded-2xl cursor-pointer -translate-y-5 rotate-3 translate-x-25 border-6 border-[rgba(255,255,255,.0)] border-t-[rgba(255,255,255,.1)] border-r-[rgba(255,255,255,.04)]  backdrop-blur-[200px]  shadow-[10px_15px_2px_#000]">
          Content <Edit3 />
        </h1>
         <Users className="-translate-y-10 -translate-x-10 -rotate-3" height={90} width={90} />
         <h1 className="flex justify-center gap-3 bg-[rgba(255,255,255,.05)] py-8 px-12 rounded-2xl cursor-pointer border-6 border-[rgba(255,255,255,.0)] border-t-[rgba(255,255,255,.1)] border-r-[rgba(255,255,255,.04)]  -translate-y-11 -rotate-3 -translate-x-25  backdrop-blur-[200px] saturate-200  shadow-[10px_15px_2px_#000]">
          Creators <Users />
        </h1>
         <BarChart2 className=" translate-x-40 -translate-y-14 rotate-3" height={90} width={90} />
         <h1 className="flex justify-center gap-3 bg-[rgba(255,255,255,.05)] py-8 px-12 rounded-2xl cursor-pointer  border-6 border-[rgba(255,255,255,.0)] border-t-[rgba(255,255,255,.1)] border-r-[rgba(255,255,255,.04)]  -translate-y-16 rotate-3 translate-x-25  backdrop-blur-[200px] saturate-200  shadow-[10px_15px_2px_#000]">
          Reporting <BarChart2 />
        </h1>
      </div>
  </div>
</div>

    </div>
            </div>     
       
        </>
    )
}