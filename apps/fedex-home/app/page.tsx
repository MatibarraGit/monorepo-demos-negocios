"use client";

import { HomeComponent } from "@repo/catalog-core/components/HomeComponent"; 
import { siteConfig } from "./config";

export default function Home() {
  return <HomeComponent productsData={[]} siteConfig={ siteConfig } />;
}