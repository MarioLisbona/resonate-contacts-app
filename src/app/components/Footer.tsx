"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={"brandLightBlue"}
      color={useColorModeValue("gray.700", "gray.200")}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={999}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>GitHub</Link>
          <Link href={"#"}>LinkedIn</Link>
        </Stack>
        <Text>© 2023 Mario Lisbona</Text>
      </Container>
    </Box>
  );
}
