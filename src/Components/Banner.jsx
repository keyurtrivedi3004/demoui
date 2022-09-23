import {
  Flex,
  VStack,
  useBreakpointValue,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage="/Banner.png"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundRepeat={"no-repeat"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"gray.400"}
            fontWeight={700}
            bg={"transparent"}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            SEARCH HERE....
          </Text>
          <Stack ps={20}>
            <Button alignItems={"center"} bg={"green.400"} color={"white"}>
              SEARCH
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Banner;
