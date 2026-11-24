"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Sparkles,
  MessageCircle,
  Plus,
  Check,
  X,
  UtensilsCrossed,
  PhoneCall,
} from "lucide-react";
import { ZelligeSectionDivider } from "./MoroccanOrnament";
import type { Locale } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";

export interface CategoryRecord {
  id: number;
  slug: string;
  nameEn: string;
  nameFr: string;
  nameAr: string;
  subtitleEn: string;
  subtitleFr: string;
  subtitleAr: string;
  heroImage: string;
  displayOrder: number;
}

export interface MenuItemRecord {
  id: number;
  categorySlug: string;
  nameEn: string;
  nameFr: string;
  nameAr: string;
  descriptionEn: string;
  descriptionFr: string;
  descriptionAr: string;
  priceMad: number | null;
  imageUrl: string;
  isSignature: boolean;
  badgeEn: string | null;
  badgeFr: string | null;
  badgeAr: string | null;
  displayOrder: number;
}

interface MenuSectionProps {
  locale: Locale;
  dict: Dictionary;
  categories: CategoryRecord[];
  items: MenuItemRecord[];
  activeCategory: string;
  setActiveCategory: (slug: string) => void;
  selectedDishes: string[];
  onToggleDish: (dishNameEn: string) => void;
  onAskPriceDish: (dishNameEn: string) => void;
}

export function MenuSection({
  locale,
  dict,
  categories,
  items,
  activeCategory,
  setActiveCategory,
  selectedDishes,
  onToggleDish,
  onAskPriceDish,
}: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [quickFilter, setQuickFilter] = useState<
    "all" | "signature" | "ask" | "vegetarian"
  >("all");

  const getCategoryTitle = (cat: CategoryRecord) => {
    if (locale === "fr") return `${cat.nameFr} (${cat.nameEn})`;
    if (locale === "ar") return `${cat.nameAr} • ${cat.nameEn}`;
    return cat.nameEn;
  };

  const getCategoryTabLabel = (cat: CategoryRecord) => {
    if (locale === "fr") return cat.nameFr;
    if (locale === "ar") return cat.nameAr;
    return cat.nameEn;
  };

  const getCategorySubtitle = (cat: CategoryRecord) => {
    if (locale === "fr") return cat.subtitleFr;
    if (locale === "ar") return cat.subtitleAr;
    return cat.subtitleEn;
  };

  const getItemLocalizedName = (item: MenuItemRecord) => {
    if (locale === "fr") return item.nameFr;
    if (locale === "ar") return item.nameAr;
    return item.nameEn;
  };

  const getItemDescription = (item: MenuItemRecord) => {
    if (locale === "fr") return item.descriptionFr;
    if (locale === "ar") return item.descriptionAr;
    return item.descriptionEn;
  };

  const getItemBadge = (item: MenuItemRecord) => {
    if (locale === "fr") return item.badgeFr;
    if (locale === "ar") return item.badgeAr;
    return item.badgeEn;
  };

  // Filter items based on activeCategory, searchQuery, and quickFilter
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory !== "all" && item.categorySlug !== activeCategory) {
        return false;
      }
      if (quickFilter === "signature" && !item.isSignature) {
        return false;
      }
      if (quickFilter === "ask" && item.priceMad !== null) {
        return false;
      }
      if (
        quickFilter === "vegetarian" &&
        !item.nameEn.toLowerCase().includes("vegetarian") &&
        !item.nameEn.toLowerCase().includes("salad") &&
        !item.nameEn.toLowerCase().includes("cheese") &&
        !item.nameEn.toLowerCase().includes("mushroom") &&
        !item.nameEn.toLowerCase().includes("margarita") &&
        !item.nameEn.toLowerCase().includes("fries") &&
        !item.nameEn.toLowerCase().includes("rice")
      ) {
        return false;
      }

      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchEn = item.nameEn.toLowerCase().includes(q);
        const matchFr = item.nameFr.toLowerCase().includes(q);
        const matchAr = item.nameAr.toLowerCase().includes(q);
        const matchDesc =
          item.descriptionEn.toLowerCase().includes(q) ||
          item.descriptionFr.toLowerCase().includes(q);
        const matchCat = item.categorySlug.toLowerCase().includes(q);
        return matchEn || matchFr || matchAr || matchDesc || matchCat;
      }

      return true;
    });
  }, [items, activeCategory, quickFilter, searchQuery]);

  // Group filtered items by category so each category renders with its header & photography
  const visibleCategories = useMemo(() => {
    return categories.filter((cat) =>
      filteredItems.some((item) => item.categorySlug === cat.slug)
    );
  }, [categories, filteredItems]);

  return (
    <section
      id="menu"
      className="py-20 lg:py-28 bg-[#EFE8DC] text-[#14231B] relative"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#B85338] mb-3">
            {dict.menuSection.eyebrow}
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#0F291E] leading-tight">
            {dict.menuSection.title}
          </h2>
          <ZelligeSectionDivider />
          <p className="text-base text-[#526056] leading-relaxed">
            {dict.menuSection.subtitle}
          </p>
        </div>

        {/* Sticky Category & Search Controls Bar */}
        <div className="sticky top-[68px] lg:top-[92px] z-30 bg-[#FAF6F0]/95 backdrop-blur-md rounded-2xl border border-[#C89D54]/40 shadow-[0_12px_32px_rgba(15,41,30,0.08)] p-3 sm:p-4 mb-10 space-y-3">
          {/* Category Pills Scrollable Row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#0F291E] text-[#C89D54] shadow-md border border-[#C89D54]"
                  : "bg-[#EFE8DC] text-[#14231B] hover:bg-[#0F291E]/10 border border-transparent"
              }`}
            >
              {dict.menuSection.allCategories} ({items.length})
            </button>

            {categories.map((cat) => {
              const count = items.filter(
                (i) => i.categorySlug === cat.slug
              ).length;
              const isSelected = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0F291E] text-[#C89D54] shadow-md border border-[#C89D54]"
                      : "bg-[#EFE8DC] text-[#14231B] hover:bg-[#0F291E]/10 border border-transparent"
                  }`}
                >
                  <span>{getCategoryTabLabel(cat)}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono-price ${
                      isSelected
                        ? "bg-[#C89D54] text-[#0B1F17]"
                        : "bg-[#FAF6F0] text-[#526056]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Quick Filter Pills */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1 border-t border-[#C89D54]/20">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#526056] absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={dict.menuSection.searchPlaceholder}
                className="w-full ps-10 pe-9 py-2 rounded-xl bg-[#EFE8DC]/70 border border-[#C89D54]/30 text-sm text-[#14231B] placeholder:text-[#526056]/75 focus:outline-none focus:border-[#0F291E] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-[#526056] hover:text-[#14231B]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "all", labelFr: "Tous", labelEn: "All", labelAr: "الكل" },
                {
                  id: "signature",
                  labelFr: "Spécialités Signatures",
                  labelEn: "Signature Dishes",
                  labelAr: "أطباق مميزة",
                },
                {
                  id: "vegetarian",
                  labelFr: "Végétarien & Salades",
                  labelEn: "Vegetarian & Salads",
                  labelAr: "نباتي وسلطات",
                },
                {
                  id: "ask",
                  labelFr: "Prix sur demande",
                  labelEn: "Ask for price",
                  labelAr: "السعر عند الطلب",
                },
              ].map((pill) => {
                const active = quickFilter === pill.id;
                const label =
                  locale === "fr"
                    ? pill.labelFr
                    : locale === "ar"
                    ? pill.labelAr
                    : pill.labelEn;
                return (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() =>
                      setQuickFilter(
                        pill.id as "all" | "signature" | "ask" | "vegetarian"
                      )
                    }
                    className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-[#C89D54] text-[#0B1F17]"
                        : "bg-[#EFE8DC] text-[#526056] hover:text-[#14231B]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              <span className="text-xs font-mono-price text-[#526056] ps-2 shrink-0">
                {filteredItems.length} {dict.menuSection.showingCount}
              </span>
            </div>
          </div>
        </div>

        {/* Empty State if search matches nothing */}
        {visibleCategories.length === 0 && (
          <div className="bg-[#FAF6F0] rounded-2xl border border-[#C89D54]/30 p-12 text-center max-w-lg mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-[#C89D54] mx-auto mb-3" />
            <p className="font-serif-editorial text-2xl text-[#0F291E] mb-2">
              Aucun plat trouvé / No matching dishes
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setQuickFilter("all");
              }}
              className="mt-3 px-5 py-2.5 rounded-xl bg-[#0F291E] text-[#C89D54] text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              {dict.menuSection.clearFilters}
            </button>
          </div>
        )}

        {/* Category Sections & Dish Grids */}
        <div className="space-y-16">
          {visibleCategories.map((cat) => {
            const catItems = filteredItems.filter(
              (item) => item.categorySlug === cat.slug
            );

            return (
              <div
                key={cat.slug}
                id={`category-${cat.slug}`}
                className="scroll-mt-44 space-y-6"
              >
                {/* Category Editorial Spotlight Banner */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0F291E] border border-[#C89D54]/45 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                    <div className="md:col-span-8 p-6 sm:p-8 space-y-2">
                      <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C89D54]">
                        <span>RESTAURANT 7</span>
                        <span>•</span>
                        <span>{cat.nameEn}</span>
                      </div>
                      <h3 className="font-serif-editorial text-2xl sm:text-4xl font-semibold text-[#FAF6F0]">
                        {getCategoryTitle(cat)}
                      </h3>
                      <p className="text-sm sm:text-base text-[#FAF6F0]/80 max-w-2xl">
                        {getCategorySubtitle(cat)}
                      </p>
                    </div>
                    <div className="md:col-span-4 h-44 md:h-full relative overflow-hidden">
                      <img
                        src={cat.heroImage}
                        alt={cat.nameEn}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0F291E] via-[#0F291E]/40 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Dish Cards Grid (2 columns on desktop for editorial menu feel) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {catItems.map((item) => {
                    const isSelected = selectedDishes.includes(item.nameEn);
                    const localizedName = getItemLocalizedName(item);
                    const badge = getItemBadge(item);

                    return (
                      <article
                        key={item.id}
                        className={`group rounded-2xl bg-[#FAF6F0] border transition-all duration-300 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center ${
                          isSelected
                            ? "border-[#0F291E] ring-2 ring-[#C89D54]/50 shadow-md"
                            : "border-[#C89D54]/30 hover:border-[#C89D54] hover:shadow-[0_14px_34px_rgba(15,41,30,0.08)]"
                        }`}
                      >
                        {/* Dish Thumbnail Image */}
                        <div className="relative w-full sm:w-28 h-44 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-[#C89D54]/30 bg-[#EFE8DC]">
                          <img
                            src={item.imageUrl}
                            alt={item.nameEn}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          />
                          {item.isSignature && (
                            <span className="absolute top-2 start-2 px-2 py-0.5 rounded-md bg-[#0F291E]/90 text-[#C89D54] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-[#C89D54]/40">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>{ badge || dict.menuSection.signatureBadge }</span>
                            </span>
                          )}
                        </div>

                        {/* Dish Content & Price Leader */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2">
                          <div>
                            {/* Title + Dotted Leader + Confirmed Price or Ask for Price */}
                            <div className="flex items-baseline justify-between gap-2 flex-wrap sm:flex-nowrap">
                              <div className="min-w-0">
                                <h4 className="font-serif-editorial text-xl sm:text-[1.35rem] font-bold text-[#0F291E] leading-snug">
                                  {item.nameEn}
                                </h4>
                                {locale !== "en" &&
                                  localizedName !== item.nameEn && (
                                    <p className="text-xs font-semibold text-[#B85338]">
                                      {localizedName}
                                    </p>
                                  )}
                              </div>

                              <div className="hidden sm:block flex-1 border-b border-dotted border-[#C89D54]/60 mx-2" />

                              {/* Price Display */}
                              {item.priceMad !== null ? (
                                <span className="shrink-0 px-3 py-1 rounded-lg bg-[#0F291E] text-[#C89D54] font-mono-price text-sm sm:text-base font-bold tracking-wide shadow-xs">
                                  {item.priceMad} MAD
                                </span>
                              ) : (
                                <span className="shrink-0 px-3 py-1 rounded-lg bg-[#B85338]/12 border border-[#B85338]/40 text-[#B85338] font-mono-price text-xs font-bold">
                                  {dict.menuSection.askForPrice}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-[#526056] leading-relaxed mt-1.5 line-clamp-2">
                              {getItemDescription(item)}
                            </p>
                          </div>

                          {/* Card Footer Actions */}
                          <div className="pt-2 flex items-center justify-between gap-2 flex-wrap">
                            <button
                              type="button"
                              onClick={() => onToggleDish(item.nameEn)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#0F291E] text-[#C89D54]"
                                  : "bg-[#EFE8DC] hover:bg-[#0F291E] text-[#14231B] hover:text-[#FAF6F0]"
                              }`}
                            >
                              {isSelected ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-[#C89D54]" />
                                  <span>{dict.menuSection.addedToSelection}</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>{dict.menuSection.addToSelection}</span>
                                </>
                              )}
                            </button>

                            {item.priceMad === null ? (
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => onAskPriceDish(item.nameEn)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C89D54]/20 hover:bg-[#C89D54] text-[#0F291E] text-xs font-bold transition-colors cursor-pointer"
                                >
                                  <MessageCircle className="w-3.5 h-3.5" />
                                  <span>{dict.menuSection.inquireViaWhatsapp}</span>
                                </button>
                              </div>
                            ) : (
                              <a
                                href={`https://wa.me/212636036868?text=${encodeURIComponent(
                                  `Bonjour RESTAURANT 7, je souhaite commander / réserver : ${item.nameEn} (${item.priceMad} MAD)`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E6F40] hover:underline"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Menu Transparency Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0F291E] text-[#FAF6F0] border border-[#C89D54]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-start">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C89D54] font-bold">
              RESTAURANT 7 • AIT TOUGHTACH
            </p>
            <p className="text-sm text-[#FAF6F0]/85 max-w-2xl">
              {dict.menuSection.priceNote}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+212636036868"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C89D54] text-[#0B1F17] font-mono-price text-xs font-bold uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4" />
              <span dir="ltr">+212 6 36 03 68 68</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
