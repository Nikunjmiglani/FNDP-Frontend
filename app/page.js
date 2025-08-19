
"use client"
import { useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi"; 
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <main className="bg-[#0B0E17] text-white min-h-screen">
      <nav className="fixed flex justify-between items-center w-full top-0 px-5 py-4 z-70 bg-[#0B0E17]/1 backdrop-blur-none">
        {/* Left: Logo/Title */}
        <div className="flex items-center gap-3">
          <span className="font-semibold font-mono text-base sm:text-lg tracking-wide">
            FNDP - Powered by AI
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-15 mr-25 text-sm">
          <Link href="/developers" >
            <li
              onClick={handleLinkClick}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-400"
            >
              Developers
            </li>
          </Link>
          <Link href="/about" >
            <li
              onClick={handleLinkClick}
              className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-400"
            >
              About FNDP
            </li>
          </Link>
         <Link  href="https://www.nikunj.space/" > <li
           
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-400"
          >
            Other Projects
          </li></Link>
          <li
            href="https://buymeacoffee.com/nikunjmiglani"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="hover:scale-110 transition-transform duration-200 cursor-pointer hover:text-blue-400"
          >
            Support Us
          </li>
        </ul>

        {/* Right: GitHub */}
        <Link
          href="https://github.com/Nikunjmiglani/FNDP---Fake-new-detector-project"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <li className="hidden sm:flex items-center gap-4 ml-4">
            <FaStar className="hover:text-yellow-400 cursor-pointer animate-bounce text-xl" />
            <FaArrowRight />
            <FaGithub className="text-2xl hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </li>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex items-center text-white focus:outline-none z-60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden fixed top-16 left-0 right-0 bg-[#0B0E17]/95 backdrop-blur-md z-40 flex flex-col items-center py-6 space-y-6 text-lg font-semibold">
          <Link href="/developers">
            <li
              onClick={handleLinkClick}
              className="hover:text-blue-400 list-none transition-colors duration-200"
            >
              Developers
            </li>
          </Link>
          <Link href="/about" >
            <li
              onClick={handleLinkClick}
              className="hover:text-blue-400  list-none transition-colors duration-200"
            >
              About FNDP
            </li>
          </Link>
         <Link  href="https://www.nikunj.space/" >  <li
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="hover:text-blue-400  list-none transition-colors duration-200"
          >
            Other Projects
          </li></Link>
         <Link href="https://buymeacoffee.com/nikunjmiglani" > <li
            
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="hover:text-blue-400   list-none transition-colors duration-200"
          >
            Support Us
          </li></Link>
          <Link
            href="https://github.com/Nikunjmiglani/FNDP---Fake-new-detector-project" target="/"
         
          >
            <li
              onClick={handleLinkClick}
             
              rel="noopener noreferrer"
              className="flex items-center gap-3  list-none hover:text-yellow-300 transition-colors duration-200"
            >
              <FaStar className="animate-bounce" />
              <FaArrowRight />
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </li>
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/Fake_bg_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 sm:bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 max-w-4xl mx-auto">
          <h1 className="text-white font-mono text-3xl sm:text-5xl font-bold leading-tight">
            AI-Powered Fake News Detector
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl text-sm sm:text-lg">
            Detect misinformation instantly with our AI-powered detection engine — built to
            identify fake headlines, articles, and news reports with high accuracy.
          </p>
          <Link
            href="https://nikunjmiglani-fndp---fake-new-detector-project-app-gjes00.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-100 text-black px-5 mt-6 py-2 rounded-full cursor-pointer font-medium hover:bg-gray-200 hover:scale-110 transition-transform duration-200 animate-pulse text-sm sm:text-base">
              Check Now!
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
