// Este componente se utiliza para los catálogos con una sola sucursal

"use client";

import Image from "next/image";

import { buildWhatsAppUrl } from "../libs";
import { MainBranchType } from "../types/siteConfig.types";

export function WhatsAppFab({ mainBranch, whatsappDefaultMessage }: { mainBranch: MainBranchType, whatsappDefaultMessage: string }) {
  return (
    <a
      href={buildWhatsAppUrl(mainBranch.phone, whatsappDefaultMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="bg-whatsapp text-whatsapp-foreground focus-visible:ring-ring/50 fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full p-3 font-bold shadow-lg transition-transform duration-150 ease-out outline-none cursor-pointer hover:scale-105 focus-visible:ring-[3px] active:scale-97 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:right-6 sm:bottom-6"
    >
      <Image
        src="/icons/whatsapp-white.svg"
        alt=""
        className="size-7 md:size-8"
        width={80}
        height={80}
        aria-hidden
      />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}