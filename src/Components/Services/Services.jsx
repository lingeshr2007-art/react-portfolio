import React from 'react';
import { FaServer, FaDesktop, FaCode, FaEdit, FaPen, FaEnvelope } from 'react-icons/fa';
import Card from './Card'; // Import reusable Card component
import FadeIn from '../FadeIn';

const Services = () => {
  return (
    <div className="p-8 bg-transparent">
      <FadeIn>
        <h2 className="text-4xl text-white font-extrabold text-center mb-12 underline decoration-blue-500">
          Our Services
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FadeIn delay={0.2} direction="up">
          <Card
            title="Backend Development"
            description="We build robust server-side applications with secure APIs and databases."
            icon={<FaServer className="text-5xl text-blue-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <Card
            title="Frontend Development"
            description="We create visually stunning and interactive front-end experiences."
            icon={<FaDesktop className="text-5xl text-green-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <Card
            title="Full Stack Development"
            description="We handle both front-end and back-end development for your projects."
            icon={<FaCode className="text-5xl text-yellow-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <Card
            title="Editing"
            description="Our professional editing services ensure content is polished and ready for publication."
            icon={<FaEdit className="text-5xl text-purple-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>

        <FadeIn delay={1.0} direction="up">
          <Card
            title="Content Writing"
            description="We provide engaging and SEO-optimized content for websites and blogs."
            icon={<FaPen className="text-5xl text-red-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>

        <FadeIn delay={1.2} direction="up">
          <Card
            title="Email Marketing"
            description="We create effective email campaigns to boost engagement and drive sales."
            icon={<FaEnvelope className="text-5xl text-orange-500 group-hover:text-white transition duration-300" />}
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Services;


