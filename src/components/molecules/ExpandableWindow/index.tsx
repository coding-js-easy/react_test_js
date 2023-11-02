import React, { ReactNode } from "react";

import {
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  UseDisclosureProps,
} from "@chakra-ui/react";

import { Heading } from "../../atoms/Heading";
import { Collapse, Expand } from "../../icons";

export interface ExpandableWindowProps {
  children: ReactNode;
  title: string;
  isExpandable?: boolean;
}

export const ExpandableWindow: React.FC<ExpandableWindowProps> = ({
  title,
  isExpandable = true,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <Window
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={title}
        isExpandable={isExpandable}
      >
        {children}
      </Window>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(5px)" backgroundColor="transparent" />
        <ModalContent
          shadow="none"
          backgroundColor="transparent"
          maxWidth="full"
          margin="auto"
          paddingX={10}
        >
          <Box
            paddingX={16}
            py={20}
            backgroundColor="white"
            shadow="4px 4px 0px 0px rgba(0, 0, 0, 0.33)"
          >
            <Window
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              title={title}
              isExpandable={isExpandable}
            >
              {children}
            </Window>
          </Box>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

type WindowProps = ExpandableWindowProps & UseDisclosureProps;

const Window: React.FC<WindowProps> = ({
  title,
  isExpandable,
  children,
  onClose,
  onOpen,
  isOpen,
}) => {
  return (
    <Box>
      <Flex
        backgroundColor="primary.main"
        alignItems="center"
        justifyContent="space-between"
        height={58}
        borderTopLeftRadius={10}
        borderBottomRightRadius={10}
        paddingLeft={6}
        paddingRight={4}
      >
        <Heading
          color="white"
          variant="secondary"
          fontSize="2xl"
          textTransform="uppercase"
          fontWeight={500}
        >
          {title}
        </Heading>
        {isExpandable && isOpen ? (
          <Collapse name="collapse" onClick={onClose} cursor="pointer" height={40} width={40} />
        ) : (
          <Expand name="expand" onClick={onOpen} cursor="pointer" height={40} width={40} />
        )}
      </Flex>
      {children}
    </Box>
  );
};
