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
import { pageQuery } from "@/lib/queries/page";
import { mapHeader } from "@/lib/utils/mappers/mapHeader";

const GET_FOOTER = gql(footerQuery);
const GET_PAGE = gql(pageQuery);

export const metadata = {
  title: `Dzikie Harce`,
  description: `Dzikie harce - przedszkole`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const [{ data: footerData }, { data: pageData }] = await Promise.all([
    client.query({ query: GET_FOOTER }),
    client.query({ query: GET_PAGE }),
  ]);

  // toDo make map with Switch case components from contentCollection.items
  // console.log(pageData.page.contentCollection.items);

  const footerProps = mapFooter(footerData);
  const headerProps = mapHeader(pageData.page.contentCollection.items[0]);

  return (
    //toDo: lang i18n
    <html lang="pl" className={inter.variable}>
      <body>
        <StoreProvider>
          <AppWithThemeProviders
            headerImage={{
              src: headerProps?.desktopUrl || "",
              alt: headerProps?.altText,
            }}
            footerProps={footerProps}
          >
            {children}
          </AppWithThemeProviders>
        </StoreProvider>
      </body>
    </html>
  );
};
export default RootLayout;
