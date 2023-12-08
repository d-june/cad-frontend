import Link from "next/link";
import styles from "./Footer.module.scss";
import { NavItem } from "@/app/types/types";
import { Navigation } from "../Navigation";
import Logo from "../Logo/Logo";
import ScrollToTop from "../ScrollToTop";

export const navigationFull = [
  {
    id: "1f",
    label: "Каталог",
    href: "/catalog",
  },
  {
    id: "2f",
    label: "Вопросы и ответы",
    href: "/questions",
  },
  {
    id: "3f",
    label: "Доставка и оплата",
    href: "/delivery",
  },
  {
    id: "4f",
    label: "О нас",
    href: "/about",
  },
  {
    id: "5f",
    label: "Инструкция",
    href: "/recomendations",
  },
  {
    id: "6f",
    label: "Контакты",
    href: "/contacts",
  },
];
const Footer = async () => {
  return (
    <footer className={styles.footer + " container"}>
      <div className={styles.footerLogo}>
        <Link href="/"> CAD </Link>
      </div>

      <div className={styles.footerContent}>
        <Navigation navItems={navigationFull} column={true} />
        <p>г. Санкт-Петербург, м. Дыбенко</p>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export { Footer };
