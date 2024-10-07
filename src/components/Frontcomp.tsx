"use client";
import { useState } from 'react';
import { Link } from 'react-scroll';
import Image from "next/image";

export default function Frontcomp() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src="/woman2.jpg"
        alt="woman"
        layout="fill"
        objectFit="cover"
        className={`${isHovered ? 'grayscale-0' : 'grayscale'} transition-all duration-300 ease-in-out`}
      />
      
      {/* Added logo */}
      <div className="absolute top-5 left-4 md:left-20 z-10">
        <Image
          src="/logo-white3.png"
          alt="Logo"
          width={260}
          height={90}
          className="object-contain"
        />
      </div>
      
      <div className="absolute bottom-[20%] left-4 md:left-20 w-full">
        <div className="text-4xl md:text-7xl font-thin text-white text-left md:text-left font-serif">
          Making <span className={`${isHovered ? 'text-pink-400' : 'text-white'} transition-all duration-300 ease-in-out`}>Her</span> Mark in <br />Literature
        </div>
        
        <Link to='getstarted' href='#getStarted' smooth={true} duration={500}>
          <button
            
            className="text-white border p-3 mt-6 md:mt-12 border-white text-lg md:text-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get started with publishing
          </button>
        </Link>
      </div>
    </div>
  );
}
