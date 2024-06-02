"use client";
import {
  CustomImage,
  Gallery,
  HeaderSection as IHeaderSection,
  ImageBlock as IImageBlock,
  Link,
  OfferSection,
  OfferTile,
  SectionWithImage,
  TextSection,
  TextBlock,
  Tile,
} from "@/src/types/schema";
import { HeaderSection } from "../headerSection";
import { mapHeader } from "@/lib/utils/mappers/mapHeader";
import { ImageBlock } from "../imageBlock/ImageBlock";
import { mapImageBlock } from "@/lib/utils/mappers/mapImageBlock";

export type DynamicContentUnion =
  | CustomImage
  | Gallery
  | IHeaderSection
  | IImageBlock
  | Link
  | OfferSection
  | OfferTile
  | SectionWithImage
  | TextSection
  | TextBlock
  | Tile;

type TypeName =
  | Pick<CustomImage, "__typename">
  | Pick<Gallery, "__typename">
  | Pick<IHeaderSection, "__typename">
  | Pick<IImageBlock, "__typename">
  | Pick<Link, "__typename">
  | Pick<OfferSection, "__typename">
  | Pick<OfferTile, "__typename">
  | Pick<SectionWithImage, "__typename">
  | Pick<TextSection, "__typename">
  | Pick<TextBlock, "__typename">
  | Pick<Tile, "__typename">;

interface DynamicContentProps<T extends TypeName> {
  data: T;
}

export const DynamicContent = <T extends TypeName>({
  data,
}: DynamicContentProps<T>) => {
  switch (data.__typename) {
    case "CustomImage":
      return <p>CustomImage</p>;
    case "Gallery":
      return <p>Gallery</p>;
    case "HeaderSection":
      const headerProps = mapHeader(data as IHeaderSection);

      return <HeaderSection {...headerProps} />;
    case "ImageBlock":
      const imageProps = mapImageBlock(data as IImageBlock);
      return <ImageBlock {...imageProps} />;
    case "Link":
      return <p>Link</p>;
    case "OfferSection":
      return <p>OfferSection</p>;
    case "OfferTile":
      return <p>OfferTile</p>;
    case "SectionWithImage":
      return <p>SectionWithImage</p>;
    case "TextSection":
      return <p>TextSection</p>;
    case "TextBlock":
      return <p>TextBlock</p>;
    case "Tile":
      return <p>Tile</p>;
    default:
      return <p>Default</p>;
  }
};
