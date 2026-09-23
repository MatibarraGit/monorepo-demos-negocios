"use client";

import { HomeComponent } from "@repo/catalog-core/components/HomeComponent"; 
import { siteConfig } from "./config";
import { DictionaryProvider } from "@repo/catalog-core/contexts/dictionary-context";
import dict from "./dict.json";
import products from "./products.json"

export default function Home() {
  const config = { ...siteConfig, mainBranch: siteConfig.branches[0]! }

  return (
    <DictionaryProvider dictionary={dict}>
      <HomeComponent products={products} siteConfig={config} />
    </DictionaryProvider>
  );
}