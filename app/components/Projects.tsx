"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/projects/project-iamge1.png",
    title: "STREET GAMEZ",
    description:
      "High energy, gritty street photography capturing the raw essence of the city.",
    category: "Street",
  },
  {
    id: 2,
    image: "/assets/projects/project-iamge2.png",
    title: "PORTRAIT SESSIONS",
    description:
      "Stunning and authentic portraits that tell a unique personal story.",
    category: "Portrait",
  },
  {
    id: 3,
    image: "/assets/projects/project-iamge3.png",
    title: "AUTOMOTIVE CARS",
    description:
      "Sleek and dynamic car photography highlighting speed, design, and power.",
    category: "Cars",
  },
  {
    id: 4,
    image: "/assets/projects/project-iamge4.png",
    title: "NIGHT CITY SCAPES",
    description:
      "Capturing the vibrant night life and neon lights of the urban environment.",
    category: "Street",
  },
  {
    id: 5,
    image: "/assets/projects/project-iamge5.png",
    title: "STUDIO PORTRAITS",
    description:
      "High-end studio photography with cinematic lighting and deep shadows.",
    category: "Portrait",
  },
  {
    id: 6,
    image: "/assets/projects/project-iamge6.png",
    title: "CAR MEETS & DRIFTS",
    description:
      "High speed action shots from car meets, capturing the adrenaline and passion of automotive culture.",
    category: "Cars",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* Main Container */}
      <div className="relative z-10 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)] max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white leading-tight mb-4">
            Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-2xl">
            A curated selection of creative work showcasing STREET GAMEZ, PORTRAIT, and CARS expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`#project-${project.id}`}
              onClick={(e) => {
                e.preventDefault();
                // Fake link - can be replaced with actual project page
                console.log(`Opening project: ${project.title}`);
              }}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative block cursor-pointer"
            >
              {/* Project Card */}
              <div className="relative h-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl overflow-hidden hover:border-black/30 dark:hover:border-white/40 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/40 dark:from-black/80 dark:via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/10 dark:bg-white/20 backdrop-blur-sm border border-black/20 dark:border-white/30 text-black dark:text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/10 dark:bg-white/20 backdrop-blur-sm border border-black/20 dark:border-white/30 rounded-full p-2">
                      <ExternalLink className="w-4 h-4 text-black dark:text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-black/70 dark:text-white/70 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
