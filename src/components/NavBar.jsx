import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Heading,
  Container,
  Flex,
  Image,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Container
        maxW="150rem"
        backgroundColor="#dcd3f0"
        color="#6b46c1"
        borderRadius="10rem"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100px"
        zIndex="10"
      >
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Link to={"/"}>
            <Image boxSize="100px" src="../../public/logo.png" />
          </Link>
          <Box p="2">
            <Link to={"/"}>
              <Heading fontFamily="Calibri" size="md">
                Gerardi Notebooks
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<HamburgerIcon />}
                colorScheme="purple"
                variant="outline"
                size="lg"
                m="5"
              >
                Categorías
              </MenuButton>
              <MenuList>
                <Link to={`/category/${"HP"}`}>
                  <MenuItem minH="60px" as="b" textTransform="uppercase">
                    <span>HP</span>
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Lenovo"}`}>
                  <MenuItem minH="60px" as="b" textTransform="uppercase">
                    <span>Lenovo</span>
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Acer"}`}>
                  <MenuItem minH="60px" as="b" textTransform="uppercase">
                    <span>Acer</span>
                  </MenuItem>
                </Link>
                <Link to={`/category/${"LG"}`}>
                  <MenuItem minH="60px" as="b" textTransform="uppercase">
                    <span>LG</span>
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Samsung"}`}>
                  <MenuItem minH="60px" as="b" textTransform="uppercase">
                    <span>Samsung</span>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
