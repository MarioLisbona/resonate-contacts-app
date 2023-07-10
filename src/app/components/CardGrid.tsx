import React from "react";
import SectionContainer from "./SectionContainer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ContactProps } from "@/data/contacts";

export default function CardGrid({ contacts }: { contacts: ContactProps[] }) {
  return (
    <SectionContainer>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {contacts.map((contact, idx) => (
          <Card key={idx}>
            <CardHeader>
              <Heading size="md">{contact.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{contact.username}</Text>
            </CardBody>
            <CardFooter>
              <Button>View more</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </SectionContainer>
  );
}
