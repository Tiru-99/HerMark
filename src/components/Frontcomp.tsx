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

      <div className="absolute bottom-[20%] left-4 md:left-20 w-full">
        <div className="text-4xl md:text-7xl font-thin text-white text-left md:text-left font-serif">
          Making <span className={`${isHovered ? 'text-yellow-400' : 'text-white'} transition-all duration-300 ease-in-out`}>Her</span> Mark in <br />Literature
        </div>

        <Link to='getstarted' smooth ={true} duration={500}><button
          className="text-white border p-3 mt-6 md:mt-12 border-white text-lg md:text-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)} // Set hovered state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hovered state to false on mouse leave
        >
          Get started with publishing
        </button></Link>
      </div>
    </div>
  );
}
