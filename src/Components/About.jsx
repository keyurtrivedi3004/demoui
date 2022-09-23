import { GridItem, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <VStack
        w="full"
        h="30vh"
        p={10}
        spacing={10}
        bg={"gray.300"}
        align="flex-start"
      >
        <VStack spacing={2} align="flex-start"></VStack>
        <SimpleGrid column={2} columnGap={3} rowGap={4}>
          <GridItem colSpan={1}>
            <Text ml={300} fontSize={"6xl"}>
              ABOUT US
            </Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              perferendis id reprehenderit porro amet iusto modi nam sint
              molestiae distinctio! Nam accusantium ad quae nobis itaque tempora
              id quia animi!
            </Text>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default About;
