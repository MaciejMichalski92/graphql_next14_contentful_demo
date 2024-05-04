import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Box, Flex, Switch, Text, Tooltip } from "@radix-ui/themes";
import { DesktopMenu, MobileMenu } from "@/src/components/menu";

export const Header = () => {
  const themeValue = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const defaultChecked = themeValue !== "light";

  return (
    <header>
      <Flex
        align="center"
        justify="between"
        p={{ xs: "2", sm: "3", md: "5", initial: "1" }}
      >
        <Box>
          <MobileMenu />
          <DesktopMenu />
        </Box>
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
