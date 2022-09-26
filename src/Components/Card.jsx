import {
  Avatar,
  Button,
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
      <Flex justify="center">
        <Stack w="800px" boxShadow="lg">
          <Stack spacing={8} m={10} p={4}>
            <Text>@kannewilliamson</Text>
            <HStack>
              <Avatar name="John Deo" size="lg" />
              <Text fontWeight="600">
                Kanne Williamso
                <Text fontWeight="600">adipisicing elit. Ratione, quia?</Text>
                <Text>13/12/201 at 02:30 pm</Text>
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
            <HStack spacing={4}>
              <Button leftIcon={<FaBookmark />}>Bookmark</Button>
              <Button leftIcon={<FaClone />}>Copy Url</Button>
              <Button leftIcon={<FaComment />}>321</Button>
            </HStack>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default Card;
