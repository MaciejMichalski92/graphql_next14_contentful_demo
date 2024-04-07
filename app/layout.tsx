import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import { Footer } from "@/src/components/Footer";

export const metadata = {
  title: `Dzikie Harce`,
  description: `Strona główna, Dzikie harce - przedszkole`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //toDo: lang i18n
    <html lang="pl" className={inter.variable}>
      <body>
        <header>dummy header</header>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
        <Footer title={""} socials={[]} address={""} />
      </body>
    </html>
  );
}
