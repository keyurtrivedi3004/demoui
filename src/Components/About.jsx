import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";

const About = () => {
  return (
    <Stack pt={10}>
      <Box pt={20} height={"40vh"} bg={"gray.300"}>
        <Flex justifyContent={"space-between"} ps={80} pe={80} mt={10}>
          <Box>
            <Text
              borderBottom={"4px"}
              ml={-140}
              fontWeight={"bold"}
              color="#64D6BD"
              fontSize="xx-large"
            >
              About Us
            </Text>
          </Box>
          <Box>
            <Flex direction="column">
              <Text ml="165px" color="black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, voluptates neque aliquam quisquam iusto amet
                architecto obcaecati non facere ea debitis incidunt explicabo
                fuga deserunt quam esse exercitationem qui dicta!
              </Text>
              <Button
                justifyContent={"flex-end"}
                rightIcon={<FaLongArrowAltRight />}
                colorScheme="teal"
                variant="ghost"
              >
                Read More
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
};

export default About;
