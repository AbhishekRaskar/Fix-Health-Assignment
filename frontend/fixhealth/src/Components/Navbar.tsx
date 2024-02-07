import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../Images/Logo.png";
import Home from "./Home";
import Doctors from "./Doctors";
import Slider from "./Slider";
const Navbar = () => {
  return (
    <>
      <br />
      <Box px={4} w={"80%"} m={"auto"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image w={"12%"} src={Logo} />
          <Text color={"white"} fontWeight={"bold"}>
            Service
          </Text>
          <Text color={"white"} fontWeight={"bold"}>
            Doctors
          </Text>
          <Text color={"white"} fontWeight={"bold"}>
            Blogs
          </Text>
          <Text color={"white"} fontWeight={"bold"}>
            About
          </Text>
        </Flex>
      </Box>
      <Home />
      <Doctors />
      <br />
      <Slider />
      <br />
    </>
  );
};

export default Navbar;
