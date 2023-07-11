import React from "react";
import SectionContainer from "../components/SectionContainer";
import Header from "../components/Header";
import ContactGrid from "./components/ContactGrid";
import { fetchContacts } from "../utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | Resonate Contacts Application",
  description: "Contacts fetched from jsonplaceholder.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function Contacts() {
  const contacts = await fetchContacts();

  return (
    <SectionContainer>
      <Header>Contacts</Header>
      <ContactGrid contacts={contacts} />
    </SectionContainer>
  );
}
