import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px]">
        <li className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
          <Link
            href="https://linktr.ee/ahmekhitran"
            target="_blank"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
        <li className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
          <Link
            href="https://linktr.ee/ahmekhitran"
            target="_blank"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
        <li className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
          <Link href="https://linktr.ee/ahmekhitran" target="_blank">
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
