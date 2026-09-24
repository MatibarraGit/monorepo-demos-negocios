import type { MainBranchType, SiteConfigType } from "@repo/catalog-core/types/siteConfig.types";

const mainBranch: MainBranchType = {
  id: "35",
  name: "Sucursal Kilómetro 35",
  tile: "Kilómetro 35",
  address: "Av. Río de la Plata 8005, Virrey del Pino, Buenos Aires",
  addressHref: "https://maps.app.goo.gl/zE5eYrunGGoV9qXh8",
  phoneDisplay: "+54 9 11 2745-4711",
  phone: "+5491127454711",
  image: "/sucursal-35-1.png",
  imageAlt: "Frente del salón de ventas de Montecarlo Hogar en el Kilómetro 35",
}

export const siteConfig: SiteConfigType = {
  name: "Montecarlo Hogar",
  description: "Mayorista y minorista de electrodomésticos, muebles, colchones, artículos de ferretería, bazar y más!",

  contact: {
    hours: [
      { days: "Lunes a sábados", hours: "09:00 – 18:00" },
      { days: "Domingos", hours: "Cerrado" },
    ],
    contactEmail: "administracion@montecarlohogar.com",
  },

  social: {
    instagram: "@montecarlohogar",
    instagramHref: "https://www.instagram.com/montecarlohogar",
    facebook: "Montecarlo hogar",
    facebookHref: "https://www.facebook.com/MontecarloHogar",
  },

  mainBranch: mainBranch,
  branches: [
    mainBranch,
    {
      id: "38",
      name: "Sucursal Kilómetro 38",
      tile: "Kilómetro 38",
      address: "Hugo Wast 814, Virrey del Pino, Buenos Aires",
      addressHref: "https://maps.app.goo.gl/vrc6DnLs3FMLi97R7",
      phoneDisplay: "+54 9 11 6418-0648",
      phone: "+5491164180648",
      image: "/sucursal-38-1.png",
      imageAlt: "Frente del salón de ventas de Montecarlo Hogar en el Kilómetro 38",
    },
    {
      id: "44",
      name: "Sucursal Kilómetro 44",
      tile: "Kilómetro 44",
      address: "Av. Brig. Gral. Juan Manuel de Rosas 27349, Virrey del Pino, Buenos Aires",
      addressHref: "https://maps.app.goo.gl/pkzW6d2RA8394wUg7",
      phoneDisplay: "+54 9 11 3440-8806",
      phone: "+5491134408806",
      image: "/sucursal-44-1.png",
      imageAlt: "Frente del salón de ventas de Montecarlo Hogar en el Kilómetro 44",
    }
  ],

  whatsappDefaultMessage: "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};