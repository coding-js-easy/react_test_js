import { FC } from "react";

// Chakra imports
import { Button, Center, Flex, Icon, Input, useColorModeValue } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { Heading, Text } from "~/components";

const Login: FC = () => {
  const formBackground = useColorModeValue("white", "secondary.500");
  const boxBg = useColorModeValue("primary.100", "primary.100");
  const headingColor = useColorModeValue("white", "white");
  const btnColorScheme = useColorModeValue("orange", "orange");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        justifyContent="center"
        bg={formBackground}
        borderRadius={9}
        boxShadow="xl"
      >
        <Flex
          bg={boxBg}
          h="160px"
          w={{ base: "570px" }}
          borderTopRadius={8}
          justifyContent="center"
        >
          <Center>
            <Heading variant="primary" color={headingColor} textTransform="uppercase">
              WELCOME
            </Heading>
          </Center>
        </Flex>

        <Flex flexDirection="column" justifyContent="center" paddingY={12} paddingX={40}>
          <Center>
            <Text color="secondary.100" mb={6} fontWeight="400" fontSize="xl">
              Unbiased data, unmatched expertise.
            </Text>
          </Center>

          <Input placeholder="youremail@domain.com" type="email" variant="filled" mb={3} />
          <Input placeholder="***********" type="password" variant="filled" mb={6} />
          <Button colorScheme={btnColorScheme} mb={8}>
            Log In
          </Button>
          <Button fontSize="sm" mb={8} fontWeight="500" variant="outline">
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
