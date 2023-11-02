import React from "react";

import { ButtonProps as ChakraButtonProps, Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const color = variant === "primary" ? "yellow" : "primary";
  const defaultProps: ChakraButtonProps = {
    type: "button",
    borderRadius: "md",
    borderWidth: 1,
    height: 50,
    fontSize: 16,
    px: 4,
  };

  const defaultActiveProps: ChakraButtonProps["_active"] = {};
  const defaultHoverProps: ChakraButtonProps["_hover"] = {};

  if (variant === "primary") {
    defaultProps.color = "white";
    defaultProps.backgroundColor = color + ".main";
    defaultHoverProps.backgroundColor = color + ".600";
    defaultActiveProps.backgroundColor = color + ".700 !important";
  } else if (variant === "secondary") {
    defaultProps.color = color + ".main";
    defaultHoverProps.color = color + ".600";
    defaultActiveProps.color = color + ".700 !important";
  }
  return (
    <ChakraButton
      onClick={() => console.log("clicked", defaultActiveProps)}
      colorScheme={variant === "primary" ? "yellow" : "primary"}
      variant={variant === "primary" ? "solid" : "outline"}
      _active={defaultActiveProps}
      _hover={defaultHoverProps}
      {...defaultProps}
      {...props}
    />
  );
};
