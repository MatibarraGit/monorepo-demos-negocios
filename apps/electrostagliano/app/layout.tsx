import type { Metadata } from "next";
import "./globals.css";
import { LayoutComponent } from "@repo/catalog-core/components/LayoutComponent";

const SITE_NAME = "Elektro Stagliano";
const SITE_DESCRIPTION = "Electrodomésticos, herramientas, bicicletas y artículos para el hogar. Catálogo online de Elektro Stagliano.";
// TODO: reemplazar por el dominio real una vez que el cliente lo defina/compre.
const SITE_URL = "https://elektrostagliano.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Catálogo online`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },

  creator: "Matías Ibarra",
  authors: [{ name: "Matías Ibarra" }],

  generator: "Next.js",
  keywords: [
    "",
  ],

  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo.webp",
        width: 480,
        height: 480,
        alt: SITE_NAME,
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutComponent>
      {children}
    </LayoutComponent>
  );
}