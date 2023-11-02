import React from "react";

import { Menu as ChakraMenu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";

import { Heading } from "../../atoms/Heading";
import { ChevronDown } from "../../icons";

export interface MenuProps {
  items: { label: string; onClick: (label: string) => void }[];
  label: string;
}

export const Menu: React.FC<MenuProps> = ({ items, label }) => {
  return (
    <ChakraMenu>
      <MenuButton
        px={3}
        borderWidth={1}
        borderColor="primary.main"
        borderStyle="solid"
        borderRadius="md"
        height="45px"
        _hover={{ borderColor: "primary.700" }}
      >
        <Flex justifyContent="space-between" gap={10}>
          <Heading variant="secondary" fontSize={"20px"} fontWeight={600}>
            {label}
          </Heading>{" "}
          <ChevronDown />
        </Flex>
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem onClick={() => item.onClick(item.label)} key={`${item.label}_${index}`}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};
