"use client";
import SectionContainer from "@/app/components/SectionContainer";
import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { ContactProps } from "@/data/contacts";

export default function PrevNext({
  contact,
  length,
}: {
  contact: ContactProps;
  length: number;
}) {
  return (
    <SectionContainer>
      <Flex w={"100"} align={"center"} justify={"center"}>
        <Link href={`/contacts/${contact.id - 1}`}>
          <Button me={"2rem"} variant={"linkBtn"} isDisabled={contact.id <= 1}>
            Previous
          </Button>
        </Link>
        <Link href={`/contacts/${contact.id + 1}`}>
          <Button variant={"linkBtn"} isDisabled={contact.id === length}>
            Next
          </Button>
        </Link>
      </Flex>
    </SectionContainer>
  );
}
