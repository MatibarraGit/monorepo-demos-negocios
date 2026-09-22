import type { SiteConfig } from "@repo/catalog-core/types/siteConfig";

export const siteConfig: SiteConfig = {
  name: "Fedex Home",
  description:
    "Distribuidora mayorista y minorista de electrodomésticos, artículos del hogar, electrónica, juguetes, y más!",

  contact: {
    hours: [
      { days: "Lunes a sábados", hours: "10:00 – 18:00" },
      { days: "Domingos", hours: "Cerrado" },
    ],
    phone: "+5491132406128",
    phoneDisplay: "+54 9 11 3240-6128",
    // contactEmail: "",
  },

  social: {
    instagram: "https://www.instagram.com/fedexhome.importaciones",
    facebook: "https://www.facebook.com/p/FEDEX-HOME-Importaciones-100063704005874",
  },

  mainBranch: {
    id: "1",
    name: "Única Sucursal",
    address: "Rodríguez Peña 309, Banfield, Buenos Aires",
    addressHref: "https://maps.app.goo.gl/6yP2N1GX26VvYT6N6",
    image: "/sucursal.png",
    imageAlt: "Frente del salón de ventas de Fedex Home Importaciones en Banfield",
  },

  whatsappDefaultMessage:
    "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};