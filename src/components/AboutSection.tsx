"use client";

import React from "react";
import { Flame, Sparkles, HeartHandshake, MapPin } from "lucide-react";
import { ZelligeSectionDivider } from "./MoroccanOrnament";
import type { Dictionary } from "@/lib/i18n";

interface AboutSectionProps {
  dict: Dictionary;
}

export function AboutSection({ dict }: AboutSectionProps) {
  const pillarIcons = [Flame, Sparkles, HeartHandshake];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#FAF6F0] text-[#14231B] relative overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#B85338] mb-3">
            {dict.about.eyebrow}
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#0F291E] leading-tight">
            {dict.about.title}
          </h2>
          <ZelligeSectionDivider />
        </div>

        {/* Main 12-Column Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Asymmetric Moroccan Visual Collage */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-end">
            {/* Large Primary Exterior Photo */}
            <div className="col-span-7">
              <div className="p-2 rounded-2xl border border-[#C89D54]/45 bg-[#EFE8DC] shadow-xl">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src="/images/restaurant-exterior.jpg"
                    alt="RESTAURANT 7 Exterior in Ait Toughtach, Morocco"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 inset-x-3 px-3 py-2 rounded-lg bg-[#0F291E]/90 backdrop-blur-sm border border-[#C89D54]/30 text-[#FAF6F0] text-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C89D54] shrink-0" />
                    <span className="truncate">
                      RESTAURANT 7 • Ait Toughtach
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stacked Culinary Photos */}
            <div className="col-span-5 space-y-4">
              <div className="p-1.5 rounded-2xl border border-[#C89D54]/45 bg-[#EFE8DC] shadow-lg">
                <div className="overflow-hidden rounded-xl aspect-square">
                  <img
                    src="/images/vegetable-tajine.jpg"
                    alt="Traditional Moroccan Vegetable Tajine"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="p-1.5 rounded-2xl border border-[#C89D54]/45 bg-[#EFE8DC] shadow-lg">
                <div className="overflow-hidden rounded-xl aspect-[4/5]">
                  <img
                    src="/images/pastilla.jpg"
                    alt="Authentic Moroccan Chicken Pastilla"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Storytelling & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-serif-editorial text-2xl sm:text-[1.65rem] text-[#0F291E] font-medium leading-snug">
              {dict.about.lead}
            </p>

            <p className="text-base text-[#526056] leading-relaxed">
              {dict.about.body1}
            </p>

            <p className="text-base text-[#526056] leading-relaxed">
              {dict.about.body2}
            </p>

            {/* Editorial Pull Quote */}
            <blockquote className="p-6 rounded-2xl bg-[#EFE8DC] border-s-4 border-[#C89D54] space-y-2 shadow-sm">
              <p className="font-serif-editorial italic text-xl text-[#0F291E] leading-relaxed">
                {dict.about.quote}
              </p>
              <footer className="text-xs font-bold uppercase tracking-[0.18em] text-[#B85338]">
                — {dict.about.quoteAuthor}
              </footer>
            </blockquote>

            {/* 3 Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#C89D54]/30 text-center shadow-sm">
                <div className="font-mono-price text-xl sm:text-2xl font-bold text-[#0F291E]">
                  {dict.about.stat1Value}
                </div>
                <div className="text-xs text-[#526056] mt-1">
                  {dict.about.stat1Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C89D54]/30 text-center shadow-sm">
                <div className="font-mono-price text-xl sm:text-2xl font-bold text-[#B85338]">
                  {dict.about.stat2Value}
                </div>
                <div className="text-xs text-[#526056] mt-1">
                  {dict.about.stat2Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C89D54]/30 text-center shadow-sm">
                <div className="font-mono-price text-lg sm:text-xl font-bold text-[#0F291E]">
                  {dict.about.stat3Value}
                </div>
                <div className="text-xs text-[#526056] mt-1">
                  {dict.about.stat3Label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Hospitality Pillars Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.about.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#EFE8DC]/75 border border-[#C89D54]/30 hover:border-[#C89D54] transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F291E] text-[#C89D54] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-editorial text-2xl font-semibold text-[#0F291E] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#526056] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
