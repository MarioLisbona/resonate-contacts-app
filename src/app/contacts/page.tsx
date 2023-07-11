import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SectionContainer from "../components/SectionContainer";

import { testContacts } from "@/data/contacts";
import { ContactProps } from "@/data/contacts";
import { useState } from "react";
import CardGrid from "./components/ContactCard";
import Header from "../components/Header";
import ContactGrid from "./components/ContactGrid";
import { fetchContacts } from "../utils";

export default async function Contacts() {
  const contacts = await fetchContacts();

  return (
    <SectionContainer>
      <Header />
      <ContactGrid contacts={contacts} />
    </SectionContainer>
  );
}
