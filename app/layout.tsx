import "./globals.css";
import { Inter } from "next/font/google";

import "@radix-ui/themes/styles.css";
import { Providers } from "@/src/redux/providers";
import { type ReactNode } from "react";
import { AppWithProviders } from "@/src/components/app/AppWithProviders";

export const metadata = {
  title: `Dzikie Harce`,
  description: `Strona główna, Dzikie harce - przedszkole`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    //toDo: lang i18n
    <html lang="pl" className={inter.variable}>
      <body>
        <Providers>
          <AppWithProviders>{children}</AppWithProviders>
        </Providers>
      </body>
    </html>
  );
}
