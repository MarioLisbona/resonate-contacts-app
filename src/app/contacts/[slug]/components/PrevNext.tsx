"use client";
import SectionContainer from "@/app/components/SectionContainer";
import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { ContactProps } from "@/data/contacts";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

export default function PrevNext({
  contact,
  length,
}: {
  contact: ContactProps;
  length: number;
}) {
  return (
    <Flex w={"100"} align={"center"} justify={"center"}>
      <Link
        href={
          contact.id !== 1
            ? `/contacts/${contact.id - 1}`
            : `/contacts/${contact.id}`
        }
      >
        <Button variant={"linkBtn"} isDisabled={contact.id === 1}>
          <Icon
            as={GrCaretPrevious}
            w={{ base: "18px", md: "30px" }}
            h={{ base: "18px", md: "30px" }}
          />
        </Button>
      </Link>
      <Link href={"/contacts"}>
        <Button variant={"filledSqBtn"} bg={"brandOrange"}>
          Contacts
        </Button>
      </Link>
      <Button variant={"linkBtn"} isDisabled={contact.id === length}>
        <Link
          href={
            contact.id !== length
              ? `/contacts/${contact.id + 1}`
              : `/contacts/${contact.id}`
          }
        >
          <Icon
            as={GrCaretNext}
            w={{ base: "18px", md: "30px" }}
            h={{ base: "18px", md: "30px" }}
          />
        </Link>
      </Button>
    </Flex>
  );
}
