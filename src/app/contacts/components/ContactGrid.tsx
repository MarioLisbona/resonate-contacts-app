import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import { ContactProps } from "@/data/contacts";

export default function ContactGrid({
  contacts,
}: {
  contacts: ContactProps[];
}) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
    >
      {contacts.map((contact, idx) => (
        <ContactCard key={idx} contact={contact} />
      ))}
    </SimpleGrid>
  );
}
