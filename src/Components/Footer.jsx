import React from "react";
import {
  Flex,
  Text,
  Image,
  IconButton,
  Stack,
  Box,
  Link,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Stack>
      <Box bg="#EAFFFB">
        <Flex justifyContent="space-between" ps="80" pe="80" mt="10">
          <Box>
            <Image
              alignSelf="center"
              backgroundColor="transparent"
              objectFit="contain"
              boxSize="50px"
              w="10"
              src="/navimage.png"
            />
            <Text color="#64D6BD" fontSize="xx-large">
              Project Credo
            </Text>
          </Box>
          <Box>
            <Flex direction="column">
              <Text color="black" fontWeight="bold" fontSize="x-large" mb="5">
                QUICK LINKS
              </Text>
              <Text color="black">Patreon</Text>
              <Text color="black">Community Guidelines</Text>
              <Text color="black">Terms of Use</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction="column">
              <Text color="black" fontWeight="bold" fontSize="x-large" mb="5">
                CONTACT US
              </Text>
              <Box>
                <Flex alignItems="center">
                  <IconButton
                    icon={<FaEnvelope color="#64D6BD" />}
                    backgroundColor="transparent"
                    size="lg"
                    _hover={{ bg: "teal.400" }}
                  ></IconButton>
                  <Link color="black" ms="2">
                    {" "}
                    hello@projectcredo.com
                  </Link>
                </Flex>
              </Box>
              <Flex>
                <IconButton
                  icon={<FaFacebookF color="black" />}
                  backgroundColor="transparent"
                  size="lg"
                  _hover={{ bg: "teal.400" }}
                ></IconButton>
                <IconButton
                  icon={<FaInstagram color="black" />}
                  backgroundColor="transparent"
                  size="lg"
                  _hover={{ bg: "teal.400" }}
                ></IconButton>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Box bg="white" h="8vh">
          <Flex direction="row" justifyContent="center" alignItems="center">
            <Text color="black" mt="4">
              {" "}
              &copy; Copyright 2021 @{" "}
            </Text>
            <Text color="#64D6BD" mt="4">
              Projectcredo
            </Text>
          </Flex>
        </Box>
      </Box>
    </Stack>
  );
};
