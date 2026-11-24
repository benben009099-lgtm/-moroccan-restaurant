"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { ZelligeSectionDivider } from "./MoroccanOrnament";
import { GALLERY_PHOTOS, type Locale, type GalleryPhoto } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";

interface GallerySectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function GallerySection({ locale, dict }: GallerySectionProps) {
  const [filter, setFilter] = useState<
    "all" | "tajines" | "signature" | "architecture" | "starters"
  >("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    filter === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter);

  const getTitle = (photo: GalleryPhoto) => {
    if (locale === "fr") return photo.titleFr;
    if (locale === "ar") return photo.titleAr;
    return photo.titleEn;
  };

  const getCaption = (photo: GalleryPhoto) => {
    if (locale === "fr") return photo.captionFr;
    if (locale === "ar") return photo.captionAr;
    return photo.captionEn;
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [lightboxIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const filterButtons: {
    id: "all" | "tajines" | "signature" | "architecture" | "starters";
    label: string;
  }[] = [
    { id: "all", label: dict.gallerySection.filterAll },
    { id: "tajines", label: dict.gallerySection.filterTajines },
    { id: "signature", label: dict.gallerySection.filterSignature },
    { id: "architecture", label: dict.gallerySection.filterArchitecture },
    { id: "starters", label: dict.gallerySection.filterStarters },
  ];

  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#0F291E] text-[#FAF6F0] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-zellige-subtle opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C89D54] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{dict.gallerySection.eyebrow}</span>
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#FAF6F0] leading-tight">
            {dict.gallerySection.title}
          </h2>
          <ZelligeSectionDivider dark />
          <p className="text-base text-[#FAF6F0]/80 leading-relaxed">
            {dict.gallerySection.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {filterButtons.map((btn) => {
            const active = filter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  setFilter(btn.id);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  active
                    ? "bg-[#C89D54] text-[#0B1F17] shadow-lg"
                    : "bg-[#0B1F17]/80 text-[#FAF6F0]/80 border border-[#C89D54]/30 hover:border-[#C89D54] hover:text-[#FAF6F0]"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Bento / Masonry Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden border border-[#C89D54]/35 bg-[#0B1F17] cursor-pointer shadow-xl ${
                index === 0 && filter === "all"
                  ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={photo.src}
                alt={getTitle(photo)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F17] via-[#0B1F17]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Right Zoom Icon */}
              <div className="absolute top-4 end-4 w-9 h-9 rounded-full bg-[#0B1F17]/80 border border-[#C89D54]/40 text-[#C89D54] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89D54] font-bold">
                  RESTAURANT 7 • AIT TOUGHTACH
                </span>
                <h3 className="font-serif-editorial text-xl sm:text-2xl font-semibold text-[#FAF6F0]">
                  {getTitle(photo)}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF6F0]/80 line-clamp-2">
                  {getCaption(photo)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#081711]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0B1F17] border border-[#C89D54]/45 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#C89D54]/25">
              <div className="flex items-center gap-3">
                <span className="font-mono-price text-xs text-[#C89D54]">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="text-sm font-serif-editorial text-[#FAF6F0] font-semibold">
                  {getTitle(activePhoto)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C89D54]/15 hover:bg-[#C89D54] text-[#FAF6F0] hover:text-[#0B1F17] text-xs font-bold transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>{dict.gallerySection.closeLightbox}</span>
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={getTitle(activePhoto)}
                className="max-h-[70vh] w-full h-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B1F17]/85 hover:bg-[#C89D54] text-[#FAF6F0] hover:text-[#0B1F17] border border-[#C89D54]/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B1F17]/85 hover:bg-[#C89D54] text-[#FAF6F0] hover:text-[#0B1F17] border border-[#C89D54]/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0B1F17]">
              <div>
                <h4 className="font-serif-editorial text-2xl font-semibold text-[#C89D54]">
                  {getTitle(activePhoto)}
                </h4>
                <p className="text-sm text-[#FAF6F0]/85 mt-1">
                  {getCaption(activePhoto)}
                </p>
              </div>
              <a
                href="#menu"
                onClick={() => setLightboxIndex(null)}
                className="px-5 py-2.5 rounded-xl bg-[#C89D54] text-[#0B1F17] text-xs font-bold uppercase tracking-wider shrink-0 text-center"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
