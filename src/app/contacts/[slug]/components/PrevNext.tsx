"use client";
import SectionContainer from "@/app/components/SectionContainer";
import { Box, Button, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { ContactProps } from "@/data/contacts";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

export default function PrevNext({
  contact,
  arrayLength,
}: {
  contact: ContactProps;
  arrayLength: number;
}) {
  return (
    <Flex w={"100"} align={"center"} justify={"center"}>
      {contact.id !== 1 ? (
        <Link href={`/contacts/${contact.id - 1}`}>
          <Button variant={"linkBtn"}>
            <Icon
              as={GrCaretPrevious}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
            />
          </Button>
        </Link>
      ) : (
        <Box>
          <Button variant={"linkBtn"} isDisabled={contact.id === 1}>
            <Icon
              as={GrCaretPrevious}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
            />
          </Button>
        </Box>
      )}
      <Link href={"/contacts"}>
        <Button variant={"filledSqBtn"} bg={"brandOrange"}>
          Contacts
        </Button>
      </Link>
      {contact.id !== arrayLength ? (
        <Link href={`/contacts/${contact.id + 1}`}>
          <Button variant={"linkBtn"}>
            <Icon
              as={GrCaretNext}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
            />
          </Button>
        </Link>
      ) : (
        <Box>
          <Button variant={"linkBtn"} isDisabled={contact.id === arrayLength}>
            <Icon
              as={GrCaretNext}
              w={{ base: "18px", md: "30px" }}
              h={{ base: "18px", md: "30px" }}
            />
          </Button>
        </Box>
      )}
    </Flex>
  );
}
