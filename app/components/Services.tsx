"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowRight, Camera, Image as ImageIcon, Aperture, Film } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "STREET GAMEZ",
    description:
      "Capturing the vibrant and unpredictable nature of the streets. Raw, unedited moments that showcase the true pulse of the city.",
    image: "/assets/services/service-image1.png",
    icon: <Camera className="w-8 h-8" />,
    features: [
      "Urban Aesthetics",
      "Candid Moments",
      "Gritty Edits",
      "Cityscapes",
    ],
  },
  {
    id: 2,
    title: "PORTRAIT",
    description:
      "Professional portrait photography tailored to your personal brand or creative vision. Creating timeless memories.",
    image: "/assets/services/service-image2.png",
    icon: <ImageIcon className="w-8 h-8" />,
    features: [
      "Headshots",
      "Creative Portraits",
      "Outdoor Sessions",
      "Lighting Mastery",
    ],
  },
  {
    id: 3,
    title: "CARS",
    description:
      "High-octane automotive photography that highlights the curves, speed, and engineering of your favorite vehicles.",
    image: "/assets/services/service-image3.png",
    icon: <Aperture className="w-8 h-8" />,
    features: [
      "Action Shots",
      "Static Showcases",
      "Detail Angles",
      "Event Coverage",
    ],
  },
  {
    id: 4,
    title: "Event Coverage",
    description:
      "Comprehensive event photography ensuring you never miss a beat. From corporate gatherings to underground meets.",
    image: "/assets/services/service-image4.png",
    icon: <Film className="w-8 h-8" />,
    features: [
      "Full Coverage",
      "Highlight Reels",
      "Quick Turnaround",
      "High Resolution",
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="services"
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
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white leading-tight mb-4">
            Services
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-3xl mx-auto">
            Comprehensive creative services to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative h-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl overflow-hidden hover:border-black/30 dark:hover:border-white/40 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/40 dark:from-black/90 dark:via-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="bg-black/10 dark:bg-white/20 backdrop-blur-md border border-black/20 dark:border-white/30 rounded-xl p-4 group-hover:bg-black/20 dark:group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <div className="text-black dark:text-white">{service.icon}</div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 md:p-10">
                  <p className="text-base sm:text-lg md:text-xl text-black/80 dark:text-white/80 leading-relaxed mb-6 md:mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="bg-black/5 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-lg px-4 py-3 hover:bg-black/10 dark:hover:bg-white/15 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-black/90 dark:text-white/90 font-medium text-center">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
