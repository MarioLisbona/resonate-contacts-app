import { ContactProps } from "@/data/contacts";

export async function fetchContacts(): Promise<ContactProps[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  return data;
}

export async function fetchContact(slug: string): Promise<ContactProps> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`
  );
  const data = await result.json();
  return data;
}
