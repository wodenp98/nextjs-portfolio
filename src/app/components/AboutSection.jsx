/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2">
          <li>Typescript</li>
          <li>React</li>
          <li>NextJS</li>
          <li>Tailwind</li>
          <li>NodeJS</li>
          <li>Git</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>MongoDB</li>
          <li>Express</li>
          <li>API Rest</li>
          <li>MySQL</li>
          <li>Prisma</li>
          <li>Recharts</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bac +3 - Développeur concepteur logiciel</li>
        <li>Bac +2 - Développeur web</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Master the Coding Interview: Data Structures + Algorithms</li>
        <li>
          JavaScript Algorithms and Data Structures Certification FreeCodeCamp
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop.jpg"
          alt="desktop"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">A propos</h2>
          <p className="text-base lg:text-lg">
            Je suis un développeur front-end passionné par l'écosystème React.
            J'ai de l'expérience dans la conception d'application et/ou
            d'interface avec React, NextJS, Typescript et Tailwind, mais
            également sur d'autres technologiques. J'apprends vite et je cherche
            toujours à élargir mes connaissances et mes compétences. J'ai
            l'esprit d'équipe et je suis enthousiaste à l'idée de travailler
            avec d'autres personnes pour créer des applications étonnantes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
