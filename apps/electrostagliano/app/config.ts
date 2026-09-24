import type { MainBranchType, SiteConfigType } from "@repo/catalog-core/types/siteConfig.types";

const mainBranch: MainBranchType = {
  id: "CM",
  name: "Central Moreno",
  tile: "Moreno",
  address: "General Martín de Gainza 801, B1736 Moreno",
  addressHref: "https://maps.app.goo.gl/SSy7G6kaN2YV5xJ6Ab",
  phoneDisplay: "+54 9 11 4475-2840",
  phone: "+5491144752840",
  image: "/central.png",
  imageAlt: "Frente del depósito central de Elektro Stagliano en Moreno",
};

export const siteConfig: SiteConfigType = {
  name: "Elektro Stagliano",
  description: "Distribuidora mayorista de electrodomésticos, artículos del hogar, línea blanca y más!",

  contact: {
    hours: [
      { days: "Lunes a Viernes", hours: "09:00 a 16:45" },
      { days: "Sábados", hours: "09:00 a 13:45" },
      { days: "Domingos", hours: "Cerrado" },
    ],
    contactEmail: "elektrostaglianoadmi@gmail.com",
  },

  social: {
    instagram: "elektrostagliano.distribuidora",
    instagramHref: "https://www.instagram.com/elektrostagliano.distribuidora",
    facebook: "Elektro Stagliano",
    facebookHref: "https://www.facebook.com/p/Elektro-Stagliano-100088319352969",
  },

  mainBranch: mainBranch,
  branches: [
    mainBranch,
    {
      id: "SLE",
      name: "Sucursal Lanús Este",
      tile: "Lanús",
      address: "José Álvarez Condarco 1549, B1825 Monte Chingolo",
      addressHref: "https://maps.app.goo.gl/qHUbu7hCeoqMHb3W7",
      image: "/sucursal-lanus.png",
      imageAlt: "Frente de la sucursal de Elektro Stagliano en Lanús"
    },
    {
      id: "SC",
      name: "Sucursal Catán",
      tile: "Catán",
      address: "Brig. Gral. Juan Manuel de Rosas 14877, B1759 González Catán",
      addressHref: "https://maps.app.goo.gl/pPKLy2uFzBay8vfn7",
      image: "/image-icon.png",
      imageAlt: "Ícono de Imagen"
    }
  ],

  whatsappDefaultMessage: "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};