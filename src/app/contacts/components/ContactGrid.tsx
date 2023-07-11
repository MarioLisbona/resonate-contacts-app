"use client";
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import PreviewCard from "./PreviewCard";
import { ContactProps } from "@/data/contacts";

export default function ContactGrid({
  contacts,
}: {
  contacts: ContactProps[];
}) {
  return (
    <SimpleGrid
      spacing={2}
      templateColumns="repeat(auto-fill, minmax(320px, 1fr))"
    >
      {contacts.map((contact, idx) => (
        <PreviewCard key={idx} contact={contact} />
      ))}
    </SimpleGrid>
  );
}
