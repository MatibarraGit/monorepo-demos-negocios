import Image from "next/image";
import { Clock, Mail, MapPin, Phone, SquareArrowOutUpRight } from "lucide-react";

import { Button } from "./ui";
import { buildWhatsAppUrl, cn } from "../libs";
import { BranchType, ContactType, HoursType, SiteConfigType } from "../types/siteConfig.types";
import { useDictionary } from "../contexts/dictionary-context";

export function ContactSection({ siteConfig }: { siteConfig: SiteConfigType }) {
  const { branches, contact, mainBranch } = siteConfig
  const dict = useDictionary()

  return (
    <section id="contacto" className="content-wrapper mt-16 scroll-mt-32">
      <div>
        <span className="text-secondary text-xs font-bold tracking-widest uppercase">
          Contacto
        </span>
        <h2 className="mt-2 text-3xl uppercase sm:text-4xl">Estamos para ayudarte</h2>
        <p className="mt-1 text-muted-foreground">
          {dict.ContactSection.p1}
        </p>
      </div>

      {branches.length > 1 ? (
        <BranchesComponent branches={branches} contact={contact} mainBranch={mainBranch} />
      ) : (
        <OneBranchComponent contact={contact} mainBranch={mainBranch} />
      )}

    </section>
  );
}

const BranchesComponent = ({ branches, contact, mainBranch }: { branches: BranchType[], contact: ContactType, mainBranch: BranchType }) => {
  return (
    <>
      {/* Datos comunes a las tres sucursales */}
      <div className="bg-primary text-primary-foreground mt-8 grid gap-6 rounded-2xl p-6 sm:grid-cols-2 sm:p-8">
        {/* `min-w-0` en el item del grid: el `truncate` del email no alcanza si
            la celda no puede achicarse por debajo de su min-content. */}
        <div className="flex min-w-0 items-start gap-3">
          <Mail className="mt-0.5 size-5 shrink-0" aria-hidden />
          <div className="min-w-0">
            <p className="font-bold">Email</p>
            <a
              href={`mailto:${contact.contactEmail}`}
              className="text-primary-foreground/80 hover:text-primary-foreground block truncate text-sm transition-colors"
            >
              {contact.contactEmail}
            </a>
            <p className="text-primary-foreground/60 mt-1 text-xs">
              Mismo email para todas las sucursales.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 items-start gap-3">
          <Clock className="mt-0.5 size-5 shrink-0" aria-hidden />
          <div className="min-w-0">
            <p className="font-bold">Horarios</p>
            <ul className="text-primary-foreground/80 text-sm">
              {contact.hours.map((entry: HoursType) => (
                <li key={entry.days}>
                  {entry.days}: {entry.hours}
                </li>
              ))}
            </ul>
            <p className="text-primary-foreground/60 mt-1 text-xs">
              Mismos horarios en todas las sucursales.
            </p>
          </div>
        </div>
      </div>

      {/* Una tarjeta por sucursal: imagen, dirección y teléfono propios */}
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch: BranchType) => (
          <li
            key={branch.id}
            className={cn(
              "border-border bg-card shadow-elevated flex flex-col overflow-hidden rounded-2xl border",
              branch.id === mainBranch.id 
              ? "md:row-start-2 md:col-span-2 lg:row-start-auto lg:col-span-1" 
              : "md:row-start-1 lg:row-start-auto"
            )}
          >
            <div className="relative">
              <Image
                src={branch.image}
                alt={branch.imageAlt}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="aspect-4/3 w-full object-cover"
              />
              <span className="bg-secondary text-secondary-foreground absolute top-3 left-3 rounded-md px-2 py-0.5 text-xs font-bold tracking-widest uppercase">
                Kilómetro {branch.id}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <h3 className="text-xl uppercase">{branch.name}</h3>

              <ul className="grid gap-3">
                <li className="flex items-start gap-3">
                  <MapPin className="text-secondary mt-0.5 size-5 shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-sm font-bold">Dirección</p>
                    <a
                      href={branch.addressHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {branch.address}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="text-secondary mt-0.5 size-5 shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-sm font-bold">Teléfono</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {branch.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>

              <Button asChild className="mt-auto w-full font-bold">
                <a
                  href={buildWhatsAppUrl(
                    branch.phone!,
                    `¡Hola! Estoy viendo el catálogo online y quería hacer una consulta sobre la ${branch.name}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/whatsapp-white.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    aria-hidden
                  />
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

const OneBranchComponent = ({ contact, mainBranch }: { contact: ContactType, mainBranch: BranchType }) => {
  return (
    <div className="grid gap-x-8 md:grid-cols-2 md:items-center md:mt-6 md:h-96">
      {/* Columna derecha: imagen */}
      <div className="h-96 my-4 relative overflow-hidden rounded-2xl md:my-0 md:order-last">
        <Image
          src={mainBranch.image}
          alt={mainBranch.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      
      {/* Columna izquierda: info + CTA */}
      <div className="h-full flex flex-col gap-6">
        <ul className="grid gap-4">
          <li className="flex items-start gap-3">
            <MapPin className="text-secondary mt-0.5 size-5 shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-bold">Dirección</p>
              <a
                href={mainBranch.addressHref}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {mainBranch.address}
                <SquareArrowOutUpRight width={18} height={18}/>
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Phone className="text-secondary mt-0.5 size-5 shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-bold">Teléfono</p>
              <a
                href={`tel:${mainBranch.phone}`}
                className="flex gap-2 items-center text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {mainBranch.phoneDisplay}
                <SquareArrowOutUpRight width={18} height={18}/>
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Clock className="text-secondary mt-0.5 size-5 shrink-0" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-bold">Horarios</p>
              <ul className="text-muted-foreground text-sm">
                {contact.hours.map((entry) => (
                  <li key={entry.days}>
                    {entry.days}: {entry.hours}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <Button asChild className="w-full mt-auto font-bold md:py-6">
          <a
            href={buildWhatsAppUrl(
              mainBranch.phone,
              "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta"
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/whatsapp-white.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
              aria-hidden
            />
            Escribir por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}