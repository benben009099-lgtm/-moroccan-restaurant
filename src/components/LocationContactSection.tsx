"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Copy,
  Check,
  Send,
  Utensils,
  Calendar,
  Clock,
  Users,
  X,
} from "lucide-react";
import { ZelligeSectionDivider } from "./MoroccanOrnament";
import type { Dictionary } from "@/lib/i18n";

interface LocationContactSectionProps {
  dict: Dictionary;
  selectedDishes: string[];
  onRemoveDish: (dishName: string) => void;
  preselectedInquiryType: "reservation" | "price_inquiry" | "preorder";
}

export function LocationContactSection({
  dict,
  selectedDishes,
  onRemoveDish,
  preselectedInquiryType,
}: LocationContactSectionProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [partySize, setPartySize] = useState(2);
  const [preferredDate, setPreferredDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [preferredTime, setPreferredTime] = useState("20:00");
  const [inquiryType, setInquiryType] = useState<
    "reservation" | "price_inquiry" | "preorder"
  >(preselectedInquiryType);
  const [specialNotes, setSpecialNotes] = useState("");
  const [alsoOpenWhatsapp, setAlsoOpenWhatsapp] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    setInquiryType(preselectedInquiryType);
  }, [preselectedInquiryType]);

  const handleCopyPlusCode = () => {
    navigator.clipboard?.writeText("Q32J+HQ4, Ait Toughtach, Morocco");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!guestName.trim() || !guestPhone.trim()) {
      setErrorMsg("Veuillez renseigner votre nom et numéro de téléphone.");
      return;
    }

    setSubmitting(true);
    try {
      const dishesString =
        selectedDishes.length > 0 ? selectedDishes.join(", ") : null;

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName,
          guestPhone,
          partySize,
          preferredDate,
          preferredTime,
          selectedDishes: dishesString,
          specialNotes,
          inquiryType,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmittedSuccess(true);

      if (alsoOpenWhatsapp) {
        const waText = `Bonjour RESTAURANT 7,\nNom: ${guestName}\nTél: ${guestPhone}\nObjet: ${inquiryType}\nConvives: ${partySize} (${preferredDate} à ${preferredTime})\nPlats: ${
          dishesString || "À définir"
        }\nNotes: ${specialNotes || "-"}`;
        window.open(
          `https://wa.me/212636036868?text=${encodeURIComponent(waText)}`,
          "_blank",
          "noopener,noreferrer"
        );
      }

      setGuestName("");
      setGuestPhone("");
      setSpecialNotes("");
    } catch {
      setErrorMsg(
        "Une erreur est survenue. Vous pouvez nous joindre directement au +212 6 36 03 68 68."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0F291E] text-[#FAF6F0] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-zellige-subtle opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#C89D54] mb-3">
            <MapPin className="w-4 h-4" />
            <span>{dict.locationSection.eyebrow}</span>
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-semibold text-[#FAF6F0] leading-tight">
            {dict.locationSection.title}
          </h2>
          <ZelligeSectionDivider dark />
          <p className="text-base text-[#FAF6F0]/80 leading-relaxed">
            {dict.locationSection.subtitle}
          </p>
        </div>

        {/* 12-Column Split: Left = Contact Details & Interactive Map | Right = Reservation & Price Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Address Cards, Action Buttons & Embedded Google Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Official Contact & Plus Code Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1F17] border border-[#C89D54]/40 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#C89D54]/20">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C89D54]">
                    MOROCCAN RESTAURANT
                  </span>
                  <h3 className="font-serif-editorial text-3xl font-bold text-[#FAF6F0] mt-1">
                    RESTAURANT 7
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPlusCode}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C89D54]/15 hover:bg-[#C89D54]/25 border border-[#C89D54]/45 text-[#C89D54] font-mono-price text-xs font-bold transition-all cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-[#4ade80]" />
                      <span>{dict.locationSection.copied} (Q32J+HQ4)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{dict.locationSection.copyPlusCode}</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Key Contact Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#0F291E]/70 border border-[#C89D54]/20">
                  <div className="text-xs text-[#C89D54] uppercase tracking-wider font-semibold mb-1">
                    {dict.locationSection.addressLabel}
                  </div>
                  <div className="font-semibold text-sm text-[#FAF6F0]">
                    Ait Toughtach, Morocco
                  </div>
                  <div className="font-mono-price text-xs text-[#FAF6F0]/70 mt-0.5">
                    Plus Code: Q32J+HQ4
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0F291E]/70 border border-[#C89D54]/20">
                  <div className="text-xs text-[#C89D54] uppercase tracking-wider font-semibold mb-1">
                    {dict.locationSection.phoneLabel}
                  </div>
                  <a
                    href="tel:+212636036868"
                    dir="ltr"
                    className="font-mono-price font-bold text-sm text-[#FAF6F0] hover:text-[#C89D54] block"
                  >
                    +212 6 36 03 68 68
                  </a>
                  <div className="text-xs text-[#4ade80] mt-0.5">
                    WhatsApp & Appel Direct
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0F291E]/70 border border-[#C89D54]/20">
                  <div className="text-xs text-[#C89D54] uppercase tracking-wider font-semibold mb-1">
                    {dict.locationSection.priceBenchmarkLabel}
                  </div>
                  <div className="font-mono-price font-bold text-sm text-[#FAF6F0]">
                    MAD 50–100
                  </div>
                  <div className="text-xs text-[#FAF6F0]/70 mt-0.5">
                    Google: 4.2/5 (58 avis)
                  </div>
                </div>
              </div>

              {/* 3 Action Buttons: Directions, Call, WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Q32J%2BHQ4+Ait+Toughtach+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C89D54] hover:bg-[#d8ae64] text-[#0B1F17] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{dict.locationSection.directionsBtn}</span>
                </a>

                <a
                  href="tel:+212636036868"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 border border-[#C89D54]/45 text-[#FAF6F0] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C89D54]" />
                  <span dir="ltr">+212 6 36 03 68 68</span>
                </a>

                <a
                  href="https://wa.me/212636036868?text=Bonjour%20RESTAURANT%207%20(Ait%20Toughtach)%2C%20je%20souhaite%20vous%20contacter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#2E6F40] hover:bg-[#36824b] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{dict.locationSection.whatsappBtn}</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Maps Embed Frame */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#C89D54]/45 shadow-2xl bg-[#0B1F17]">
              <div className="px-5 py-3 bg-[#0B1F17] border-b border-[#C89D54]/25 flex items-center justify-between text-xs">
                <span className="font-mono-price text-[#C89D54] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Q32J+HQ4, Ait Toughtach, Morocco — RESTAURANT 7</span>
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Q32J%2BHQ4+Ait+Toughtach+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF6F0]/80 hover:text-[#C89D54] underline"
                >
                  Google Maps ↗
                </a>
              </div>
              <iframe
                title="RESTAURANT 7 Google Maps Location - Q32J+HQ4, Ait Toughtach, Morocco"
                src="https://www.google.com/maps?q=Q32J%2BHQ4+Ait+Toughtach+Morocco&output=embed"
                className="w-full h-[350px] sm:h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Table Reservation & Dish Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF6F0] text-[#14231B] border-2 border-[#C89D54]/55 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B85338] mb-2">
                <Utensils className="w-4 h-4" />
                <span>RESTAURANT 7 • SERVICE CONCIERGERIE</span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#0F291E]">
                {dict.locationSection.inquiryFormTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#526056] mt-1 mb-6 leading-relaxed">
                {dict.locationSection.inquiryFormSubtitle}
              </p>

              {/* Selected Dishes Pills (if user added dishes from Menu) */}
              {selectedDishes.length > 0 && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#EFE8DC] border border-[#C89D54]/40">
                  <div className="text-xs font-bold text-[#0F291E] mb-2">
                    Plats sélectionnés ({selectedDishes.length}) :
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDishes.map((dish) => (
                      <span
                        key={dish}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F291E] text-[#FAF6F0] text-xs font-medium"
                      >
                        <span>{dish}</span>
                        <button
                          type="button"
                          onClick={() => onRemoveDish(dish)}
                          className="text-[#C89D54] hover:text-white cursor-pointer"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {submittedSuccess ? (
                <div className="p-6 rounded-2xl bg-[#2E6F40]/12 border border-[#2E6F40] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E6F40] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-editorial text-2xl font-bold text-[#0F291E]">
                    {dict.locationSection.inquirySuccessTitle}
                  </h4>
                  <p className="text-sm text-[#526056]">
                    {dict.locationSection.inquirySuccessMsg}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="https://wa.me/212636036868"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#2E6F40] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp +212 6 36 03 68 68</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedSuccess(false)}
                      className="py-3 px-4 rounded-xl bg-[#EFE8DC] text-[#0F291E] text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-[#A8332A]/10 border border-[#A8332A] text-[#A8332A] text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5">
                      {dict.locationSection.inquiryTypeLabel}
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) =>
                        setInquiryType(
                          e.target.value as
                            | "reservation"
                            | "price_inquiry"
                            | "preorder"
                        )
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-sm text-[#14231B] focus:outline-none focus:border-[#0F291E]"
                    >
                      <option value="reservation">
                        {dict.locationSection.typeReservation}
                      </option>
                      <option value="price_inquiry">
                        {dict.locationSection.typePriceInquiry}
                      </option>
                      <option value="preorder">
                        {dict.locationSection.typePreorder}
                      </option>
                    </select>
                  </div>

                  {/* Guest Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5">
                        {dict.locationSection.guestNameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder={dict.locationSection.guestNamePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-sm text-[#14231B] focus:outline-none focus:border-[#0F291E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5">
                        {dict.locationSection.guestPhoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+212 6..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-sm font-mono-price text-[#14231B] focus:outline-none focus:border-[#0F291E]"
                      />
                    </div>
                  </div>

                  {/* Party Size, Date & Time */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#B85338]" />
                        <span className="truncate">
                          {dict.locationSection.partySizeLabel}
                        </span>
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={40}
                        value={partySize}
                        onChange={(e) =>
                          setPartySize(Number(e.target.value) || 2)
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-sm font-mono-price text-[#14231B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#B85338]" />
                        <span className="truncate">
                          {dict.locationSection.dateLabel}
                        </span>
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-2.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-xs font-mono-price text-[#14231B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B85338]" />
                        <span className="truncate">
                          {dict.locationSection.timeLabel}
                        </span>
                      </label>
                      <input
                        type="time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-2.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-xs font-mono-price text-[#14231B]"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F291E] mb-1.5">
                      {dict.locationSection.notesLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder={dict.locationSection.notesPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C89D54]/50 text-sm text-[#14231B] focus:outline-none focus:border-[#0F291E]"
                    />
                  </div>

                  {/* Optional WhatsApp checkbox */}
                  <label className="flex items-center gap-2 text-xs text-[#526056] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alsoOpenWhatsapp}
                      onChange={(e) => setAlsoOpenWhatsapp(e.target.checked)}
                      className="accent-[#0F291E] w-4 h-4 rounded"
                    />
                    <span>{dict.locationSection.sendViaWhatsappToo}</span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#0F291E] hover:bg-[#163b2b] text-[#C89D54] font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? "..."
                        : dict.locationSection.submitInquiryBtn}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
