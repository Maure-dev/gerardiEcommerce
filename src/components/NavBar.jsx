import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Grid,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Grid templateColumns="2fr 3fr" marginBottom="5">
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<HamburgerIcon />}
            colorScheme="purple"
            variant="outline"
            size="lg"
          >
            Categorías
          </MenuButton>
          <MenuList>
            <MenuItem minH="60px">
              <span>Accesorios</span>
            </MenuItem>
            <MenuItem minH="60px">
              <span>Conectividad</span>
            </MenuItem>
            <MenuItem minH="60px">
              <span>Periféricos</span>
            </MenuItem>
            <MenuItem minH="60px">
              <span>Hardware</span>
            </MenuItem>
            <MenuItem minH="60px">
              <span>Software</span>
            </MenuItem>
          </MenuList>
        </Menu>
        <CartWidget />
      </Grid>
    </>
  );
};

export default NavBar;
