import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import FadeIn from "../FadeIn";

function Skills() {
  const skills = [
    { name: "JavaScript", image: "https://th.bing.com/th/id/OIP.1Se7tgAnRox2K9H5L77QOAHaEx?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "React", image: "https://th.bing.com/th/id/OIP.IGAgoFLRQ54R3gtLiW5x2AHaE7?w=301&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Node.js", image: "https://th.bing.com/th/id/OIP.3EI-StQpEeStn9uj2Q3GXAHaFe?w=151&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "MongoDB", image: "https://th.bing.com/th/id/OIP.KHadKZaG_Sfzxn4IL8HscAHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Tailwind CSS", image: "https://th.bing.com/th/id/OIP.22tPt9bi1FRyjOYQI8irPQHaD4?w=346&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "GitHub", image: "https://th.bing.com/th?q=GitHub+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Firebase", image: "https://th.bing.com/th/id/OIP.Y1CtTk-L-6TG8oY495BDqAHaDt?w=320&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Python", image: "https://th.bing.com/th/id/OIP.VB4K3v9jPzQw5A1G0RIrggHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
  ];

  return (
    <div className="bg-transparent p-16 flex flex-col items-center">
      <FadeIn>
        <h2 className="text-5xl text-white font-extrabold text-center mb-14 underline decoration-pink-500">
          Skills
        </h2>
      </FadeIn>
      <FadeIn delay={0.2} className="w-full max-w-5xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-gray-800 rounded-2xl shadow-lg p-8 h-64 flex flex-col items-center justify-center transform transition-all duration-300 border-4 border-gray-700 hover:border-pink-500 hover:scale-105">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-24 h-24 object-contain mb-6 rounded-full border-4 border-blue-500 group-hover:border-pink-500 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-white text-xl font-semibold text-center group-hover:text-pink-500 transition-all">
                  {skill.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeIn>
    </div>
  );
}

export default Skills;
