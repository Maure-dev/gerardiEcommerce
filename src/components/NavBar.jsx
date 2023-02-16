import React from "react";
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
                <MenuItem minH="60px">
                  <Link to={`/category/${"HP"}`}>
                    <span>HP</span>
                  </Link>
                </MenuItem>
                <MenuItem minH="60px">
                  <Link to={`/category/${"Lenovo"}`}>
                    <span>Lenovo</span>
                  </Link>
                </MenuItem>
                <MenuItem minH="60px">
                  <Link to={`/category/${"Acer"}`}>
                    <span>Acer</span>
                  </Link>
                </MenuItem>
                <MenuItem minH="60px">
                  <Link to={`/category/${"LG"}`}>
                    <span>LG</span>
                  </Link>
                </MenuItem>
                <MenuItem minH="60px">
                  <Link to={`/category/${"Samsung"}`}>
                    <span>Samsung</span>
                  </Link>
                </MenuItem>
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
