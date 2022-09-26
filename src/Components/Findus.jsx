import { Button, Divider, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <Flex justify={"flex-end"} align={"end"}>
      <Stack w="200px" boxShadow="md">
        <Stack m={8}>
          <Text fontWeight={"bold"} color={"green.200"}>
            Find Us
          </Text>
          <Divider />
          <VStack>
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
              10k Followers
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              10k Followers
            </Button>
            <Button colorScheme="pink" leftIcon={<FaInstagram />}>
              10k Followers
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Findus;
