import { Box, Button, Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex p={4} ps={20} pe={20} justifyContent="space-between">
      <HStack>
        <Box w="50px" ml={10}>
          <Image src="/navimage.png" />
        </Box>
      </HStack>

      <HStack spacing={14}>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Our Mission</Link>
        <Link>How To</Link>
        <Link>Sponser Us</Link>
      </HStack>

      <HStack>
        <Button color="white" bg="green.500">
          Sign in
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
