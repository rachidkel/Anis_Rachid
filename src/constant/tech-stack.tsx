// src/constant/tech-stack.tsx

import { ReactNode } from "react";

import afterEffectsIcon from "@/assets/images/icons/after-effects.svg";
import premiereProIcon from "@/assets/images/icons/premiere-pro.svg";
import davinciResolveIcon from "@/assets/images/icons/davinci-resolve.svg";
import capcutIcon from "@/assets/images/icons/capcut.svg";


export interface TechStack {
  name: string;
  icon: ReactNode;
  color: string;
  siteUrl: string;
}

export const TECH_STACK = {
  afterEffects: {
    name: "After Effects",
    icon: (
      <img
        src={afterEffectsIcon.src}
        alt="Adobe After Effects"
        width={48}
        height={48}
      />
    ),
    color: "text-blue-500",
    siteUrl: "https://www.adobe.com/products/aftereffects.html",
  },

  premierePro: {
    name: "Premiere Pro",
    icon: (
      <img
        src={premiereProIcon.src}
        alt="Adobe Premiere Pro"
        width={48}
        height={48}
      />
    ),
    color: "text-purple-500",
    siteUrl: "https://www.adobe.com/products/premiere.html",
  },

  davinciResolve: {
    name: "DaVinci Resolve",
    icon: (
      <img
        src={davinciResolveIcon.src}
        alt="DaVinci Resolve"
        width={48}
        height={48}
      />
    ),
    color: "text-red-500",
    siteUrl: "https://www.blackmagicdesign.com/products/davinciresolve",
  },

  capcut: {
    name: "CapCut",
    icon: (
      <img
        src={capcutIcon.src}
        alt="CapCut"
        width={48}
        height={48}
      />
    ),
    color: "text-gray-400",
    siteUrl: "https://www.capcut.com/",
  },


  
};