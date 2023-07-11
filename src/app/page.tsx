import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Resonate Contacts Application",
  description:
    "A Next.js contacts application fetching data from the jsonplaceholder API.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <SectionContainer>
      <Hero />
    </SectionContainer>
  );
}
