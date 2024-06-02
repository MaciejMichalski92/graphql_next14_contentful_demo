import { Text, Section } from "@radix-ui/themes";

import Image from "next/image";
import { ImageProps } from "@/src/types/shared";

export interface HeaderProps {
  image: ImageProps;
  title: string;
  description?: string;
}

export const HeaderSection = ({ image, title, description }: HeaderProps) => {
  return (
    <header>
      <Section height="70vh" p="0" position="relative">
        <Image alt={image.alt || ""} src={image.src} fill objectFit="contain" />
        <Text>{title}</Text>
        {description && <Text>{description}</Text>}
      </Section>
    </header>
  );
};
