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
  Link,
} from "@chakra-ui/react";
import { ContactProps } from "@/data/contacts";

export default function CardGrid({ contact }: { contact: ContactProps }) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{contact.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{contact.username}</Text>
        <Text>{contact.email}</Text>
      </CardBody>
      <CardFooter>
        <Link href={`/contacts/${contact.id}`}>
          <Button>View more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
