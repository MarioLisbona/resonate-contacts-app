"use client";
import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "../components/SectionContainer";

import { testContacts } from "@/data/contacts";
import { ContactProps } from "@/data/contacts";
import { useState } from "react";
import CardGrid from "../components/CardGrid";

export default function Contacts() {
  const [contacts, setContacts] = useState<ContactProps[]>(testContacts);
  return (
    <SectionContainer>
      <Flex direction={"column"} align={"center"}>
        <Text textStyle={"heading"}>Heading</Text>
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {contacts.map((contact, idx) => (
          <CardGrid key={idx} contact={contact} />
        ))}
      </SimpleGrid>
    </SectionContainer>
  );
}
