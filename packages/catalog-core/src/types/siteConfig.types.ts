export type BranchType = {
  id: string;
  name: string;
  tile: string;
  phone?: string;
  phoneDisplay?: string;
  address: string;
  addressHref: string;
  image: string;
  imageAlt: string;
};

export type ContactType = {
  hours: HoursType[];
  contactEmail?: string;
}

export type HoursType = {
  days: string;
  hours: string
}

export type MainBranchType = {
  id: string;
  name: string;
  tile: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  addressHref: string;
  image: string;
  imageAlt: string;
};

export type SiteConfigType = {
  name: string;
  description: string;
  contact: ContactType;
  social: {
    instagram: string;
    instagramHref: string;
    facebook: string;
    facebookHref: string;
  };
  mainBranch: MainBranchType;
  branches: BranchType[];
  whatsappDefaultMessage: string;
  navLinks: { href: string; label: string }[];
};