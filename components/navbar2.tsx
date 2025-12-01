'use client';

import { FlaskConical } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
        <div className="flex justify-center items-center mb-20  sticky -top-7 z-50 mx-8">
            <div className="flex justify-between items-center max-w-[1500px] w-full py-5 md:px-10 px-5 bg-[rgba(255,255,255,.05)] mt-10 rounded-full">
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
                    [&>li]:hover:text-primary [&>li]:transition-all
                
                `}>
                    <li onClick={() => setIsMenuOpen(false)}>Home</li>
                    <li onClick={() => setIsMenuOpen(false)}>About Us</li>
                    <li onClick={() => setIsMenuOpen(false)}>Services</li>
                    <li onClick={() => setIsMenuOpen(false)}>Blog</li>
                    <li onClick={() => setIsMenuOpen(false)}>Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}