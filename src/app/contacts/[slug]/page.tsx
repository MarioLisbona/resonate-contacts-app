import React from "react";
import SectionContainer from "../../components/SectionContainer";
import { fetchContact, fetchContacts } from "@/app/utils";
import ContactInfo from "./components/ContactInfo";
import { Metadata } from "next";
import PrevNext from "./components/PrevNext";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const contact = await fetchContact(slug);

  console.log(contact.name);

  return {
    title: `Contact | ${contact.name} `,
  };
}

export default async function Contact({ params: { slug } }: Params) {
  const contacts = await fetchContacts();
  const contact = contacts.find((contact) => contact.id === Number(slug))!;

  return (
    <SectionContainer>
      <ContactInfo contact={contact} />
      <PrevNext contact={contact} length={contacts.length} />
    </SectionContainer>
  );
}
