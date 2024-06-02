import { Section } from "@radix-ui/themes";
import type { ImageProps } from "@/src/types/shared";
import Image from "next/image";

export interface ImageBlockProps {
  image: ImageProps;
  mainText: string;
  smallDescription: string;
  label: string;
}

export const ImageBlock = ({ image }: ImageBlockProps) => {
  return (
    <Section position="relative" height="500px">
      <Image src={image.src} alt={image.alt || ""} fill />
    </Section>
  );
};
