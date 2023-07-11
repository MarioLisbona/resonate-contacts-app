"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../../public/images/ResonateLogo.png";

interface NavbarLinksProps {
  label: string;
  href: string;
  external: boolean;
}

const navbarLinks: Array<NavbarLinksProps> = [
  {
    label: "Home",
    href: "/",
    external: false,
  },
  {
    label: "Contacts",
    href: "/contacts",
    external: false,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"brandLightBlue"}
        px={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href={"/"}>
              <Box>
                <Image boxSize={"50px"} src={logo.src} alt={"Resonate logo"} />
              </Box>
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navbarLinks.map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <Button variant={"linkBtn"}>{link.label}</Button>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navbarLinks.map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <Button variant={"linkSmallBtn"}>{link.label}</Button>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
