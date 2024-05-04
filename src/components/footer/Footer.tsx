"use client";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Box, Flex, Text } from "@radix-ui/themes";
export interface FooterProps {
  title: string;
  // toDo change to LinkProps[]
  socialItems: any[];
  description?: string;
  address: string;
}

export const Footer = ({
  address,
  socialItems,
  title,
  description,
}: FooterProps) => {
  return (
    <footer>
      <Flex
        wrap={{ initial: "wrap", sm: "nowrap" }}
        gap={{ xs: "2", sm: "3", md: "5", lg: "9", initial: "1" }}
        align="center"
        justify={{ initial: "start", sm: "center" }}
        p={{ xs: "2", sm: "3", md: "5", initial: "1" }}
        style={{ color: "var(--gold-11)" }}
      >
        <Box>
          <Text>{title}</Text>
        </Box>
        <Box>{description && <Text>{description}</Text>}</Box>
        <Text>{address}</Text>
        <Flex
          style={{ justifySelf: "end" }}
          gap="2"
          align="center"
          justify="center"
        >
          {socialItems?.map((item) => (
            <a key={item.title} href={item.url}>
              {item.title}
            </a>
          ))}
        </Flex>
      </Flex>
    </footer>
  );
};
