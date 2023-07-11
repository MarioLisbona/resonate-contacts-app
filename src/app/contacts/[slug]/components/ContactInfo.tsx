"use client";

import SectionContainer from "@/app/components/SectionContainer";
import { ContactProps } from "@/data/contacts";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Link,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

import { MdOutlineEmail, MdBusiness, MdContactPhone } from "react-icons/md";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text textStyle={"context"}>{text}</Text>
    </Stack>
  );
};

export default function ContactInfo({ contact }: { contact: ContactProps }) {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text textStyle={"heading"}>{contact.name}</Text>
          <Text textStyle={"subheading"}>{contact.company.name}</Text>
          <Text textStyle={"smContext"} mt={"0"}>
            {contact.company.catchPhrase}
          </Text>
          <Text textStyle={"smContext"} mt={"0"}>
            {contact.company.bs}
          </Text>
          <Link
            href={`https://www.${contact.website}`}
            color={"brandBlue"}
            target={"_blank"}
          >
            {contact.website}
          </Link>
          <Stack
            // spacing={2}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={MdOutlineEmail} color={"brandOrange"} w={5} h={5} />
              }
              iconBg={"brandLightBlue"}
              text={contact.email}
            />

            <Feature
              icon={<Icon as={MdBusiness} color={"brandOrange"} w={5} h={5} />}
              iconBg={"brandLightBlue"}
              text={`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}
            />
            <Feature
              icon={
                <Icon as={MdContactPhone} color={"brandOrange"} w={5} h={5} />
              }
              iconBg={"brandLightBlue"}
              text={contact.phone}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
