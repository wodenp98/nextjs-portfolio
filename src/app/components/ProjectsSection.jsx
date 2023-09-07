"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// tags = language
const projectsData = [
  {
    id: 1,
    title: "Pierre Photographie",
    description: "Site de e-commerce Fullstack pour un photographe",
    image: "/images/projects/pierrevphotographie.png",
    tag: [
      "Tout",
      "Nextjs",
      "Firebase",
      "Stripe",
      "Tailwind",
      "Typescript",
      "Redux Toolkit",
    ],
    gitUrl: "/cannot-access",
    previewUrl: "/videos/video-pierrephoto.mp4",
  },
  {
    id: 2,
    title: "Pixabay",
    description: "Algorithme de recherche avec une API Pixabay",
    image: "/images/projects/pixabay.png",
    tag: ["Tout", "Nextjs", "Api", "Tailwind"],
    gitUrl: "https://github.com/wodenp98/test-technique-mds",
    previewUrl: "https://test-technique-mds.vercel.app/",
  },
  {
    id: 3,
    title: "Groupomania",
    description: "Réseau Social d'entreprise (MERN Stack)",
    image: "/images/projects/groupomania.jpg",
    tag: ["Tout", "MongoDB", "React", "Nodejs", "Express", "Sass"],
    gitUrl: "https://github.com/wodenp98/PaulVigneron_7_26012022",
    previewUrl: "/videos/video-groupomania.mp4",
  },
  {
    id: 4,
    title: "Marvel Dashboard",
    description: "Project en cours",
    image: "/images/projects/marveldashboard.png",
    tag: ["Tout", "Nextjs", "Prisma", "Tailwind", "Typescript"],
    gitUrl: "https://github.com/wodenp98/marvel-project",
    previewUrl: "/videos/video-marvel.mp4",
  },
  {
    id: 5,
    title: "Clone Netflix",
    description: "Réalisation d'un clone de Netflix",
    image: "/images/projects/netflixclone.png",
    tag: ["Tout", "React", "Tailwind"],
    gitUrl: "https://github.com/wodenp98/netflix-clone",
    previewUrl: "https://netflix-clone-psi-jet.vercel.app/",
  },
  {
    id: 6,
    title: "Hrnet",
    description: "Convertir une librairie JQuery en React",
    image: "/images/projects/tableemployee.png",
    tag: ["Tout", "React", "Redux Toolkit", "Firebase", "Styled Components"],
    gitUrl: "https://github.com/wodenp98/PaulVigneron_14_12042023",
    previewUrl: "/videos/video-hrnet.mp4",
  },
  {
    id: 7,
    title: "Petit Plat",
    description: "Algorithme de recherche en vanilla javascript",
    image: "/images/projects/petitplat.png",
    tag: ["Tout", "Javascript", "Sass"],
    gitUrl: "https://github.com/wodenp98/PaulVigneron_7_01112022",
    previewUrl: "https://paul-vigneron-7-01112022.vercel.app/",
  },
  {
    id: 8,
    title: "Dashboard Sport",
    description: "Dashboard en utilisant Recharts",
    image: "/images/projects/dashboardrecharts.png",
    tag: ["Tout", "Recharts", "React", "Styled Components"],
    gitUrl: "https://github.com/wodenp98/PaulVigneron_12_14022023",
    previewUrl: "/videos/video-dashboard.mp4",
  },
  {
    id: 9,
    title: "Bank Api",
    description:
      "Intéraction avec un API MongoDB afin de gérer les utilisateurs",
    image: "/images/projects/bankApi.png",
    tag: ["Tout", "React", "Redux Toolkit, MongoDB"],
    gitUrl: "https://github.com/wodenp98/PaulVigneron_13_20032023",
    previewUrl: "/videos/video-bankApi.mp4",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tout");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Projets
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tout"
          isSelected={tag === "Tout"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nodejs"
          isSelected={tag === "Nodejs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tailwind"
          isSelected={tag === "Tailwind"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
