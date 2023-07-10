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

  console.log(contact);
  return (
    <SectionContainer>
      <Text textStyle={"heading"}>heading</Text>
      <Text textStyle={"subheading"}>subheading</Text>
      <Text textStyle={"context"}>{slug}</Text>
    </SectionContainer>
  );
}
