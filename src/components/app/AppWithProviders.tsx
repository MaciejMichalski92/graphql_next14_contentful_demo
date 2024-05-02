"use client";
import { Theme } from "@radix-ui/themes";
import { Footer } from "@/src/components/footer";
import { type ReactNode } from "react";
import { useAppSelector } from "@/src/redux/hooks";
import { selectTheme } from "@/src/redux/themeSlice";

export const AppWithProviders = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <Theme accentColor="brown" radius="small" appearance={theme}>
      <header>dummy header</header>
      <section className="min-h-screen">
        <main>{children}</main>
      </section>
      <Footer title={""} socialItems={[]} address={""} />
    </Theme>
  );
};
