"use client";

import { useMemo, useState } from "react";

import {
  AboutSection,
  CategoryFilter,
  ContactSection,
  HeroCarousel,
  ProductGrid,
  WhatsAppFab,
  WhatsAppFabDrowpdown
} from ".";

import { Footer, Header } from "../layout";
import { ALL_CATEGORIES, filterProducts, getUniqueCategories } from "../libs";
import type { ProductType } from "../types/product.types";
import { SiteConfigType } from "../types/siteConfig.types";

type HomeComponentType = { 
  products: ProductType[], 
  siteConfig: SiteConfigType
}

export function HomeComponent({ products, siteConfig }: HomeComponentType) {
  // Dataset estático — sin fetch, sin API. Todo el filtrado ocurre en el cliente.
  const categories = getUniqueCategories(products);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const filteredProducts = useMemo(
    () => filterProducts(products, { searchTerm, category: selectedCategory }),
    [products, searchTerm, selectedCategory]
  );

  return (
    <>
      <span id="top" />

      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} contact={siteConfig.contact} mainBranch={siteConfig.mainBranch} siteName={siteConfig.name} navLinks={siteConfig.navLinks} />

      <main className="flex-1">
        <HeroCarousel mainBranch={siteConfig.mainBranch} whatsappDefaultMessage={siteConfig.whatsappDefaultMessage} />

        <section id="catalogo" className="content-wrapper mt-16 scroll-mt-32">
          <div className="mb-6">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Catálogo
            </span>
            <h2 className="mt-2 text-3xl uppercase sm:text-4xl">
              Todo para tu hogar
            </h2>
          </div>

          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <CategoryFilter
              categories={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="lg:flex-1"
            />
            <p className="text-muted-foreground shrink-0 text-sm" aria-live="polite">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
            </p>
          </div>

          <ProductGrid products={filteredProducts} />
        </section>

        <AboutSection />

        <ContactSection siteConfig={siteConfig} />
      </main>

      <Footer siteConfig={siteConfig} />

      {siteConfig.branches !== undefined && siteConfig.branches.length > 1 ? (
        <WhatsAppFabDrowpdown branches={siteConfig.branches} />
      ) : (
        <WhatsAppFab mainBranch={siteConfig.mainBranch} whatsappDefaultMessage={siteConfig.whatsappDefaultMessage} />
      )}
    </>
  );
}
