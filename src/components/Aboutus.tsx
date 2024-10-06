import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="container mx-auto py-16 md:mt-96">
      <div className="flex flex-col md:flex-row items-center gap-8 font-serif bg-yellow-50 md:pl-12 p-4 md:py-0 md:px-0">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold pb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed pb-6 max-w-xl">
            The stories of women are essential, not just as personal reflections, but as powerful forces that shape society and drive progress. At HerMark Press, we are committed to bringing these stories to the forefront. As a women-only publishing and marketing platform, we offer a bold space where female authors can amplify their voices and make their mark. Our mission is to break barriers, elevate diverse perspectives, and ensure that women&#39;s narratives are not only heard but respected and valued. With a focus on excellence and impact, HerMark Press stands as a driving force in transforming women&#39;s stories into lasting contributions to literature and culture.

          </p>
        
        </div>

        {/* Right Side - Image Section */}
        <div className="md:w-1/2 ">
          <Image
            src="/woman3.jpg" // replace with the actual image path
            alt="Person Writing"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
