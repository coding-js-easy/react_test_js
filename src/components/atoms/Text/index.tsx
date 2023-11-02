import React from "react";

import { TextProps as ChakraTextProps, Text as ChakraText } from "@chakra-ui/react";

export const Text: React.FC<ChakraTextProps> = props => {
  return <ChakraText fontFamily={"Open Sans, sans-serif"} {...props} />;
};
