import { FlaskConical } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
   <div className="max-w-[1500px] w-full m-auto py-5 mb-5 px-6 mt-50 z-50">
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
         
          <div className="md:col-span-2">
             <div className="flex items-center">
               <FlaskConical color='#4cbdff' className='mr-1' />
                <h1 className="text-2xl md:text-3xl font-medium tracking-tighter">Tibb <span className='tracking-wide text-accent'>Labs</span></h1>
                </div>
            <p className="text-text opacity-80 mt-2 max-w-md">
              Connecting health & fitness brands with top creators for
              performance-driven campaigns.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-bold text-text mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-text opacity-60 ">
              <Link href={'/'}>
              <li className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
                Home
              </li>
              </Link>
               <Link href={'/about'}>
              <li className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
                About Us
              </li>
              </Link>
              <Link href={'/service'}>
              <li className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
                Services
              </li>
              </Link>
              <Link href={'/contact'}>
              <li className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
                Contact
              </li>
              </Link>
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-bold text-text mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-text opacity-60 cursor-pointer">
              <li>Email: hello@tibblabs.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

      
        <div className="border-t-2 border-[hsl(202,100%,55%)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text opacity-50 text-sm">
            © 2025 Tibb Labs. All rights reserved.
          </p>
          <Link href="https://storyset.com/online" className="text-text opacity-30 text-sm">Online illustrations by Storyset</Link>
          <div className="flex gap-6 text-sm text-[hsl(202,40%,30%)]">
            <Link href={''}>
            <span className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            </Link>
                  <Link href={''}>
            <span className="hover:text-[hsl(202,100%,50%)] cursor-pointer transition-colors">
              Terms of Service
            </span>
            </Link>
          </div>
        </div>
      </div>
  );
}
