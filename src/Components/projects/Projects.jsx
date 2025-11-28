import React from "react";
import CardComponent from "./CardComponent";
import FadeIn from "../FadeIn";

const Projects = () => {
  const projects = [
    {
      imageUrl: "https://slideuplift.com/wp-content/uploads/2020/06/project-portfolio-management.jpg",
      githubLink: "https://lingeshr2007-art.github.io/portfolio/",
      liveLink: "https://empower-connect.vercel.app/",
      projectName: "HTML PORTFOLIO",
      projectDesc: "The Personal Portfolio Website is a simple, responsive web application built using HTML, CSS, JavaScript, and React to showcase an individual’s skills, projects, and achievements. It serves as an online resume, providing a clean and user-friendly interface for visitors to learn about the user’s profile. The website is designed to work smoothly on mobile and desktop devices.",
    },
    {
      imageUrl: "https://powerslides.com/wp-content/uploads/2022/04/Project-Portfolio-Template-6.png",
      githubLink: "https://lingeshr2007-art.github.io/react-portfolio/",
      liveLink: "https://blogging-website-rbdk.onrender.com/",
      projectName: "REACT PORTFOLIO",
      projectDesc: "A modern and responsive personal portfolio website built with React.js to showcase my skills, projects, and contact information. It features clean UI, fast performance, and reusable components for a professional online presence.",
    },
    {
      imageUrl: "https://th.bing.com/th/id/OIP.-Pc55P47lUl7hhhj7Tzv1AHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      githubLink: "https://github.com/KARANSINGH34951/ACONEWS",
      liveLink: "https://aconews-585dd.web.app/",
      projectName: "ACO NEWS",
      projectDesc: "ACONEWS is a dynamic news application that provides users with up-to-date news articles, search functionality, and a sleek user interface. The application is built with React, Tailwind CSS, and Node.js, and is designed to offer a seamless and engaging news experience.",
    },
  ];

  return (
    <section className="py-12 bg-transparent" id="projects">
      <FadeIn>
        <h2 className="text-4xl text-white font-extrabold text-center mb-12 underline decoration-blue-500">
          Projects
        </h2>
      </FadeIn>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.2} direction="up">
            <CardComponent
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              projectName={project.projectName}
              projectDesc={project.projectDesc}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
