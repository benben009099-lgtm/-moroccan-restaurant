"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  Globe,
  MapPin,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { Restaurant7Crest } from "./MoroccanOrnament";
import type { Locale } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";

interface NavbarProps {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  dict: Dictionary;
  selectedDishesCount: number;
  onOpenInquiry: () => void;
}

export function Navbar({
  locale,
  setLocale,
  dict,
  selectedDishesCount,
  onOpenInquiry,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#menu", label: dict.nav.menu },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#reviews", label: dict.nav.reviews },
    { href: "#hours", label: dict.nav.hours },
    { href: "#contact", label: dict.nav.location },
  ];

  const languages: { code: Locale; label: string; full: string }[] = [
    { code: "fr", label: "FR", full: "Français" },
    { code: "en", label: "EN", full: "English" },
    { code: "ar", label: "عربي", full: "العربية" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1F17]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(11,31,23,0.4)] border-b border-[#C89D54]/25 py-2.5"
          : "bg-[#0F291E]/90 backdrop-blur-sm border-b border-[#C89D54]/15 py-4"
      }`}
    >
      {/* Top micro info bar on desktop */}
      <div className="hidden lg:block border-b border-[#C89D54]/15 pb-2 mb-2.5">
        <div className="max-w-[1380px] mx-auto px-6 flex items-center justify-between text-xs text-[#FAF6F0]/80">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C89D54]" />
              <span>Q32J+HQ4, Ait Toughtach, Morocco</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C89D54] fill-[#C89D54]" />
              <span className="font-medium text-[#FAF6F0]">4.2 / 5</span>
              <span className="text-[#FAF6F0]/65">(58 Google Reviews)</span>
            </span>
            <span className="text-[#C89D54] font-mono-price">MAD 50–100</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+212636036868"
              className="font-mono-price hover:text-[#C89D54] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89D54]" />
              <span dir="ltr">+212 6 36 03 68 68</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <Restaurant7Crest className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-[0.12em] text-[#FAF6F0] leading-none">
              RESTAURANT <span className="text-[#C89D54]">7</span>
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C89D54]/90 mt-1">
              Ait Toughtach • Maroc
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#FAF6F0]/85 hover:text-[#C89D54] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-[1.5px] after:bg-[#C89D54] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Switcher + Selected Dishes / Reserve + Call */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Pill */}
          <div
            role="group"
            aria-label="Language Switcher"
            className="flex items-center bg-[#081711] border border-[#C89D54]/30 rounded-full p-0.5"
          >
            <Globe className="w-3.5 h-3.5 text-[#C89D54] ms-2 me-1 hidden sm:block" />
            {languages.map((lang) => {
              const active = locale === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLocale(lang.code)}
                  title={lang.full}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#C89D54] text-[#0B1F17] shadow-sm"
                      : "text-[#FAF6F0]/75 hover:text-[#FAF6F0]"
                  }`}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>

          {/* Inquiry / Selected Dishes Button */}
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#C89D54]/15 hover:bg-[#C89D54]/25 border border-[#C89D54]/45 text-[#FAF6F0] text-xs font-semibold tracking-wide transition-all cursor-pointer"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C89D54]" />
            <span>{dict.nav.reserveBtn}</span>
            {selectedDishesCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#B85338] text-[#FAF6F0] text-[11px] font-bold">
                {selectedDishesCount}
              </span>
            )}
          </button>

          {/* Direct Click-to-Call Button */}
          <a
            href="tel:+212636036868"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89D54] hover:bg-[#d8ae64] text-[#0B1F17] text-xs font-bold tracking-wider uppercase transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span dir="ltr">+212 6 36 03 68 68</span>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#C89D54]/35 text-[#FAF6F0] hover:bg-[#C89D54]/15 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#C89D54]" />
            ) : (
              <Menu className="w-5 h-5 text-[#C89D54]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1F17] border-t border-[#C89D54]/25 px-6 py-6 space-y-5 shadow-2xl">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-base font-medium text-[#FAF6F0] hover:bg-[#C89D54]/15 hover:text-[#C89D54] transition-colors flex items-center justify-between border-b border-[#C89D54]/10"
              >
                <span>{link.label}</span>
                <span className="text-[#C89D54] text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+212636036868"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C89D54] text-[#0B1F17] font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+212 6 36 03 68 68</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#C89D54]/50 text-[#FAF6F0] font-semibold text-sm"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#C89D54]" />
              <span>{dict.nav.reserveBtn}</span>
              {selectedDishesCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#B85338] text-white text-xs">
                  {selectedDishesCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
