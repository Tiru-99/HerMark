"use client";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const images = [
  { src: "/publishing.jpg", alt: "Image 1" },
  { src: "/collegemarketing.jpg", alt: "Image 2" },
  { src: "/bookstorelaunches.jpg", alt: "Image 3" },
  { src: "/podcasts.jpg", alt: "Image 4" },
  { src: "/amazonrankings.jpg", alt: "Image 5" },
  { src: "/bookstoresigning.jpg", alt: "Image 6" },
  { src: "/newspr.jpg", alt: "Image 7" },
];

export default function Masonry() {
  const [isParallaxDisabled, setIsParallaxDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsParallaxDisabled(window.innerWidth < 640);
    };

    // Check width on mount
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="container mx-auto px-4 py-8 scale-75 lg:scale-90 md:scale-90 sm:scale-100">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 lg:mb-8 font-serif">
          Our Services
        </h2>
        <div className="flex flex-col-1 sm:flex-row-1 flex-wrap mx-2 mt-8 sm:mt-16 lg:mt-32">
          {/* First column */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <Parallax translateY={[-10, 30]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="flex flex-col space-y-4 relative group">
                <div className="relative">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={400}
                    height={300}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                    <span>Book Publishing</span>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    width={400}
                    height={500}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                    <span>Podcasts</span>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          {/* Second column (single image, full height) */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 flex">
            <Parallax translateY={[-8, 32]} className="parallax-container w-full h-full" disabled={isParallaxDisabled}>
              <div className="w-full h-full flex items-stretch relative group">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                  <span>College Marketing</span>
                </div>
              </div>
            </Parallax>
          </div>

          {/* Third column */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <Parallax translateY={[-12, 40]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="flex flex-col space-y-4 relative group">
                <div className="relative">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    width={400}
                    height={400}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                    <span>Bookstore Launches</span>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src={images[5].src}
                    alt={images[5].alt}
                    width={400}
                    height={450}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                    <span>Bookstore Signing</span>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          {/* Fourth column */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <Parallax translateY={[-9, 20]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="flex flex-col space-y-4">
                <div className="relative group">
                <Image
                  src={images[4].src}
                  alt={images[4].alt}
                  width={400}
                  height={350}
                  className="w-full rounded-lg"
                />
                <div className="bg-black inset-0 bg-opacity-30 absolute"> </div>
                  <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                  <span>Amazon Rankings</span>
                </div>
                </div>
               
                <div className="relative group">
                <Image
                  src={images[6].src}
                  alt={images[6].alt}
                  width={400}
                  height={380}
                  className="w-full rounded-lg"
                />
                
                <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                  <span>Newspaper PR </span>
                </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
