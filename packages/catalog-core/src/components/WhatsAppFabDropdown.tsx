// Este componente se usa para los catálogos con más de una sucursal, el dropdown del fab despliega los distintos números por sucursales

"use client";

import Image from "next/image";
import { ChevronUp } from "lucide-react";

import { BranchKmTile } from "./BranchKmTile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui";
import { buildWhatsAppUrl } from "../libs";
import { BranchType } from "../types/siteConfig.types";

/**
 * Botón flotante de WhatsApp, siempre visible sobre el contenido. Como cada
 * sucursal atiende su propio número, el botón abre un menú para elegir a cuál
 * escribirle en vez de mandar a todos a la casa central.
 */
export function WhatsAppFabDrowpdown({ branches }: { branches: BranchType[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
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
        <ChevronUp
          className="hidden transition-transform duration-200 ease-out motion-reduce:transition-none sm:inline-block [[data-state=open]_&]:rotate-180"
          aria-hidden
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent side="top" align="end" className="w-72 max-w-[calc(100vw-2rem)]">
        <DropdownMenuLabel className="text-muted-foreground px-2 pt-1.5 pb-1 text-xs font-bold tracking-widest uppercase">
          Elegí la sucursal
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {branches.map((branch) => (
          <DropdownMenuItem key={branch.id} asChild className="p-2 py-4">
            <a
              href={buildWhatsAppUrl(
                branch.phone!,
                `¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <BranchKmTile id={branch.id} />
              <span className="min-w-0">
                <span className="block truncate font-bold">{branch.name}</span>
                <span className="text-muted-foreground block text-xs tabular-nums">
                  {branch.phoneDisplay}
                </span>
              </span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
