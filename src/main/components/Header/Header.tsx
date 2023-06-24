import React from "react";
import { Box } from "@chakra-ui/react";
import { PageAssets } from "../../../assets";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Box bg="#ffffff" w="100%" p={8} color="white">
      <img src={PageAssets.PageLogo} alt="Logo" className={classes.logo} />
    </Box>
  );
};

export default Header;
