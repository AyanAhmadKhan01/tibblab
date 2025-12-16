import { Handshake, Play } from "lucide-react"
import Link from "next/link"

export default function Contact() {
    return(
        <>
        <div className="max-w-[1500px] w-[100%] m-auto">
            <div className="text-center my-20">
              <h1 className="text-xl mb-5 text-[rgba(255,255,255,.5)] uppercase">
            [ Let’s Talk ]
          </h1>
        <h1 className="text-6xl">Contact Us</h1>
        </div>
           
        <div className="flex justify-center flex-wrap gap-2">
            
        <div className=" w-[99%] lg:w-[49%] border-2 border-[rgba(255,255,255,.1)] rounded-2xl p-10  m-1 hover:shadow-[inset_0px_0px_100px_100px_#000]">
             <Handshake className="mb-10" height={105} width={105}/>
              <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Brand Partnership ]
          </h1>
<h1 className="text-4xl">Partner With Tibblab</h1>
<p className="mt-5 opacity-80">Let’s build campaigns that bring visibility, trust, and conversions.
 We help brands reach the right audience with the right creators backed by real data and meaningful content.
</p>
 <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSe7mzdxNcZMAHxOU2VSTxf7rDtzRXnyqYTFcOxXAEbds9fKnQ/viewform'}><button className="mt-10 bg-accent cursor-pointer py-5 px-12 rounded-2xl">Book a Strategy Call</button></Link> 
        </div>
          <div className="border-2 border-[rgba(255,255,255,.1)] w-[99%] lg:w-[49%] rounded-2xl p-10 m-1 hover:shadow-[inset_0px_0px_100px_100px_#000]">
            <Play className="mb-10" height={105} width={105}/>
              <h1 className="text-xl mb-10 text-[rgba(255,255,255,.5)] uppercase">
            [  Creator Onboarding ]
          </h1>
<h1 className="text-4xl">Become a Tibblab Creator</h1>
<p className="mt-5 opacity-80">Join a growing network of creators across MENA, the US, and Europe.
 Get access to consistent brand deals, creative support, and opportunities to work with global health, fitness, wellness & lifestyle brands.
</p>
<Link href={'https://docs.google.com/forms/d/e/1FAIpQLSfe9LZBad8tpSE1rGRc-SPC5KcHtyLlcHF813W_OunRNN96WA/viewform?usp=send_form'}><button className="mt-10 bg-accent cursor-pointer py-5 px-12 rounded-2xl">Apply as a Creator</button></Link>
        </div>
        </div>
        </div>
        </>
    )
}