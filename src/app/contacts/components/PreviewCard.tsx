"use client";
import { ContactProps } from "@/data/contacts";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { RiContactsLine } from "react-icons/ri";

export default function PreviewCard({ contact }: { contact: ContactProps }) {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Icon
          as={RiContactsLine}
          color={"gray.600"}
          w={{ base: "80px", md: "110px" }}
          h={{ base: "80px", md: "110px" }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {contact.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {contact.username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          <Link
            href={`https://www.${contact.website}`}
            color={"brandBlue"}
            target={"_blank"}
          >
            {contact.website}
          </Link>
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Link href={`/contacts/${contact.id}`}>
            <Button
              variant={"filledSqBtn"}
              flex={1}
              bg={"brandDarkBlue"}
              _focus={{
                bg: "brandOrange",
              }}
            >
              View More
            </Button>
          </Link>
          <Button
            variant={"filledSqBtn"}
            flex={1}
            _focus={{
              bg: "brandOrange",
            }}
          >
            Show Map
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
