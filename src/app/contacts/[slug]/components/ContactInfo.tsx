"use client";
import Header from "@/app/components/Header";
import SectionContainer from "@/app/components/SectionContainer";
import { ContactProps } from "@/data/contacts";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function ContactInfo({ contact }: { contact: ContactProps }) {
  return (
    <SectionContainer>
      <Header />
      <Text textStyle={"heading"}>{contact.name}</Text>
      <Text textStyle={"subheading"}>{contact.website}</Text>
    </SectionContainer>
  );
}
