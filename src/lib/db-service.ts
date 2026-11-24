import { db } from "@/db";
import {
  menuCategories,
  menuItems,
  restaurantSettings,
  tableInquiries,
  type OpeningHourDay,
  type SocialLinksConfig,
} from "@/db/schema";
import {
  SEED_CATEGORIES,
  SEED_MENU_ITEMS,
  INITIAL_OPENING_HOURS,
  INITIAL_SOCIAL_LINKS,
} from "./restaurant-data";
import { asc, eq, desc } from "drizzle-orm";

export async function ensureSeededAndLoadData() {
  try {
    // 1. Check categories
    let categories = await db
      .select()
      .from(menuCategories)
      .orderBy(asc(menuCategories.displayOrder));

    if (categories.length === 0) {
      await db.insert(menuCategories).values(SEED_CATEGORIES).onConflictDoNothing();
      categories = await db
        .select()
        .from(menuCategories)
        .orderBy(asc(menuCategories.displayOrder));
    }

    // 2. Check menu items
    let items = await db
      .select()
      .from(menuItems)
      .orderBy(asc(menuItems.displayOrder));

    if (items.length === 0) {
      await db.insert(menuItems).values(SEED_MENU_ITEMS);
      items = await db
        .select()
        .from(menuItems)
        .orderBy(asc(menuItems.displayOrder));
    }

    // 3. Check restaurant settings
    let settingsRows = await db
      .select()
      .from(restaurantSettings)
      .where(eq(restaurantSettings.key, "main"));

    if (settingsRows.length === 0) {
      await db
        .insert(restaurantSettings)
        .values({
          key: "main",
          restaurantName: "RESTAURANT 7",
          phoneDisplay: "+212 6 36 03 68 68",
          phoneDial: "+212636036868",
          whatsappNumber: "212636036868",
          plusCode: "Q32J+HQ4",
          locationText: "Ait Toughtach, Morocco",
          googleRating: "4.2",
          googleReviewsCount: 58,
          priceRangeText: "MAD 50–100",
          openingHours: INITIAL_OPENING_HOURS,
          socialLinks: INITIAL_SOCIAL_LINKS,
        })
        .onConflictDoNothing();

      settingsRows = await db
        .select()
        .from(restaurantSettings)
        .where(eq(restaurantSettings.key, "main"));
    }

    const recentInquiries = await db
      .select()
      .from(tableInquiries)
      .orderBy(desc(tableInquiries.createdAt))
      .limit(10);

    const settings = settingsRows[0] ?? {
      id: 1,
      key: "main",
      restaurantName: "RESTAURANT 7",
      phoneDisplay: "+212 6 36 03 68 68",
      phoneDial: "+212636036868",
      whatsappNumber: "212636036868",
      plusCode: "Q32J+HQ4",
      locationText: "Ait Toughtach, Morocco",
      googleRating: "4.2",
      googleReviewsCount: 58,
      priceRangeText: "MAD 50–100",
      openingHours: INITIAL_OPENING_HOURS,
      socialLinks: INITIAL_SOCIAL_LINKS,
      updatedAt: new Date(),
    };

    return {
      categories,
      items,
      settings,
      recentInquiries,
    };
  } catch {
    // Fallback if tables are not pushed yet during static build
    return {
      categories: SEED_CATEGORIES.map((c, idx) => ({ id: idx + 1, ...c })),
      items: SEED_MENU_ITEMS.map((item, idx) => ({
        id: idx + 1,
        ...item,
        badgeEn: item.badgeEn ?? null,
        badgeFr: item.badgeFr ?? null,
        badgeAr: item.badgeAr ?? null,
      })),
      settings: {
        id: 1,
        key: "main",
        restaurantName: "RESTAURANT 7",
        phoneDisplay: "+212 6 36 03 68 68",
        phoneDial: "+212636036868",
        whatsappNumber: "212636036868",
        plusCode: "Q32J+HQ4",
        locationText: "Ait Toughtach, Morocco",
        googleRating: "4.2",
        googleReviewsCount: 58,
        priceRangeText: "MAD 50–100",
        openingHours: INITIAL_OPENING_HOURS,
        socialLinks: INITIAL_SOCIAL_LINKS,
        updatedAt: new Date(),
      },
      recentInquiries: [],
    };
  }
}

export async function updateRestaurantSettings(payload: {
  openingHours?: OpeningHourDay[];
  socialLinks?: SocialLinksConfig;
}) {
  const existing = await db
    .select()
    .from(restaurantSettings)
    .where(eq(restaurantSettings.key, "main"));

  if (existing.length === 0) {
    const [inserted] = await db
      .insert(restaurantSettings)
      .values({
        key: "main",
        openingHours: payload.openingHours ?? INITIAL_OPENING_HOURS,
        socialLinks: payload.socialLinks ?? INITIAL_SOCIAL_LINKS,
      })
      .returning();
    return inserted;
  }

  const current = existing[0];
  const [updated] = await db
    .update(restaurantSettings)
    .set({
      openingHours: payload.openingHours ?? current.openingHours,
      socialLinks: payload.socialLinks ?? current.socialLinks,
      updatedAt: new Date(),
    })
    .where(eq(restaurantSettings.key, "main"))
    .returning();

  return updated;
}
