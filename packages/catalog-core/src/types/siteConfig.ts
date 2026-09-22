export type BranchType = {
  id: string;
  name: string;
  address: string;
  addressHref: string;
  image: string;
  imageAlt: string;
  // En caso de que haya varias sucursales, se usa un teléfono por sucursal
  phone?: string;
  phoneDisplay?: string;
};

export type ContactType = {
  hours: { days: string; hours: string }[];
  // Teléfono predeterminado, independientemente de si hay una o más sucursales
  phone: string;
  phoneDisplay: string;
  contactEmail?: string;
}

export type SiteConfig = {
  name: string;
  description: string;
  contact: ContactType;
  social: {
    instagram: string;
    facebook: string;
  };
  mainBranch: BranchType;
  branches?: BranchType[];
  whatsappDefaultMessage: string;
  navLinks: { href: string; label: string }[];
};