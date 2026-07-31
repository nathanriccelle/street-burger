"use client";

import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import { MenuIcon } from 'lucide-react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  function alternarMenu() {
    setMenuOpen(!menuOpen);
  }
  
  return (
      <header className='border-b-4 border-preto relative'>
        <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
          <Link href="/">
            <img src="/icon/logo.svg" alt="Street Burger" className="w-28 h-auto" />
          </Link>

          <Button
            onClick={alternarMenu}
            className='md:hidden ml-auto cursor-pointer'
          >
            <MenuIcon color='#1A1A1A' size={24} strokeWidth={3}/>
          </Button>

          {/* MENU DO PC */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center">
              <ul className='flex items-center gap-6 text-preto font-title text-xl'>
                <li>
                  <Link
                    className='hover:underline underline-offset-8 decoration-2 decoration-preto transition-all duration-300' 
                    href="#menu">Menu</Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-8 decoration-2 decoration-preto transition-all duration-300'
                   href="#entrega">Entrega</Link>
                </li>
                <li>
                  <Link
                    className='hover:underline underline-offset-8 decoration-2 decoration-preto transition-all duration-300'
                   href="#sobre">Sobre</Link>
                </li>
              </ul>
            </nav>
            <Button className="hidden md:flex items-center">Peça agora</Button>
          </div>
        </div>

        {/* MENU MOBILE */}
            <nav className={`md:hidden absolute left-0 w-full bg-preto z-50 transition-all
             duration-700 ease-out ${ menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <ul className='flex flex-col items-center gap-6 py-6 text-creme font-title text-2xl'>
                <li><Link href="#menu" onClick={alternarMenu}>Menu</Link></li>
                <li><Link href="#entrega" onClick={alternarMenu}>Entrega</Link></li>
                <li><Link href="#sobre" onClick={alternarMenu}>Sobre</Link></li>
              </ul>
            </nav>
      </header>
  )
}