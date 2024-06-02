import { HeaderProps } from "@/src/components/headerSection";
import { HeaderSection } from "@/src/types/schema";

// toDo add types
export const mapHeader = (data: HeaderSection): HeaderProps => {
  const {
    // mobileImage: { url: mobileUrl }, toDo add mobile Image option
    backgroundImage,
    textContent,
  } = data;

  return {
    description: textContent?.description || "",
    title: textContent?.title || "",
    image: {
      src: backgroundImage?.image?.url || "",
      alt: backgroundImage?.altText || "",
    },
  };
};
