import React from "react";

import { HeadingProps as ChakraHeadingProps, Heading as ChakraHeading } from "@chakra-ui/react";

export interface HeadingProps extends ChakraHeadingProps {
  variant?: "primary" | "secondary";
}

export const Heading: React.FC<HeadingProps> = ({ variant = "primary", ...props }) => {
  return (
    <ChakraHeading
      fontFamily={variant === "primary" ? "Raleway, sans-serif" : "Lato, sans-serif"}
      {...props}
    />
  );
};
