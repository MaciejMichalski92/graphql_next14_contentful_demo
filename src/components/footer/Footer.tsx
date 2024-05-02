"use client";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Flex } from "@radix-ui/themes";

interface FooterProps {
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
  const val = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <footer>
      <Flex>
        <button onClick={() => dispatch(switchTheme())}>counter: {val}</button>
        <div>{title}</div>
        {description && <div>{description}</div>}
        {<div>{address}</div>}
      </Flex>
      <div>
        {socialItems?.map((item) => (
          <a key={item.title} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
};
