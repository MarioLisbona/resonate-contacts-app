"use client";
import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "../components/SectionContainer";

import { ContactProps } from "../types";
import { useState, useEffect } from "react";
import CardGrid from "../components/CardGrid";

async function fetchContacts(
  setContacts: React.Dispatch<React.SetStateAction<ContactProps[]>>
) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  setContacts(data);
}

export default function Contacts() {
  const [contacts, setContacts] = useState<ContactProps[]>([]);

  useEffect(() => {
    fetchContacts(setContacts);
  }, []);

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
