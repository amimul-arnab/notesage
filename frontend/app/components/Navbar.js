// Navbar.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import HomeIcon from '../assets/home.png';
import NotesIcon from '../assets/notes.png';
import FlashcardIcon from '../assets/flashcard.png';
import TestIcon from '../assets/exam.png';
import SettingsIcon from '../assets/profile.png';
import LogoLight from '../assets/logo/NoteSageLogo_Light.png';

export default function Navbar({ activePage, onToggle, isOpen }) {
  const toggleNavbar = () => {
    const newState = !isOpen;
    onToggle(newState);
  };

  return (
    <div
      className={`h-screen bg-gradient-to-b from-white to-[#61cc03] flex flex-col ${
        isOpen ? 'w-64' : 'w-20'
      } fixed top-0 left-0 transition-width duration-300 ease-in-out z-50`}
    >
      <div className="flex flex-col items-center p-4 bg-white">
        <Image
          src={LogoLight}
          alt="NoteSage Logo"
          width={isOpen ? 160 : 60}
          height={isOpen ? 60 : 60}
          className="object-contain mb-1"
        />
      </div>

      <nav className="flex-1 mt-6 flex flex-col space-y-4 bg-[#61cc03]">
        <button
          className="bg-[#61cc03] p-3 mt-2 mb-6 self-center rounded focus:outline-none"
          onClick={toggleNavbar}
        >
          <div className="w-8 h-0.5 bg-white mb-1"></div>
          <div className="w-8 h-0.5 bg-white mb-1"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </button>

        <Link href="/main" className={`flex items-center px-6 py-3 text-white ${activePage === 'home' && 'bg-[#a1e194]'}`}>
          <Image src={HomeIcon} alt="Home" width={30} height={30} className="invert" />
          {isOpen && <span className="ml-4 text-lg font-bold">Home</span>}
        </Link>

        <Link href="/notes" className={`flex items-center px-6 py-3 text-white ${activePage === 'notes' && 'bg-[#a1e194]'}`}>
          <Image src={NotesIcon} alt="Notes" width={30} height={30} className="invert" />
          {isOpen && <span className="ml-4 text-lg font-bold">Notes</span>}
        </Link>

        <Link href="/flashcards" className={`flex items-center px-6 py-3 text-white ${activePage === 'flashcards' && 'bg-[#a1e194]'}`}>
          <Image src={FlashcardIcon} alt="Flashcards" width={30} height={30} className="invert" />
          {isOpen && <span className="ml-4 text-lg font-bold">Flashcards</span>}
        </Link>

        <Link href="/test" className={`flex items-center px-6 py-3 text-white ${activePage === 'test' && 'bg-[#a1e194]'}`}>
          <Image src={TestIcon} alt="Test" width={30} height={30} className="invert" />
          {isOpen && <span className="ml-4 text-lg font-bold">Test</span>}
        </Link>

        <Link href="/settings" className={`flex items-center px-6 py-3 text-white ${activePage === 'settings' && 'bg-[#a1e194]'}`}>
          <Image src={SettingsIcon} alt="Settings" width={30} height={30} className="invert" />
          {isOpen && <span className="ml-4 text-lg font-bold">Settings</span>}
        </Link>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-64 {
            width: 16rem;
          }
          .w-20 {
            width: 5rem;
          }
          .text-lg {
            font-size: 0.875rem;
          }
        }
        @media (max-width: 480px) {
          .w-64 {
            width: 100%;
          }
          .w-20 {
            width: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
