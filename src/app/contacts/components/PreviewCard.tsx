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
          color={"gray.500"}
          w={{ base: "80px", md: "110px" }}
          h={{ base: "80px", md: "110px" }}
        />
        <Text textStyle={"subheading"}>{contact.name}</Text>
        <Text textStyle={"smheading"} mb={4}>
          {contact.username}
        </Text>
        <Text textStyle={"smBold"} px={3}>
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
              bg={"brandOrange"}
              _focus={{
                bg: "orange.500",
              }}
            >
              View More
            </Button>
          </Link>
          <Link
            href={`https://maps.google.com/?q=${contact.address.geo.lat},${contact.address.geo.lat}`}
            target={"_blank"}
          >
            <Button
              variant={"filledSqBtn"}
              flex={1}
              _focus={{
                bg: "blue.500",
              }}
            >
              Show Map
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
