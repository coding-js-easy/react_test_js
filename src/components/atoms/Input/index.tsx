import React, { useRef } from "react";

import { InputProps as ChakraInputProps, Input as ChakraInput, Flex } from "@chakra-ui/react";

import { Heading } from "../Heading";

interface InputProps extends ChakraInputProps {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ variant = "primary", label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex direction="column" gap={1}>
      {label && (
        <Heading
          variant="secondary"
          onClick={() => inputRef.current?.focus()}
          fontSize="sm"
          fontWeight="semibold"
        >
          {label}
        </Heading>
      )}
      <ChakraInput
        ref={inputRef}
        variant={variant}
        borderColor="primary.main"
        borderWidth={1}
        borderStyle="solid"
        height="36px"
        fontSize={16}
        px={3}
        borderRadius="md"
        _placeholder={{ color: "primary.main", opacity: 0.4 }}
        _hover={{ borderColor: "primary.700" }}
        {...props}
      />
    </Flex>
  );
};
