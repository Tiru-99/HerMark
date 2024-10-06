"use client";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const images = [
  { src: "/publishing.jpg", alt: "Book Marketing and Publicity"  },
  { src: "/collegemarketing2.jpg", alt: "College Marketing" },
  { src: "/presscoverage.jpg", alt: "Press Coverage" },
  { src: "/retailmarketing.jpg", alt: "Retail Marketing" },
  { src: "/bloggeroutreach.jpg", alt: "Blogger Outreach"},
  { src: "/booktours.jpg", alt: "Book Tours"  },
  { src: "/amazon3.webp", alt: "Amazon Marketing Services (AMS) "  },
  { src: "/booklaunch.jpg", alt: "Book Launch"},
  { src: "/influencerengagement.jpg", alt: "Influencer Engagement" },
  { src: "/bookclub.jpg", alt: "Book Club Promotions" },
  { src: "/cinemaunbound.jpg", alt: "Cinema Unbound" },
  { src: "/authorbranding.jpg", alt: "Author Branding" },

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
        <div className="flex flex-row flex-wrap mx-2 mt-8 sm:mt-16 lg:mt-32">
          
          {/* First Column - 2 images */}
          <div className="w-full sm:w-1/4 px-2 mb-4">
            <Parallax translateY={[-10, 30]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="space-y-4">
                {images.slice(0, 2).map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute text-3xl bottom-10 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                      <span>{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>

          {/* Second Column - 4 images */}
          <div className="w-full sm:w-1/4 px-2 mb-4">
            <Parallax translateY={[-8, 24]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="space-y-4">
                {images.slice(2, 6).map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                      <span>{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>

          {/* Third Column - 4 images */}
          <div className="w-full sm:w-1/4 px-2 mb-4">
            <Parallax translateY={[-12, 40]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="space-y-4">
                {images.slice(6, 8).map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute text-3xl bottom-10 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                      <span>{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>

          {/* Fourth Column - 2 images */}
          <div className="w-full sm:w-1/4 px-2 mb-4">
            <Parallax translateY={[-9, 20]} className="parallax-container" disabled={isParallaxDisabled}>
              <div className="space-y-4">
                {images.slice(8, 12).map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute text-3xl bottom-5 left-3 w-full h-12 bg-opacity-50 text-white flex opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                      <span>{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
