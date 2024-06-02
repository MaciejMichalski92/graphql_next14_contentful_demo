import { FooterProps } from "@/src/components";
import { Footer } from "@/src/types/schema";

export const mapFooter = (data: {
  footer: Footer;
}): FooterProps | undefined => {
  if (!data) return undefined;

  const {
    footer: {
      title,
      description,
      address,
      socialsCollection,
      sys: { id },
    },
  } = data;

  return {
    socialItems: socialsCollection?.items,
    title: title || "",
    description: description || "",
    address: address || "",
    id: id || "",
  };
};
