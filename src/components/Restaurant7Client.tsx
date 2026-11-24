"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import {
  MenuSection,
  type CategoryRecord,
  type MenuItemRecord,
} from "./MenuSection";
import { GallerySection } from "./GallerySection";
import { TrustAndHoursSection } from "./TrustAndHoursSection";
import { LocationContactSection } from "./LocationContactSection";
import { FooterAndFloatingCTA } from "./FooterAndFloatingCTA";
import { DICTIONARIES } from "@/lib/i18n";
import type { Locale } from "@/lib/restaurant-data";
import type { OpeningHourDay, SocialLinksConfig } from "@/db/schema";

interface Restaurant7ClientProps {
  initialCategories: CategoryRecord[];
  initialItems: MenuItemRecord[];
  initialOpeningHours: OpeningHourDay[];
  initialSocialLinks: SocialLinksConfig;
}

export function Restaurant7Client({
  initialCategories,
  initialItems,
  initialOpeningHours,
  initialSocialLinks,
}: Restaurant7ClientProps) {
  // Default language is French per requirement 8
  const [locale, setLocale] = useState<Locale>("fr");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [openingHours, setOpeningHours] =
    useState<OpeningHourDay[]>(initialOpeningHours);
  const [socialLinks, setSocialLinks] =
    useState<SocialLinksConfig>(initialSocialLinks);
  const [preselectedInquiryType, setPreselectedInquiryType] = useState<
    "reservation" | "price_inquiry" | "preorder"
  >("reservation");

  const dict = DICTIONARIES[locale];

  // Dynamically sync HTML dir="rtl" / "ltr" and lang attribute when switching languages
  useEffect(() => {
    document.documentElement.dir = dict.dir;
    document.documentElement.lang = locale;
  }, [locale, dict.dir]);

  const handleToggleDish = (dishNameEn: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishNameEn)
        ? prev.filter((d) => d !== dishNameEn)
        : [...prev, dishNameEn]
    );
  };

  const handleRemoveDish = (dishNameEn: string) => {
    setSelectedDishes((prev) => prev.filter((d) => d !== dishNameEn));
  };

  const handleAskPriceDish = (dishNameEn: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishNameEn) ? prev : [...prev, dishNameEn]
    );
    setPreselectedInquiryType("price_inquiry");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenInquiry = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSaveOpeningHours = async (updatedHours: OpeningHourDay[]) => {
    setOpeningHours(updatedHours);
    const res = await fetch("/api/restaurant", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ openingHours: updatedHours }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.settings?.openingHours) {
        setOpeningHours(data.settings.openingHours);
      }
    }
  };

  const handleSaveSocialLinks = async (updatedSocial: SocialLinksConfig) => {
    setSocialLinks(updatedSocial);
    const res = await fetch("/api/restaurant", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ socialLinks: updatedSocial }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.settings?.socialLinks) {
        setSocialLinks(data.settings.socialLinks);
      }
    }
  };

  return (
    <div dir={dict.dir} className="min-h-screen flex flex-col">
      <Navbar
        locale={locale}
        setLocale={setLocale}
        dict={dict}
        selectedDishesCount={selectedDishes.length}
        onOpenInquiry={handleOpenInquiry}
      />

      <main className="flex-1">
        <HeroSection
          locale={locale}
          dict={dict}
          onSelectCategory={setActiveCategory}
        />

        <AboutSection dict={dict} />

        <MenuSection
          locale={locale}
          dict={dict}
          categories={initialCategories}
          items={initialItems}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedDishes={selectedDishes}
          onToggleDish={handleToggleDish}
          onAskPriceDish={handleAskPriceDish}
        />

        <GallerySection locale={locale} dict={dict} />

        <TrustAndHoursSection
          locale={locale}
          dict={dict}
          openingHours={openingHours}
          onSaveOpeningHours={handleSaveOpeningHours}
        />

        <LocationContactSection
          dict={dict}
          selectedDishes={selectedDishes}
          onRemoveDish={handleRemoveDish}
          preselectedInquiryType={preselectedInquiryType}
        />
      </main>

      <FooterAndFloatingCTA
        locale={locale}
        dict={dict}
        categories={initialCategories}
        socialLinks={socialLinks}
        onSaveSocialLinks={handleSaveSocialLinks}
        onSelectCategory={setActiveCategory}
      />
    </div>
  );
}
