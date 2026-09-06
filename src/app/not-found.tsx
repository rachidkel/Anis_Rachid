import SectionHeader from "@/components/section-header";
import React from "react";

export default function NotFound() {
  return (
    <section className="dk-safe-x-padding dk-section-distance">
      <div className="flex flex-col justify-center items-center">
        <SectionHeader
          title="Page Not Found"
          description="Sorry, the page you are looking for cannot be found."
          className="text-center"
        />
        <a
          className="mt-[18px] px-8 py-2 text-white dk-gradient-btn rounded-xl"
          href="/"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}
