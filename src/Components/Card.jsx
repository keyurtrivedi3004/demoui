import {
  Avatar,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBookmark, FaClone, FaComment } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <Stack w="600px" boxShadow="md">
          <Stack m={8} p={4}>
            <Text>@kannewilliamson</Text>
            <HStack>
              <Avatar name="John Deo" size="lg" />
              <Text fontWeight="600">Kanne Williamso</Text>
              <Text fontWeight="600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione, quia?
              </Text>
            </HStack>
            <VStack align="flex-start">
              <Heading fontSize="lg">Web Development</Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                impedit optio recusandae? Atque repellendus soluta voluptatibus
                tempora unde voluptates vel.
              </Text>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quis alias dolores! Odio, repellendus. Error aliquam a
                perspiciatis in minus?
              </Text>
              <Divider colorScheme={"green"} orientation="horizontal" />
            </VStack>
            <Flex justifyContent={"space-evenly"}>
              <FaBookmark /> <Text>Bookmark</Text>
              <FaClone /> <Text>Copy URL</Text>
              <FaComment /> <Text>321</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default Card;
