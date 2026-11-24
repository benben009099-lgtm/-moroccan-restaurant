"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Edit3,
  Check,
  X,
  ExternalLink,
  Utensils,
  Navigation,
  Star,
} from "lucide-react";
import { Restaurant7Crest } from "./MoroccanOrnament";
import type { SocialLinksConfig } from "@/db/schema";
import type { Locale } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";
import type { CategoryRecord } from "./MenuSection";

interface FooterAndFloatingCTAProps {
  locale: Locale;
  dict: Dictionary;
  categories: CategoryRecord[];
  socialLinks: SocialLinksConfig;
  onSaveSocialLinks: (updated: SocialLinksConfig) => Promise<void>;
  onSelectCategory: (slug: string) => void;
}

export function FooterAndFloatingCTA({
  locale,
  dict,
  categories,
  socialLinks,
  onSaveSocialLinks,
  onSelectCategory,
}: FooterAndFloatingCTAProps) {
  const [editingSocial, setEditingSocial] = useState(false);
  const [draftSocial, setDraftSocial] =
    useState<SocialLinksConfig>(socialLinks);
  const [savingSocial, setSavingSocial] = useState(false);

  const handleOpenEdit = () => {
    setDraftSocial({ ...socialLinks });
    setEditingSocial(true);
  };

  const handleSave = async () => {
    setSavingSocial(true);
    try {
      await onSaveSocialLinks(draftSocial);
      setEditingSocial(false);
    } finally {
      setSavingSocial(false);
    }
  };

  const getCategoryLabel = (cat: CategoryRecord) => {
    if (locale === "fr") return cat.nameFr;
    if (locale === "ar") return cat.nameAr;
    return cat.nameEn;
  };

  return (
    <>
      <footer className="bg-[#081711] text-[#FAF6F0] border-t border-[#C89D54]/30 pt-16 pb-24 lg:pb-12">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C89D54]/20">
            {/* Col 1: Brand Identity & Editable Social Links (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <Restaurant7Crest className="w-12 h-12" />
                <div>
                  <span className="font-serif-editorial text-2xl font-bold tracking-[0.12em] text-[#FAF6F0] block">
                    RESTAURANT <span className="text-[#C89D54]">7</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C89D54]">
                    Ait Toughtach • Morocco
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#FAF6F0]/75 leading-relaxed">
                {dict.footer.description}
              </p>

              {/* Verified Google Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F291E] border border-[#C89D54]/30 text-xs">
                <Star className="w-4 h-4 text-[#C89D54] fill-[#C89D54]" />
                <span className="font-mono-price font-bold text-[#FAF6F0]">
                  4.2/5
                </span>
                <span className="text-[#FAF6F0]/70">(58 Google Reviews)</span>
                <span className="text-[#C89D54] font-mono-price">
                  • MAD 50–100
                </span>
              </div>

              {/* Editable Social Media Links */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C89D54]">
                    {dict.footer.socialLinksTitle}
                  </span>
                  {!editingSocial && (
                    <button
                      type="button"
                      onClick={handleOpenEdit}
                      className="inline-flex items-center gap-1 text-[11px] text-[#C89D54]/85 hover:text-[#C89D54] underline cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>{dict.footer.editSocialBtn}</span>
                    </button>
                  )}
                </div>

                {!editingSocial ? (
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { label: "Instagram", href: socialLinks.instagram },
                      { label: "Facebook", href: socialLinks.facebook },
                      { label: "TripAdvisor", href: socialLinks.tripadvisor },
                      { label: "Google Maps", href: socialLinks.googleMaps },
                      { label: "WhatsApp", href: socialLinks.whatsapp },
                    ].map((soc) => (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F291E] hover:bg-[#C89D54] text-[#FAF6F0] hover:text-[#0B1F17] border border-[#C89D54]/30 text-xs font-semibold transition-all"
                      >
                        <span>{soc.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0F291E] border border-[#C89D54]/45 space-y-2.5">
                    {(
                      [
                        "instagram",
                        "facebook",
                        "tripadvisor",
                        "googleMaps",
                        "whatsapp",
                      ] as const
                    ).map((key) => (
                      <div key={key}>
                        <label className="block text-[10px] uppercase tracking-wider text-[#C89D54] mb-0.5">
                          {key}
                        </label>
                        <input
                          type="url"
                          dir="ltr"
                          value={draftSocial[key]}
                          onChange={(e) =>
                            setDraftSocial((prev) => ({
                              ...prev,
                              [key]: e.target.value,
                            }))
                          }
                          className="w-full px-2.5 py-1.5 rounded-lg bg-[#081711] border border-[#C89D54]/40 text-xs text-[#FAF6F0] font-mono-price"
                        />
                      </div>
                    ))}
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        disabled={savingSocial}
                        onClick={handleSave}
                        className="px-3 py-1.5 rounded-lg bg-[#C89D54] text-[#0B1F17] text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>
                          {savingSocial ? "..." : dict.footer.saveSocialBtn}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingSocial(false)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-[#FAF6F0] flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Col 2: Quick Navigation (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif-editorial text-xl font-semibold text-[#C89D54]">
                {dict.footer.quickNavTitle}
              </h4>
              <ul className="space-y-2.5 text-sm text-[#FAF6F0]/80">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.home}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#menu"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.menu}
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.gallery}
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.reviews}
                  </a>
                </li>
                <li>
                  <a
                    href="#hours"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.hours}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#C89D54] transition-colors"
                  >
                    {dict.nav.location}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Menu Categories (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif-editorial text-xl font-semibold text-[#C89D54]">
                {dict.footer.menuCategoriesTitle}
              </h4>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm text-[#FAF6F0]/80">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.slug);
                      document
                        .getElementById("menu")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-start hover:text-[#C89D54] transition-colors truncate cursor-pointer"
                  >
                    • {getCategoryLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 4: Direct Contact & Location (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif-editorial text-xl font-semibold text-[#C89D54]">
                {dict.footer.contactInfoTitle}
              </h4>
              <div className="space-y-3 text-sm text-[#FAF6F0]/85">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C89D54] shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">RESTAURANT 7</div>
                    <div className="text-xs text-[#FAF6F0]/75">
                      Q32J+HQ4, Ait Toughtach, Morocco
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C89D54] shrink-0" />
                  <a
                    href="tel:+212636036868"
                    dir="ltr"
                    className="font-mono-price font-bold hover:text-[#C89D54] transition-colors"
                  >
                    +212 6 36 03 68 68
                  </a>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="https://wa.me/212636036868?text=Bonjour%20RESTAURANT%207%2C%20je%20souhaite%20vous%20contacter."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2E6F40] hover:bg-[#37824c] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Q32J%2BHQ4+Ait+Toughtach+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C89D54]/15 hover:bg-[#C89D54]/25 border border-[#C89D54]/40 text-[#C89D54] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google Maps (Q32J+HQ4)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
            <p>
              © {new Date().getFullYear()} <strong>RESTAURANT 7</strong> (Ait
              Toughtach, Morocco • Q32J+HQ4). {dict.footer.rightsReserved}
            </p>
            <p className="text-[#C89D54]/80">{dict.footer.designedWithCare}</p>
          </div>
        </div>
      </footer>

      {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <a
        href="https://wa.me/212636036868?text=Bonjour%20RESTAURANT%207%20(Ait%20Toughtach)%2C%20je%20souhaite%20avoir%20des%20informations%20ou%20r%C3%A9server."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact RESTAURANT 7 on WhatsApp (+212 6 36 03 68 68)"
        className="fixed bottom-20 lg:bottom-7 end-5 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#081711] font-bold px-4 py-3.5 rounded-full shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-[#081711]" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
          WhatsApp • +212 6 36 03 68 68
        </span>
      </a>

      {/* ==================== MOBILE STICKY BOTTOM ACTION BAR ==================== */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1F17]/95 backdrop-blur-md border-t border-[#C89D54]/35 px-3 py-2 grid grid-cols-4 gap-2">
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg text-[#FAF6F0] hover:text-[#C89D54] text-[11px] font-semibold"
        >
          <Utensils className="w-4 h-4 text-[#C89D54] mb-0.5" />
          <span>Menu</span>
        </a>
        <a
          href="tel:+212636036868"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg text-[#FAF6F0] hover:text-[#C89D54] text-[11px] font-semibold"
        >
          <Phone className="w-4 h-4 text-[#C89D54] mb-0.5" />
          <span>Appeler</span>
        </a>
        <a
          href="https://wa.me/212636036868"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg bg-[#2E6F40] text-white text-[11px] font-bold"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Q32J%2BHQ4+Ait+Toughtach+Morocco"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded-lg text-[#FAF6F0] hover:text-[#C89D54] text-[11px] font-semibold"
        >
          <Navigation className="w-4 h-4 text-[#C89D54] mb-0.5" />
          <span>Maps</span>
        </a>
      </div>
    </>
  );
}
