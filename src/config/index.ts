import { ASSETS } from "@/constant/assets";
import { TECH_STACK } from "../constant/tech-stack";

/**
 * Configuration
 *
 * Modify the information below to customize your portfolio
 */

export const CONFIG = {
  name: {
    first: "Anis Rachid",
    last: "Kellil",
  },
  email: "aniskel96@gmail.com",
  role: "video editor & Motion designer",
  location: "Algeria",
  socials: {
    github: "https://github.com/rachidkel",
    linkedin: "https://www.linkedin.com/in/kellil-anis-rachid",
    instagram: "https://www.instagram.com/kl._anis/",
    dribbble: "https://wa.me/+213557682232",
  },
  // Let's Connect: 5 fixed positions. Use ASSETS for icon, comment out or set null to hide.
  letsConnect: {
    topLeft: {
      icon: ASSETS.home.letsConnect.linkedin,
      href: "https://www.linkedin.com/in/kellil-anis-rachid",
      label: "LinkedIn",
    },
    topRight: {
      icon: ASSETS.home.letsConnect.instagram,
      href: "https://www.instagram.com/kl._anis",
      label: "Instagram",
    },
    bottomRight: {
      icon: ASSETS.home.letsConnect.github,
      href: "https://github.com/rachidkel",
      label: "GitHub",
    },
    bottomLeft: {
      icon: ASSETS.home.letsConnect.whatssap,
      href: "https://wa.me/+213557682232",
      label: "WhatsApp",
    },
    bottomCenter: {
      icon: ASSETS.home.letsConnect.gmail,
      href: "mailto:aniskel96@gmail.com",
      label: "Email",
    },
  },
  quotes: {
    text: "Behind every project is a story worth telling. This portfolio is a collection of those stories  edited with precision, crafted with passion.",
    author: "Anis Rachid Kellil",
  },
  techStacks: [
    ...Object.values(TECH_STACK),
    // you can add tech stack one by one if you don't want to use all registered tech stack
    // TECH_STACK.nextjs,
    // TECH_STACK.reactjs,
    // TECH_STACK.tailwindcss,
  ],
  resume: {
    fileName: "Sample.pdf",
    downloadUrl: "/files/sample.pdf",
  },
 // src/config/index.ts

projects: [
  {
    title: " Social media",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/2.7.png",
    videoFile: "/videos/filess/rabic ai platforme.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },
  // Add more videos...
    {
    title: "Socail Media ADS",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/1.3.png.png",
    videoFile: "/videos/filess/ads edit with sfx.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "socail media ads",
  },
    {
    title: "Podcast",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/2.3.pmg.png",
    videoFile: "/videos/filess/viral style .mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },
    {
    title: "Documentary with new style",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/2.5.png.png",
    videoFile: "/videos/filess/dahkoutsfx.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },
    {
    title: "Documentary",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/1.1.png",
    videoFile: "/videos/filess/final mr best reel.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },
    {
    title: "clean edit",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/2.4.png.png",
    videoFile: "/videos/filess/with sfx clean.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },
    {
    title: "clean edit",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/2.2.png.png",
    videoFile: "/videos/filess/revolution.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },  
    {
    title: "edit",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/1.5.png.png",
    videoFile: "/videos/filess/jdid.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  }, 
      {
    title: "BasketBall edit",
    summary: "A breathtaking travel documentary...",
    image: "/videos/thumbnails/1.6.png.png",
    videoFile: "/videos/filess/basket.mp4", // Add this line!
    techStack: [TECH_STACK.premierePro, TECH_STACK.davinciResolve],
    urls: {},
    category: "Documentary",
  },     
],
} satisfies Config;
