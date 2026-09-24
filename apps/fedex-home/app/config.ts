import type { MainBranchType, SiteConfigType } from "@repo/catalog-core/types/siteConfig.types";

const mainBranch: MainBranchType = {
  id: "1",
  name: "Única Sucursal",
  tile: "Banfield",
  phone: "+5491132406128",
  phoneDisplay: "+54 9 11 3240-6128",
  address: "Rodríguez Peña 309, Banfield, Buenos Aires",
  addressHref: "https://maps.app.goo.gl/6yP2N1GX26VvYT6N6",
  image: "/sucursal.png",
  imageAlt: "Frente del salón de ventas de Fedex Home Importaciones en Banfield",
}

export const siteConfig: SiteConfigType = {
  name: "Fedex Home",
  description: "Distribuidora mayorista y minorista de electrodomésticos, artículos del hogar, electrónica, juguetes, y más!",

  contact: {
    hours: [
      { days: "Lunes a sábados", hours: "10:00 – 18:00" },
      { days: "Domingos", hours: "Cerrado" },
    ]
  },

  social: {
    instagram: "@fedexhome.importaciones",
    instagramHref: "https://www.instagram.com/fedexhome.importaciones",
    facebook: "FEDEX HOME - Importaciones",
    facebookHref: "https://www.facebook.com/p/FEDEX-HOME-Importaciones-100063704005874",
  },

  mainBranch: mainBranch,
  branches: [mainBranch],

  whatsappDefaultMessage: "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};