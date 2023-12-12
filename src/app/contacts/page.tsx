import Breadcrumbs from "@/components/Breadcrumbs";
import Contacts from "@/components/Contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты производства | CAD",
  description:
    "Контакты производства и как с нами связаться. Адрес, телефон и адреса на профили в социальных сетях бренда CAD",
  robots: {
    index: false,
  },
};

const ContactsPage = () => {
  return (
    <main className="container main">
      <Breadcrumbs textItems={[{ text: "Контакты" }]} />
      <Contacts />
    </main>
  );
};

export default ContactsPage;
