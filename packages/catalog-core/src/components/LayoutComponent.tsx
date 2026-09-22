import { ReactNode } from "react";

import { THEME_INIT_SCRIPT } from "../libs/theme";

export function LayoutComponent({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: el script de abajo escribe `data-theme` en el
    // <html> antes de que React hidrate, así que el markup del server no coincide.
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
