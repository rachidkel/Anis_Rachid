"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdPlay, IoMdClose } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import MotionWrapper from "@/components/motion-wrapper";
import SectionHeader from "@/components/section-header";
import { CONFIG } from "@/config";
import { ASSETS } from "@/constant/assets";

const tabs = [
  {
    name: "Videos",
    image: ASSETS.home.myLatestProject.suitcase,
    data: [...CONFIG.projects],
  },
  {
    name: "More",
    image: ASSETS.home.myLatestProject.rocket,
    data: [],
    // 👇 CHANGE THIS LINK TO YOUR CHANNEL / PORTFOLIO / INSTAGRAM
    externalLink: "https://drive.google.com/drive/folders/1Zp0NpQ_CrxFjkDjJXa4afnMfL0g1Khu1?usp=sharing",
  },
];

const MyLatestProjectSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab, 10) < tabs.length - 1) {
      setActiveTab(parseInt(tab, 10));
    }
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section ref={ref} className="dk-safe-x-padding dk-section-distance">
      <SectionHeader
        title="My Latest Videos"
        description="Take a look at some of my recent video editing work, motion graphics, and creative projects."
        inViewport={inView}
        className="text-center"
        animate
      />
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          {/* tabs */}
          <div className="flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <MotionWrapper
                as="button"
                key={index.toString()}
                className={`relative ${
                  activeTab === index ? "dk-gradient-bg" : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  // 👇 UPDATED: Open external link for "More" tab
                  if (index === tabs.length - 1) {
                    if (tab.externalLink) {
                      window.open(tab.externalLink, "_blank");
                    }
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={tab.image}
                  alt={`${tab.name} tab icon`}
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* content */}
          <div className="overflow-hidden flex-1">
            <div className="bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto">
              <div className="grid grid-flow-row grid-cols-12 gap-[26px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <MotionWrapper
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div>
                            <MotionWrapper
                              className="relative bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden cursor-pointer flex items-center justify-center"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                              onClick={() =>
                                setSelectedVideo({
                                  src: item.videoFile || item.urls?.demo || "",
                                  title: item.title,
                                })
                              }
                            >
                              <div className="relative w-full h-full">
                                <Image
                                  className="object-contain"
                                  src={item.image}
                                  alt={`${item.title} video thumbnail`}
                                  fill
                                  sizes="(max-width: 1280px) 100vw, 441px"
                                  priority
                                />
                              </div>

                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                                <div className="p-5 bg-white/20 backdrop-blur-md rounded-full">
                                  <IoMdPlay className="text-4xl text-white" />
                                </div>
                              </div>
                            </MotionWrapper>
                          </div>

                          <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 opacity-0 backdrop-blur-0 gap-y-2 group-hover:opacity-100 group-hover:backdrop-blur-sm bg-gray/10 rounded-2xl pointer-events-none">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {item.videoFile && (
                                  <button
                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-linear-to-r hover:from-primary hover:to-secondary pointer-events-auto"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedVideo({
                                        src: item.videoFile || "",
                                        title: item.title,
                                      });
                                    }}
                                    title="Watch Video"
                                  >
                                    <IoMdPlay />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </MotionWrapper>
                      ),
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 p-2 text-white transition-colors hover:text-primary"
              title="Close"
            >
              <IoMdClose size={32} />
            </button>
            <div className="overflow-hidden bg-black rounded-2xl shadow-2xl">
              <video
                className="w-full aspect-video"
                poster={
                  CONFIG.projects.find((p) => p.title === selectedVideo.title)
                    ?.image
                }
                controls
                autoPlay
                playsInline
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gray-900">
                <h3 className="text-lg font-semibold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyLatestProjectSection;