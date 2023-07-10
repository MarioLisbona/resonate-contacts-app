"use client";
import React from "react";
import SectionContainer from "../../components/SectionContainer";
import { Text } from "@chakra-ui/react";
import { testContacts } from "@/data/contacts";

type Params = {
  params: {
    slug: string;
  };
};

export default function Contact({ params: { slug } }: Params) {
  const contact = testContacts.find((contact) => contact.id === Number(slug));

  return (
    <SectionContainer>
      <Text textStyle={"heading"}>{contact?.name}</Text>
      <Text textStyle={"subheading"}>{contact?.username}</Text>
      <Text textStyle={"context"}>{contact?.email}</Text>
    </SectionContainer>
  );
}
