import { Container, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";

const Bord = () => {
  return (
    <>
      <Container w={"container.xl"} justifyContent={"space-between"}>
        <Flex
          my="8"
          gap={20}
          gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))"
        >
          <Text fontSize={"5xl"}> Board Activity </Text>

          <Button colorScheme="teal">Short</Button>
        </Flex>
      </Container>
    </>
  );
};

export default Bord;
