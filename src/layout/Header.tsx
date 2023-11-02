import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Header: React.FC = () => {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Flex
      as="header"
      width="full"
      height="72px"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      bg="primary.main"
      px="50px"
    >
      <Box width="150px" height="48px">
        <Image src="/assets/logo_white.svg" width="100%" height="100%" alt="logo-white" />
      </Box>
      <Box width="45px" height="45px">
        <Menu closeOnSelect={false}>
          <MenuButton>
            <Avatar name={user?.name} src={user?.picture} />
          </MenuButton>
          <MenuList color="#FFF" backgroundColor="#808A91">
            <MenuItem
              color="#FFF"
              backgroundColor="#808A91"
              _focus={{ background: "#91A1AC !important" }}
              paddingX="30px"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              <Image
                src="/assets/sign-out.svg"
                width="40px"
                height="40px"
                marginRight={10}
                alt="sign-out"
              />
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
