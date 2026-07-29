"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Send } from "lucide-react";
import Button from "./Button";
import { EMAIL } from "../layout";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
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
            Contact
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-3xl mx-auto">
            Let's discuss your next project and bring your vision to life
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6 md:space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 md:mb-8">
                Get In Touch
              </h3>

              {/* Email */}
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 mb-4 md:mb-6 group"
              >
                <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-xl p-3 md:p-4 group-hover:bg-black/20 dark:group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm md:text-base text-black/60 dark:text-white/60 mb-1 md:mb-2 font-medium">
                    Email
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                    Dm to book
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-black/5 dark:bg-white/5 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/20 rounded-xl p-3 md:p-4 group-hover:bg-black/20 dark:group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm md:text-base text-black/60 dark:text-white/60 mb-1 md:mb-2 font-medium">
                    Location
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black dark:text-white">
                    Isb, Wah cantt
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <div className="mt-6 md:mt-8">
                <Button
                  variant="filled"
                  size="md"
                  icon={<Send className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://linktr.ee/ahmekhitran', '_blank')}
                >
                  Book a Shoot
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425291.6882205565!2d72.8220585640237!3d33.616052329598285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714578508493!5m2!1sen!2s"
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-black/10 dark:bg-white/20 rounded-full p-2 md:p-3">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm md:text-base mb-1">
                        Current Location
                      </p>
                      <p className="text-black dark:text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                        Isb, Wah cantt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
