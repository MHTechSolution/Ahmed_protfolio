import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed | Photographer Portfolio",
  description:
    "Photographer from Isb, Wah cantt specializing in STREET GAMEZ, PORTRAIT, and CARS. Dm to book a shoot.",
  keywords: [
    "Graphic Designer",
    "Video Editor",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe XD",
  ],
  robots: "index, follow",
  openGraph: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Ahmed | Photographer Portfolio",
    description:
      "Photographer from Isb, Wah cantt specializing in STREET GAMEZ, PORTRAIT, and CARS. Dm to book a shoot.",
  },
  twitter: {
    images:
      "https://i.ibb.co/3PJzhXw/B58-A4-A9-C-C3-BE-4-E18-AEDD-8639-B169-A57-D.png",
    title: "Ahmed | Photographer Portfolio",
    description:
      "Photographer from Isb, Wah cantt specializing in STREET GAMEZ, PORTRAIT, and CARS. Dm to book a shoot.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* Unified Background for All Sections */}
      <div className="relative w-full bg-gray-50 dark:bg-black transition-colors duration-300">

        {/* Sections Container */}
        <div className="relative z-10">
          <About />
          <Projects />
          <Services />
          <Contact />
        </div>
      </div>
      {/* Add more sections below as needed */}
    </>
  );
}
