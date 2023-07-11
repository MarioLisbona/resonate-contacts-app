"use client";
import SectionContainer from "@/app/components/SectionContainer";
import { Button, Flex, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { ContactProps } from "@/data/contacts";

export default function PrevNext({ contact }: { contact: ContactProps }) {
  console.log(contact.id <= 1);
  return (
    <SectionContainer>
      <Flex w={"100"} align={"center"} justify={"center"}>
        <Link>
          <Button me={"2rem"} variant={"linkBtn"} isDisabled={contact.id <= 1}>
            Previous
          </Button>
        </Link>
        <Button variant={"linkBtn"}>Next</Button>
      </Flex>
    </SectionContainer>
  );
}
