import React from "react";
import SectionContainer from "../../components/SectionContainer";
import { fetchContact } from "@/app/utils";
import ContactInfo from "./components/ContactInfo";
import { Metadata } from "next";

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
  const contact = await fetchContact(slug);

  return (
    <SectionContainer>
      <ContactInfo contact={contact} />
    </SectionContainer>
  );
}
