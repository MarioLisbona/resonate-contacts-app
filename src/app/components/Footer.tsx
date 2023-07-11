"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("brandLightBlue", "gray.900")}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        pt={4}
        direction={{ base: "column" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"https://github.com/MarioLisbona"} target={"_blank"}>
            <Icon
              p={"0"}
              as={SiGithub}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
              _hover={{
                transform: "translateY(2px)",
                transition: "all 0.3s ease 0s",
                color: "brandOrange",
              }}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mariolisbona/"}
            target={"_blank"}
          >
            <Icon
              as={SiLinkedin}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
              _hover={{
                transform: "translateY(2px)",
                transition: "all 0.3s ease 0s",
                color: "brandOrange",
              }}
            />
          </Link>
        </Stack>
        <Text textStyle={"smContext"}>© 2023 Mario Lisbona</Text>
      </Container>
    </Box>
  );
}
