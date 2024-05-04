import "./globals.css";
import { Inter } from "next/font/google";
import { client } from "@/lib/apollo-client";
import { mapFooter } from "@/lib/utils/mappers/mapFooter";
import "@radix-ui/themes/styles.css";
import { StoreProvider } from "@/src/redux/providers";
import { type ReactNode } from "react";
import { AppWithThemeProviders } from "@/src/components/app/AppWithProviders";
import { gql } from "@apollo/client";
import { footerQuery } from "@/lib/queries/footer";

const GET_FOOTER = gql(footerQuery);

export const metadata = {
  title: `Dzikie Harce`,
  description: `Strona główna, Dzikie harce - przedszkole`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { data } = await client.query({ query: GET_FOOTER });

  const footerProps = mapFooter(data);

  return (
    //toDo: lang i18n
    <html lang="pl" className={inter.variable}>
      <body>
        <StoreProvider>
          <AppWithThemeProviders footerProps={footerProps}>
            {children}
          </AppWithThemeProviders>
        </StoreProvider>
      </body>
    </html>
  );
}
