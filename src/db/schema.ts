import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export interface OpeningHourDay {
  dayKey: string;
  dayFr: string;
  dayEn: string;
  dayAr: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
  noteFr?: string;
  noteEn?: string;
  noteAr?: string;
}

export interface SocialLinksConfig {
  instagram: string;
  facebook: string;
  tripadvisor: string;
  googleMaps: string;
  whatsapp: string;
}

export const menuCategories = pgTable("menu_categories", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr").notNull(),
  nameAr: text("name_ar").notNull(),
  subtitleEn: text("subtitle_en").notNull(),
  subtitleFr: text("subtitle_fr").notNull(),
  subtitleAr: text("subtitle_ar").notNull(),
  heroImage: text("hero_image").notNull(),
  displayOrder: integer("display_order").notNull().default(0),
});

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  categorySlug: text("category_slug").notNull(),
  nameEn: text("name_en").notNull(),
  nameFr: text("name_fr").notNull(),
  nameAr: text("name_ar").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionFr: text("description_fr").notNull(),
  descriptionAr: text("description_ar").notNull(),
  priceMad: integer("price_mad"), // null means "Ask for price" / "Prix sur demande"
  imageUrl: text("image_url").notNull(),
  isSignature: boolean("is_signature").notNull().default(false),
  badgeEn: text("badge_en"),
  badgeFr: text("badge_fr"),
  badgeAr: text("badge_ar"),
  displayOrder: integer("display_order").notNull().default(0),
});

export const restaurantSettings = pgTable("restaurant_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  restaurantName: text("restaurant_name").notNull().default("RESTAURANT 7"),
  phoneDisplay: text("phone_display").notNull().default("+212 6 36 03 68 68"),
  phoneDial: text("phone_dial").notNull().default("+212636036868"),
  whatsappNumber: text("whatsapp_number").notNull().default("212636036868"),
  plusCode: text("plus_code").notNull().default("Q32J+HQ4"),
  locationText: text("location_text").notNull().default("Ait Toughtach, Morocco"),
  googleRating: text("google_rating").notNull().default("4.2"),
  googleReviewsCount: integer("google_reviews_count").notNull().default(58),
  priceRangeText: text("price_range_text").notNull().default("MAD 50–100"),
  openingHours: jsonb("opening_hours").$type<OpeningHourDay[]>().notNull(),
  socialLinks: jsonb("social_links").$type<SocialLinksConfig>().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tableInquiries = pgTable("table_inquiries", {
  id: serial("id").primaryKey(),
  guestName: text("guest_name").notNull(),
  guestPhone: text("guest_phone").notNull(),
  partySize: integer("party_size").notNull().default(2),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  selectedDishes: text("selected_dishes"), // JSON or comma-separated list of dishes
  specialNotes: text("special_notes"),
  inquiryType: text("inquiry_type").notNull().default("reservation"), // reservation | price_inquiry | preorder
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
