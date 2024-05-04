"use client";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Box, Flex } from "@radix-ui/themes";
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
        wrap="wrap"
        gap="1"
        align="center"
        justify="center"
        p={{ xs: "2", sm: "3", md: "5", initial: "1" }}
      >
        <Box>{title}</Box>
        {description && <div>{description}</div>}
        {<div>{address}</div>}
        <div>
          {socialItems?.map((item) => (
            <a key={item.title} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
      </Flex>
    </footer>
  );
};
