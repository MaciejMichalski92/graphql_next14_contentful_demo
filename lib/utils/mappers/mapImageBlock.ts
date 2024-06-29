import { ImageBlockProps } from "@/src/components/imageBlock/ImageBlock";
import { ImageBlock } from "@/src/types/schema";

// toDo add better guards to the incoming content
export const mapImageBlock = (data: ImageBlock): ImageBlockProps => {
  const { image, mainText, smallDescription, label } = data;
  return {
    image: { src: image?.image?.url || "", alt: image?.altText || "" },
    mainText: mainText || "",
    smallDescription: smallDescription || "",
    label: label || "",
  };
};
