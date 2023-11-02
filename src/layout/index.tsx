import type { ReactNode } from "react";

import { Box, Flex } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={22} minH={750}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
