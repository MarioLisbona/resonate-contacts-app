import React from "react";
import SectionContainer from "../../components/SectionContainer";
import { Text } from "@chakra-ui/react";
import { testContacts } from "@/data/contacts";
import Header from "@/app/components/Header";
import { fetchContact } from "@/app/utils";
import ContactInfo from "./components/ContactInfo";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Contact({ params: { slug } }: Params) {
  const contact = await fetchContact(slug);

  return (
    <SectionContainer>
      <Header />
      <ContactInfo contact={contact} />
    </SectionContainer>
  );
}
