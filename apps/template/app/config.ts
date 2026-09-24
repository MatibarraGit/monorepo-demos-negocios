import type { MainBranchType, SiteConfigType } from "@repo/catalog-core/types/siteConfig.types";

// Hago esto para poder usar el tipado de MainBranchType, el cual tiene phone y phoneDisplay obligatorios.
const mainBranch: MainBranchType = {
  id: "",
  name: "",
  tile: "",
  address: "",
  addressHref: "",
  phoneDisplay: "",
  phone: "",
  image: "",
  imageAlt: "",
}

export const siteConfig: SiteConfigType = {
  name: "",
  description: "",

  contact: {
    hours: [
      { days: "", hours: "" },
      { days: "Domingos", hours: "Cerrado" },
    ],
    contactEmail: "",
  },

  social: {
    instagram: "",
    instagramHref: "",
    facebook: "",
    facebookHref: "",
  },

  mainBranch: mainBranch,
  branches: [
    mainBranch
  ],

  whatsappDefaultMessage: "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};