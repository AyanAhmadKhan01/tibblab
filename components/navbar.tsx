'use client';

import { FlaskConical } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const trigger = 3359
     const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= trigger);
    };
     window.addEventListener("scroll", handleScroll);
     handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll);}
  }, [trigger]);



    return(
        <>
        <div className={`flex justify-center items-center z-50 mx-5 ${isSticky ? 'sticky top-0 opacity-0 transition-all duration-1000 ' : 'sticky top-0 transition-all duration-1000'}`}>
            <div className="flex justify-between items-center max-w-[1500px] w-full  py-5 md:px-10 px-8 bg-[rgba(255,255,255,.03)] mt-10 rounded-full">
                <div className="flex items-center">
               <FlaskConical color='#4cbdff' className='mr-1' />
                <h1 className="text-2xl md:text-3xl font-medium tracking-tighter">Tibb <span className='tracking-wide text-accent'>Labs</span></h1>
                </div>
                
                <button 
                    className="md:hidden flex flex-col gap-1.5 z-50 cursor-pointer hover:scale-105 transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

              
                <ul className={`tracking-wide text-text
                    ${isMenuOpen ? 'flex' : 'hidden'} md:flex
                    flex-col md:flex-row 
                    fixed md:relative
                    inset-0 md:inset-auto
                    bg-background md:bg-transparent
                    items-center justify-center
                    gap-8 md:gap-8
                    text-2xl md:text-base
                    z-40 md:z-auto
                    cursor-pointer
                    [&>li]:hover:text-accent [&>li]:transition-all
                
                `}>
                    <Link href={'/'}><li onClick={() => setIsMenuOpen(false)}>Home</li></Link>
                  <Link href={'/about'}><li onClick={() => setIsMenuOpen(false)}>About Us</li></Link>
                   <Link href={'/service'}>  <li onClick={() => setIsMenuOpen(false)}>Services</li></Link>
                    <li onClick={() => setIsMenuOpen(false)}>Blog</li>
                  <Link href={'/contact'}> <li onClick={() => setIsMenuOpen(false)}>Contact</li> </Link>
                </ul>
            </div>
        </div>
        </>
    )
}