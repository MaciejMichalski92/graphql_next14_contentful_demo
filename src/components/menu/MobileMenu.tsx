import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const MobileMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>…</DropdownMenu.Item>
          <DropdownMenu.Item>…</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
                <DropdownMenu.Arrow />
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>…</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
