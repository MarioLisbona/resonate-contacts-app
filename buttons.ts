import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const filledSqLargeBtn = defineStyle({
  fontSize: { base: "16px", lg: "18px" },
  h: { base: "44px", lg: "54px" },
  minW: "125px",
  fontWeight: { base: "500", lg: "600" },
  lineHeight: "1",
  background: "brandBlue",
  color: "white",
  boxShadow: "0px 10px 25px rgba(217, 32, 39, .5)",
  _hover: {
    transform: "translateY(2px)",
    transition: "transform 0.2s ease",
  },
  borderRadius: "5px",
});

const filledSqBtn = defineStyle({
  fontSize: { base: "16px", lg: "18px" },
  h: "40px",
  minW: "125px",
  fontWeight: { base: "500", lg: "600" },
  lineHeight: "1",
  background: "brandBlue",
  color: "white",
  boxShadow: "0px 10px 25px rgba(217, 32, 39, .5)",
  _hover: {
    transform: "translateY(2px)",
    transition: "transform 0.2s ease",
  },
  borderRadius: "5px",
});

const whiteSqBtn = defineStyle({
  paddingX: "0",
  fontSize: { base: "16px", lg: "18px" },
  h: { base: "44px", lg: "54px" },
  w: { base: "160px", md: "200px", xl: "250px" },
  // maxW: { base: '284px', lg: '359px ' },
  fontWeight: { base: "500", lg: "600", xl: "700" },
  lineHeight: "1",
  background: "white",
  boxShadow: "0px 14px 18px rgba(0, 0, 0, .25)",
  _hover: {
    transform: "translateY(2px)",
    transition: "transform 0.2s ease",
  },
  borderRadius: "5px",
});

const linkBtn = defineStyle({
  fontSize: ["16px", "20px", "24px", "26px", "28px"],
  h: { base: "24px", lg: "54px" },
  minW: "100px",
  padding: "0",
  fontWeight: { base: "500", lg: "600" },
  lineHeight: "1",
  _hover: {
    transform: "translateY(2px)",
    transition: "all 0.3s ease 0s",
  },
});

export const appButton = defineStyleConfig({
  variants: {
    filledSqLargeBtn,
    filledSqBtn,
    whiteSqBtn,
    linkBtn,
  },
  defaultProps: {
    size: "lg",
    variant: "whiteSqBtn",
  },
});
