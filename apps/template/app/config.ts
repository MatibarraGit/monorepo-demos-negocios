import type { SiteConfigInput } from "@repo/catalog-core/types/siteConfig.types";

export const siteConfig: SiteConfigInput = {
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

  branches: [
    {
      id: "",
      name: "",
      address: "",
      addressHref: "",
      phoneDisplay: "",
      phone: "",
      image: "",
      imageAlt: "",
    }
  ],

  whatsappDefaultMessage: "¡Hola! Estoy viendo el catálogo online y quería hacer una consulta.",

  navLinks: [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ],
};