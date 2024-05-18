"use client";
import { Theme } from "@radix-ui/themes";
import { Footer, type FooterProps, Header } from "@/src/components";
import { type ReactNode } from "react";
import { useAppSelector } from "@/src/redux/hooks";
import { selectTheme } from "@/src/redux/themeSlice";
import { ImageProps } from "@/src/types/shared";

interface AppWithThemeProvidersProps {
  children: ReactNode;
  footerProps: FooterProps | undefined;
  headerImage: ImageProps;
}

/**Note: The problem with the Next14 app approach is when you want fetch CMS data on server side only, there cannot be "use client" directive, but I have to use client side also for page theme, that is why I used fetch inside the layout component, and created AppWithThemeProviders as a wrapper for the Theme component
 */
export const AppWithThemeProviders = ({
  children,
  footerProps,
  headerImage,
}: AppWithThemeProvidersProps) => {
  const theme = useAppSelector(selectTheme);

  return (
    <Theme accentColor="brown" radius="small" appearance={theme}>
      <Header image={headerImage} />
      <main className="min-h-screen">{children}</main>
      {footerProps && <Footer {...footerProps} />}
    </Theme>
  );
};
