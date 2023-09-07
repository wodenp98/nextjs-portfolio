/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Je suis actuellement à la recherche de nouvelles opportunités, ma
          boîte de réception est toujours ouverte. Que vous ayez une question ou
          que vous souhaitiez simplement me saluer, je ferai de mon mieux pour
          vous répondre !
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/wodenp98">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/paul-vigneron98/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Me contacter</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Pour toutes questions ou demandes, n'hésitez pas à me contacter via le
          mail ci-dessous.
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href={`mailto:paulvigneron4698@gmail.com`}
            className="flex items-center"
            rel="noopener noreferrer"
          >
            <Mail />
            <p className="ml-2">paulvigneron4698@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
