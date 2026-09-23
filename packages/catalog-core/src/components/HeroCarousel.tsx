"use client";

import Image from "next/image";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui";
import { useDictionary } from "../contexts/dictionary-context";
import { buildWhatsAppUrl } from "../libs";
import { BranchType } from "../types/siteConfig.types";

/** Carrusel de destacados con autoplay (embla) — arranca la home. */
export function HeroCarousel({ mainBranch }: { mainBranch: BranchType }) {
  const dict = useDictionary()
  // Lazy init: el plugin se instancia una sola vez, no en cada render.
  const [autoplay] = useState(() => Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <section aria-label="Destacados" className="content-wrapper pt-6">
      <Carousel opts={{ loop: true }} plugins={[autoplay]}>
        <CarouselContent>
          {dict.HeroCarousel.slides.map((slide, index) => (
            <CarouselItem key={slide.title}>
              <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-90 lg:h-105">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  loading="eager"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="from-primary/95 via-primary/70 absolute inset-0 bg-linear-to-r to-transparent" />

                <div className="text-primary-foreground absolute inset-0 flex flex-col justify-center gap-3 p-6 sm:p-10 lg:max-w-2xl">
                  <span className="bg-secondary text-secondary-foreground w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                    {slide.eyebrow}
                  </span>
                  <h2 className="font-heading text-xl leading-tight font-bold uppercase xs:text-2xl sm:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="text-primary-foreground/85 max-w-md text-sm sm:text-base">
                    {slide.text}
                  </p>
                  <Button asChild variant="secondary" className="w-fit font-bold">
                    <a
                      href={buildWhatsAppUrl(`${mainBranch.phone}`, `¡Hola! Quiero consultar por ${slide.eyebrow}.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {slide.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 hidden cursor-pointer sm:flex" />
        <CarouselNext className="right-3 hidden cursor-pointer sm:flex" />
      </Carousel>
    </section>
  );
}
