import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { selectTheme, switchTheme } from "@/src/redux/themeSlice";
import { Box, Flex, Switch, Text } from "@radix-ui/themes";

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
        <Box></Box>
        <Flex>
          <Text>Test</Text>
          <Switch
            size="1"
            radius="full"
            defaultChecked={defaultChecked}
            onClick={() => dispatch(switchTheme())}
          />
        </Flex>
      </Flex>
    </header>
  );
};
