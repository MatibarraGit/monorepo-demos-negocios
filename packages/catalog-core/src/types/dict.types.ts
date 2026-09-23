export interface DictionaryType {
  HeroCarousel: HeroCarousel;
  AboutSection: AboutSection;
  ContactSection: ContactSection;
}

export interface HeroCarousel {
  slides: {
    image: string;
    eyebrow: string;
    title: string;
    text: string;
    cta: string; 
  }[]
}

export interface AboutSection {
  title: string;
  p1: string;
  p2: string;
}

export interface ContactSection {
  p1: string;
}
