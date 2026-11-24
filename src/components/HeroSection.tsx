"use client";

import React from "react";
import {
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Utensils,
  MessageCircle,
} from "lucide-react";
import { Restaurant7Crest } from "./MoroccanOrnament";
import type { Locale } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
  onSelectCategory: (slug: string) => void;
}

export function HeroSection({
  locale,
  dict,
  onSelectCategory,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 lg:pt-36 pb-16 lg:pb-24 bg-[#0F291E] text-[#FAF6F0] overflow-hidden flex items-center"
    >
      {/* Subtle geometric Moroccan Zellige pattern & ambient warm glow */}
      <div
        className="absolute inset-0 bg-zellige-subtle opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#C89D54]/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#B85338]/12 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Brand Identity & Headlines */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Restaurant Name Crest Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0B1F17]/90 border border-[#C89D54]/40 shadow-lg">
              <Restaurant7Crest className="w-7 h-7" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2.5">
                <span className="font-serif-editorial text-sm sm:text-base font-bold tracking-[0.18em] text-[#C89D54]">
                  RESTAURANT 7
                </span>
                <span className="hidden sm:inline text-[#C89D54]/40">•</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#FAF6F0]/80">
                  {dict.hero.eyebrow}
                </span>
              </div>
            </div>

            {/* Main Headline (Source of Truth + Localized Editorial Sub-headline) */}
            <div className="space-y-3">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl xl:text-[4.35rem] font-semibold tracking-tight leading-[1.06] text-[#FAF6F0]">
                Discover the Taste of{" "}
                <span className="italic font-normal text-[#C89D54]">
                  Morocco
                </span>
              </h1>
              {locale !== "en" && (
                <p className="font-serif-editorial text-xl sm:text-2xl text-[#C89D54]/95 italic">
                  {dict.hero.englishSignatureHeadline}
                </p>
              )}
            </div>

            {/* Subtitle (Source of Truth + Localized Description) */}
            <div className="space-y-2 max-w-2xl">
              <p className="text-base sm:text-xl text-[#FAF6F0]/92 font-medium leading-relaxed">
                Authentic Moroccan Flavors, Traditional Hospitality,
                Unforgettable Experiences.
              </p>
              <p className="text-sm sm:text-base text-[#FAF6F0]/75 leading-relaxed">
                {dict.hero.englishSignatureSubtitle}
              </p>
            </div>

            {/* Two Primary CTA Buttons + Quick WhatsApp */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#C89D54] hover:bg-[#d6ac63] text-[#0B1F17] font-bold text-sm uppercase tracking-[0.12em] shadow-[0_12px_30px_rgba(200,157,84,0.28)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Our Menu</span>
                {locale !== "en" && (
                  <span className="text-xs font-normal opacity-80">
                    ({dict.nav.menu})
                  </span>
                )}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#FAF6F0]/5 hover:bg-[#C89D54]/15 border border-[#C89D54]/60 text-[#FAF6F0] font-semibold text-sm uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#C89D54]" />
                <span>Contact Us</span>
                {locale !== "en" && (
                  <span className="text-xs font-normal text-[#C89D54]">
                    ({dict.nav.location})
                  </span>
                )}
              </a>

              <a
                href="https://wa.me/212636036868?text=Bonjour%20RESTAURANT%207%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20votre%20menu."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-4 rounded-xl bg-[#2E6F40]/30 hover:bg-[#2E6F40]/50 border border-[#2E6F40] text-[#FAF6F0] text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Verified Trust & Identity Metrics Bar */}
            <div className="pt-4 border-t border-[#C89D54]/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#0B1F17]/75 border border-[#C89D54]/20 rounded-xl p-3.5">
                <div className="flex items-center gap-1.5 text-[#C89D54] font-mono-price font-bold text-lg">
                  <Star className="w-4 h-4 fill-[#C89D54] text-[#C89D54]" />
                  <span>4.2 / 5</span>
                </div>
                <p className="text-xs text-[#FAF6F0]/75 mt-1">
                  {dict.hero.reviewsCountLabel}
                </p>
              </div>

              <div className="bg-[#0B1F17]/75 border border-[#C89D54]/20 rounded-xl p-3.5">
                <div className="text-[#C89D54] font-mono-price font-bold text-lg">
                  MAD 50–100
                </div>
                <p className="text-xs text-[#FAF6F0]/75 mt-1">
                  {dict.hero.priceRangeLabel}
                </p>
              </div>

              <div className="bg-[#0B1F17]/75 border border-[#C89D54]/20 rounded-xl p-3.5">
                <div className="flex items-center gap-1.5 text-[#FAF6F0] font-mono-price font-semibold text-sm sm:text-base">
                  <MapPin className="w-4 h-4 text-[#B85338] shrink-0" />
                  <span>Q32J+HQ4</span>
                </div>
                <p className="text-xs text-[#FAF6F0]/75 mt-1 truncate">
                  Ait Toughtach, Morocco
                </p>
              </div>

              <a
                href="tel:+212636036868"
                className="bg-[#0B1F17]/75 hover:bg-[#C89D54]/15 border border-[#C89D54]/25 rounded-xl p-3.5 transition-colors block"
              >
                <div
                  dir="ltr"
                  className="text-[#C89D54] font-mono-price font-semibold text-sm truncate"
                >
                  +212 6 36 03 68 68
                </div>
                <p className="text-xs text-[#FAF6F0]/75 mt-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#C89D54]" />
                  <span>{dict.nav.callBtn}</span>
                </p>
              </a>
            </div>
          </div>

          {/* Right Column: Moorish Arch-Framed Culinary Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Outer Brass Double Arch Frame */}
            <div className="relative mx-auto max-w-[490px]">
              <div className="p-3 rounded-t-[220px] rounded-b-3xl border border-[#C89D54]/50 bg-[#0B1F17]/60 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
                <div className="relative overflow-hidden rounded-t-[208px] rounded-b-2xl aspect-[4/5] border border-[#C89D54]/30 group">
                  <img
                    src="/images/hero-tajine.jpg"
                    alt="RESTAURANT 7 Authentic Moroccan Feast — Tajine, Khobz Bread & Mint Tea"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F17] via-transparent to-transparent opacity-80" />

                  {/* Bottom Caption inside Arch */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0B1F17]/85 backdrop-blur-md border border-[#C89D54]/30 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89D54] block">
                        RESTAURANT 7 • SIGNATURE
                      </span>
                      <p className="font-serif-editorial text-lg font-semibold text-[#FAF6F0]">
                        Camel Tajine & Pastilla Marocaine
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectCategory("tajines");
                        document
                          .getElementById("menu")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-3 py-2 rounded-lg bg-[#C89D54] text-[#0B1F17] font-mono-price text-xs font-bold shrink-0 cursor-pointer hover:bg-[#d8ae64] transition-colors"
                    >
                      120 MAD →
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Signature Dish Badge — Top Left */}
              <button
                type="button"
                onClick={() => {
                  onSelectCategory("tajines");
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden sm:flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-[#0B1F17]/95 border border-[#C89D54]/45 shadow-2xl absolute -left-8 top-12 animate-float-slow cursor-pointer hover:border-[#C89D54] transition-all text-left"
              >
                <img
                  src="/images/camel-tajine.jpg"
                  alt="Camel Tajine"
                  className="w-12 h-12 rounded-xl object-cover border border-[#C89D54]/40"
                />
                <div>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#C89D54]">
                    <Sparkles className="w-3 h-3" />
                    <span>Tajine Star</span>
                  </div>
                  <p className="text-xs font-bold text-[#FAF6F0]">
                    Camel Tajine
                  </p>
                  <p className="text-xs font-mono-price text-[#C89D54]">
                    120 MAD
                  </p>
                </div>
              </button>

              {/* Floating Pastilla Dish Badge — Bottom Right */}
              <button
                type="button"
                onClick={() => {
                  onSelectCategory("dishes");
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden sm:flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-[#0B1F17]/95 border border-[#C89D54]/45 shadow-2xl absolute -right-6 bottom-24 cursor-pointer hover:border-[#C89D54] transition-all text-left"
              >
                <img
                  src="/images/pastilla.jpg"
                  alt="Chicken Pastilla"
                  className="w-12 h-12 rounded-xl object-cover border border-[#C89D54]/40"
                />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#B85338] font-bold">
                    Moroccan Heritage
                  </div>
                  <p className="text-xs font-bold text-[#FAF6F0]">
                    Chicken Pastilla
                  </p>
                  <p className="text-xs font-mono-price text-[#C89D54]">
                    120 MAD
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
