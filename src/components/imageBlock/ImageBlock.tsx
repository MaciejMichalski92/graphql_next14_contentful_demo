import { Section } from "@radix-ui/themes";
import type { ImageProps } from "@/src/types/shared";
import Image from "next/image";

interface ImageBlockProps {
  image: ImageProps;
}

export const ImageBlock = ({ image }: ImageBlockProps) => {
  return (
    <Section>
      <Image src={image.src} alt={image.alt || ""} fill />
    </Section>
  );
};
