import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Box, Flex, Switch, Text, Tooltip, Section } from "@radix-ui/themes";
import { DesktopMenu, MobileMenu } from "@/src/components/menu";
import { useDeviceDimensions } from "@/lib/hooks/useDeviceDimensions";
import { ImageBlock } from "@/src/components/imageBlock/ImageBlock";
import { gql } from "@apollo/client";
import { Spinner } from "@radix-ui/themes";
import { client } from "@/lib/apollo-client";
import { imageBlockQuery } from "@/lib/queries/imageBlock";

const GET_IMAGE_BLOCK = gql(imageBlockQuery("2kBKfEHjwnuUNrJ6WYcpiF"));

export const Header = () => {
  const themeValue = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { isMobile, width } = useDeviceDimensions();

  const defaultChecked = themeValue !== "light";

  if (loading) return <Spinner />;

  return (
    <header>
      <Flex
        align="center"
        justify="between"
        p={{ xs: "2", sm: "3", md: "5", initial: "1" }}
      >
        <Box>{isMobile ? <MobileMenu /> : <DesktopMenu />}</Box>
        <Flex align="center">
          {/* toDo add i18n to the text */}
          <Text mr="2">Wygląd</Text>
          {/* toDo add i18n to the label */}
          <Tooltip content={themeValue}>
            <Switch
              size="1"
              radius="full"
              defaultChecked={defaultChecked}
              onClick={() => dispatch(switchTheme())}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </header>
  );
};
