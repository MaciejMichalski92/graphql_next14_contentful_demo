"use client";
import { Box, Flex, Switch, Theme, Tooltip, Text } from "@radix-ui/themes";
import { Footer, type FooterProps, HeaderSection } from "@/src/components";
import { type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { useDeviceDimensions } from "@/lib/hooks/useDeviceDimensions";
import { DesktopMenu, MobileMenu } from "../menu";

interface AppWithThemeProvidersProps {
  children: ReactNode;
  footerProps: FooterProps | undefined;
}

/**Note: The problem with the Next14 app approach is when you want fetch CMS data on server side only, there cannot be "use client" directive, but I have to use client side also for page theme, that is why I used fetch inside the layout component, and created AppWithThemeProviders as a wrapper for the Theme component
 */
export const AppWithThemeProviders = ({
  children,
  footerProps,
}: AppWithThemeProvidersProps) => {
  const theme = useAppSelector(selectTheme);
  const themeValue = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { isMobile } = useDeviceDimensions();

  const defaultChecked = themeValue !== "light";
  return (
    <Theme accentColor="brown" radius="small" appearance={theme}>
      <Flex
        align="center"
        justify="between"
        p={{ xs: "2", sm: "3", md: "5", initial: "1" }}
      >
        <Box>{isMobile ? <MobileMenu /> : <DesktopMenu />}</Box>
        <Flex align="center">
          {/* toDo add i18n to the text */}
          <Text mr="2">Wygląd</Text>
          {/* toDo add i18n to the label */}
          <Tooltip content={themeValue}>
            <Switch
              size="1"
              radius="full"
              defaultChecked={defaultChecked}
              onClick={() => dispatch(switchTheme())}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <main className="min-h-screen">{children}</main>
      {footerProps && <Footer {...footerProps} />}
    </Theme>
  );
};
