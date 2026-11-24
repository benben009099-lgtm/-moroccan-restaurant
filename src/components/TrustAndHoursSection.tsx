"use client";

import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  ExternalLink,
  Clock,
  Edit3,
  Check,
  X,
  Utensils,
  Award,
  Wallet,
} from "lucide-react";
import { ZelligeSectionDivider } from "./MoroccanOrnament";
import type { OpeningHourDay } from "@/db/schema";
import type { Locale } from "@/lib/restaurant-data";
import type { Dictionary } from "@/lib/i18n";

interface TrustAndHoursSectionProps {
  locale: Locale;
  dict: Dictionary;
  openingHours: OpeningHourDay[];
  onSaveOpeningHours: (updated: OpeningHourDay[]) => Promise<void>;
}

export function TrustAndHoursSection({
  locale,
  dict,
  openingHours,
  onSaveOpeningHours,
}: TrustAndHoursSectionProps) {
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [draftHours, setDraftHours] = useState<OpeningHourDay[]>(openingHours);
  const [saving, setSaving] = useState(false);
  const [savedBanner, setSavedBanner] = useState(false);

  const handleStartEdit = () => {
    setDraftHours(openingHours.map((d) => ({ ...d })));
    setIsEditingHours(true);
    setSavedBanner(false);
  };

  const handleFieldChange = (
    index: number,
    field: keyof OpeningHourDay,
    value: string | boolean
  ) => {
    setDraftHours((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSaveOpeningHours(draftHours);
      setIsEditingHours(false);
      setSavedBanner(true);
      setTimeout(() => setSavedBanner(false), 4500);
    } finally {
      setSaving(false);
    }
  };

  const getDayLabel = (day: OpeningHourDay) => {
    if (locale === "fr") return day.dayFr;
    if (locale === "ar") return day.dayAr;
    return day.dayEn;
  };

  const getDayNote = (day: OpeningHourDay) => {
    if (locale === "fr") return day.noteFr;
    if (locale === "ar") return day.noteAr;
    return day.noteEn;
  };

  return (
    <div className="bg-[#FAF6F0] text-[#14231B]">
      {/* ==================== CUSTOMER TRUST SECTION ==================== */}
      <section id="reviews" className="py-20 lg:py-28 border-b border-[#C89D54]/25">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#B85338] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>{dict.trustSection.eyebrow}</span>
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#0F291E] leading-tight">
              {dict.trustSection.title}
            </h2>
            <ZelligeSectionDivider />
            <p className="text-base text-[#526056] leading-relaxed">
              {dict.trustSection.subtitle}
            </p>
          </div>

          {/* 4-Pillar Verified Reputation Scorecard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Card 1: 4.2 / 5 (58 reviews) */}
            <div className="p-7 rounded-2xl bg-[#0F291E] text-[#FAF6F0] border border-[#C89D54]/45 shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89D54]/20 text-[#C89D54] text-xs font-bold uppercase tracking-wider mb-4">
                  <Star className="w-3.5 h-3.5 fill-[#C89D54]" />
                  <span>{dict.trustSection.verifiedBadge}</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-price text-4xl sm:text-5xl font-bold text-[#C89D54]">
                    4.2/5
                  </span>
                  <div className="flex items-center gap-1 text-[#C89D54]">
                    {[1, 2, 3, 4].map((n) => (
                      <Star
                        key={n}
                        className="w-5 h-5 fill-[#C89D54] text-[#C89D54]"
                      />
                    ))}
                    <Star className="w-5 h-5 text-[#C89D54]/50" />
                  </div>
                </div>
                <h3 className="font-serif-editorial text-2xl font-semibold mt-3 text-[#FAF6F0]">
                  58 Customer Reviews
                </h3>
                <p className="text-sm text-[#FAF6F0]/75 mt-1">
                  {dict.trustSection.basedOnReviews}
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Q32J%2BHQ4+Ait+Toughtach+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#C89D54] text-[#0B1F17] text-xs font-bold uppercase tracking-wider hover:bg-[#d8ae64] transition-colors"
              >
                <span>{dict.trustSection.viewOnGoogleMaps}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Moroccan Restaurant Identity */}
            <div className="p-7 rounded-2xl bg-[#EFE8DC] border border-[#C89D54]/35 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0F291E] text-[#C89D54] flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B85338]">
                  RESTAURANT 7 • AIT TOUGHTACH
                </span>
                <h3 className="font-serif-editorial text-3xl font-bold text-[#0F291E] mt-1">
                  {dict.trustSection.cuisineTypeTitle}
                </h3>
                <p className="text-sm text-[#526056] mt-2 leading-relaxed">
                  {dict.trustSection.cuisineTypeSubtitle}
                </p>
              </div>
              <div className="pt-6 border-t border-[#C89D54]/25 mt-6 flex items-center justify-between text-xs font-mono-price text-[#0F291E]">
                <span>Plus Code: Q32J+HQ4</span>
                <span>Ait Toughtach, Morocco</span>
              </div>
            </div>

            {/* Card 3: Price Range 50-100 MAD */}
            <div className="p-7 rounded-2xl bg-[#EFE8DC] border border-[#C89D54]/35 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0F291E] text-[#C89D54] flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B85338]">
                  ACCESSIBLE EXCELLENCE
                </span>
                <h3 className="font-mono-price text-3xl sm:text-4xl font-bold text-[#0F291E] mt-1">
                  {dict.trustSection.priceRangeTitle}
                </h3>
                <p className="text-sm text-[#526056] mt-2 leading-relaxed">
                  {dict.trustSection.priceRangeSubtitle}
                </p>
              </div>
              <div className="pt-6 border-t border-[#C89D54]/25 mt-6 flex items-center justify-between text-xs font-semibold text-[#2E6F40]">
                <span>Starters from 40 MAD</span>
                <span>Tajines 90–120 MAD</span>
              </div>
            </div>
          </div>

          {/* Hospitality & Culinary Highlights (Honest Testimonial Alternative) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-[#0F291E] flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[#C89D54]" />
                <span>{dict.trustSection.hospitalityHighlightsTitle}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dict.trustSection.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#C89D54]/35 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#0F291E]/8 text-[#B85338] text-[10px] font-bold uppercase tracking-[0.16em] mb-3">
                      {item.tag}
                    </span>
                    <h4 className="font-serif-editorial text-2xl font-bold text-[#0F291E] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#526056] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#C89D54]/20 text-xs font-mono-price text-[#0F291E] font-semibold">
                    {item.dishHighlight}
                  </div>
                </div>
              ))}
            </div>

            {/* Transparency Notice */}
            <div className="p-5 rounded-xl bg-[#EFE8DC] border border-[#C89D54]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#526056]">
              <p className="leading-relaxed">{dict.trustSection.transparencyNotice}</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Q32J%2BHQ4+Ait+Toughtach+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-bold text-[#0F291E] hover:text-[#B85338] underline flex items-center gap-1"
              >
                <span>Google Maps (Q32J+HQ4)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EDITABLE OPENING HOURS SECTION ==================== */}
      <section id="hours" className="py-20 lg:py-24 bg-[#EFE8DC]/60">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="bg-[#FAF6F0] rounded-3xl border border-[#C89D54]/45 shadow-xl overflow-hidden">
            {/* Top Banner */}
            <div className="bg-[#0F291E] text-[#FAF6F0] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C89D54]/30">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C89D54]">
                  <Clock className="w-4 h-4" />
                  <span>{dict.hoursSection.eyebrow}</span>
                </div>
                <h2 className="font-serif-editorial text-2xl sm:text-4xl font-semibold">
                  {dict.hoursSection.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#FAF6F0]/75 max-w-2xl">
                  {dict.hoursSection.subtitle}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                {!isEditingHours ? (
                  <button
                    type="button"
                    onClick={handleStartEdit}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C89D54] hover:bg-[#d8ae64] text-[#0B1F17] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{dict.hoursSection.editHoursBtn}</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={saving}
                      onClick={handleSave}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2E6F40] hover:bg-[#37824c] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>
                        {saving ? "..." : dict.hoursSection.saveHoursBtn}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingHours(false)}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF6F0] text-xs font-semibold transition-all cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{dict.hoursSection.cancelBtn}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {savedBanner && (
              <div className="bg-[#2E6F40] text-white px-6 py-3 text-xs font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>{dict.hoursSection.savedSuccess}</span>
              </div>
            )}

            {/* Schedule List */}
            <div className="p-6 sm:p-8 divide-y divide-[#C89D54]/20">
              {(isEditingHours ? draftHours : openingHours).map((day, idx) => (
                <div
                  key={day.dayKey}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        day.isClosed ? "bg-[#A8332A]" : "bg-[#2E6F40]"
                      }`}
                    />
                    <span className="font-serif-editorial text-xl font-bold text-[#0F291E] min-w-[120px]">
                      {getDayLabel(day)}
                    </span>
                    {!isEditingHours && getDayNote(day) && (
                      <span className="text-xs text-[#526056] hidden md:inline">
                        • {getDayNote(day)}
                      </span>
                    )}
                  </div>

                  {!isEditingHours ? (
                    <div className="flex items-center gap-3">
                      {day.isClosed ? (
                        <span className="px-3 py-1 rounded-lg bg-[#A8332A]/15 text-[#A8332A] font-mono-price text-xs font-bold">
                          {dict.hoursSection.closedStatus}
                        </span>
                      ) : (
                        <>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#2E6F40]/15 text-[#2E6F40] text-[11px] font-bold">
                            {dict.hoursSection.openStatus}
                          </span>
                          <span
                            dir="ltr"
                            className="font-mono-price text-sm sm:text-base font-bold text-[#0F291E]"
                          >
                            {day.openTime} – {day.closeTime}
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3">
                      <label className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14231B] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!day.isClosed}
                          onChange={(e) =>
                            handleFieldChange(idx, "isClosed", !e.target.checked)
                          }
                          className="accent-[#0F291E]"
                        />
                        <span>{dict.hoursSection.openStatus}</span>
                      </label>

                      {!day.isClosed && (
                        <div className="flex items-center gap-2" dir="ltr">
                          <input
                            type="time"
                            value={day.openTime}
                            onChange={(e) =>
                              handleFieldChange(idx, "openTime", e.target.value)
                            }
                            className="px-2.5 py-1 rounded-lg border border-[#C89D54]/50 bg-white font-mono-price text-xs"
                          />
                          <span>–</span>
                          <input
                            type="time"
                            value={day.closeTime}
                            onChange={(e) =>
                              handleFieldChange(idx, "closeTime", e.target.value)
                            }
                            className="px-2.5 py-1 rounded-lg border border-[#C89D54]/50 bg-white font-mono-price text-xs"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Footer Bar inside Hours Card */}
            <div className="px-6 py-4 bg-[#EFE8DC] border-t border-[#C89D54]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0F291E] font-medium">
              <span>{dict.hoursSection.continuousServiceBadge}</span>
              <span className="font-mono-price font-bold" dir="ltr">
                RESTAURANT 7 • +212 6 36 03 68 68
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
