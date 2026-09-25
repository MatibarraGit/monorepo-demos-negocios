"use client";

import { HomeComponent } from "@repo/catalog-core/components/HomeComponent"; 
import { siteConfig } from "./config";
import { DictionaryProvider } from "@repo/catalog-core/contexts/dictionary-context";
import dict from "./dict.json";
import products from "./products.json"

export default function Home() {
  return (
    <DictionaryProvider dictionary={dict}>
      <HomeComponent products={products} siteConfig={siteConfig} />
    </DictionaryProvider>
  );
}