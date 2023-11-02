import { Flex } from "@chakra-ui/react";

import { Text } from "~/components";

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      bg="primary.main"
      px="50px"
      py="20px"
    >
      <Text fontSize="14px" color="white">
        Created by Adyptation Inc. 2023
      </Text>
    </Flex>
  );
};

export default Footer;
