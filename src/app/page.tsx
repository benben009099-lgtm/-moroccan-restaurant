import React from "react";
import { ensureSeededAndLoadData } from "@/lib/db-service";
import { Restaurant7Client } from "@/components/Restaurant7Client";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { categories, items, settings } = await ensureSeededAndLoadData();

  return (
    <Restaurant7Client
      initialCategories={categories}
      initialItems={items}
      initialOpeningHours={settings.openingHours}
      initialSocialLinks={settings.socialLinks}
    />
  );
}
