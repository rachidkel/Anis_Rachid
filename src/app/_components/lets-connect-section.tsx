"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";
import { ASSETS } from "@/constant/assets";

const AnimatedImage = motion(Image);

// 5 fixed positions
const SLOTS = [
  {
    key: "topLeft" as const,
    className:
      "hidden lg:block absolute hover:cursor-pointer top-14 left-14 xl:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
    width: 168,
    height: 168,
    initial: { y: 50, opacity: 0 },
    delay: 0.4,
  },
  {
    key: "topRight" as const,
    className:
      "hidden lg:block absolute hover:cursor-pointer top-14 right-14 xl:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
    width: 168,
    height: 168,
    initial: { y: 50, opacity: 0 },
    delay: 0.6,
  },
  {
    key: "bottomRight" as const,
    className:
      "hidden lg:block absolute hover:cursor-pointer bottom-14 right-36 xl:right-44 md:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
    width: 168,
    height: 168,
    initial: { y: -50, opacity: 0 },
    delay: 1,
  },
  {
    key: "bottomLeft" as const,
    className:
      "hidden lg:block absolute hover:cursor-pointer bottom-14 left-36 xl:left-44 md:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
    width: 168,
    height: 168,
    initial: { y: -50, opacity: 0 },
    delay: 0.8,
  },
  {
    key: "bottomCenter" as const,
    className:
      "hidden lg:block absolute hover:cursor-pointer -bottom-64 left-1/2 -translate-x-1/2 w-10 h-10 md:w-[310px] md:h-[310px] z-10",
    width: 310,
    height: 310,
    initial: { y: 100, opacity: 0 },
    delay: 0,
  },
];

export default function LetsConnectSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleClick = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.open(href, "_self");
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      ref={ref}
      className="dk-safe-x-padding dk-section-distance overflow-y-hidden lg:h-[1100px]"
      aria-label="Let's Connect Section"
    >
      <SectionHeader
        title="Let's Connect"
        description="Do you have any questions or a project in mind? Let's connect! I am here to help and excited to hear from you. You can also take a look at my work."
        inViewport={inView}
        className="text-center"
        animate
      />
      <div className="h-full mt-4">
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute hidden lg:block animate-ping -z-2">
            <MotionWrapper
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="rounded-full dk-gradient-bg h-96 w-96"
            />
          </div>
          <AnimatedImage
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="size-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full bg-gray lg:bg-transparent"
            src={ASSETS.home.letsConnect.avatarBigSmile}
            alt=""
            width={530}
            height={530}
            priority
          />
          {/* Desktop: fixed positions, hidden if not configured */}
          {SLOTS.map((slot) => {
            const item = (CONFIG.letsConnect as LetsConnectConfig)[slot.key];
            if (!item) return null;
            return (
              <AnimatedImage
                key={slot.key}
                initial={slot.initial}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: slot.delay }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className={slot.className}
                src={item.icon}
                alt={item.label}
                width={slot.width}
                height={slot.height}
                tabIndex={0}
                role="link"
                aria-label={item.label}
                onClick={() => handleClick(item.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(item.href);
                  }
                }}
              />
            );
          })}
          {/* Mobile: only visible slots */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-4 lg:hidden">
            {SLOTS.map((slot, index) => {
              const item = (CONFIG.letsConnect as LetsConnectConfig)[slot.key];
              if (!item) return null;
              return (
                <AnimatedImage
                  initial={{ y: 0, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  key={`mobile-${slot.key}`}
                  className="hover:cursor-pointer size-[100px]"
                  src={item.icon}
                  alt={item.label}
                  width={100}
                  height={100}
                  tabIndex={0}
                  role="link"
                  aria-label={item.label}
                  onClick={() => handleClick(item.href)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleClick(item.href);
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
