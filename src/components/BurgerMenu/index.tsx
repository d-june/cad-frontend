"use client";

import { FC, useState } from "react";

import { NavItem } from "@/app/types/types";

import MenuIcon from "@mui/icons-material/Menu";
import { Ultra } from "next/font/google";
import Link from "next/link";
import { Navigation } from "../Navigation";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import styles from "./BurgerMenu.module.scss";

const navigationFull = [
  {
    id: "1b",
    label: "Каталог",
    href: "/catalog",
  },
  {
    id: "2b",
    label: "Вопросы и ответы",
    href: "/questions",
  },
  {
    id: "3b",
    label: "Доставка и оплата",
    href: "/delivery",
  },
  {
    id: "4b",
    label: "О нас",
    href: "/about",
  },
  {
    id: "5b",
    label: "Инструкция",
    href: "/recomendations",
  },
  {
    id: "6b",
    label: "Контакты",
    href: "/contacts",
  },
];

const BurgerMenu: FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.burgerMenu}>
      <div
        className={
          visible
            ? styles.burgerBtn + " " + styles.sidebarOpen
            : styles.burgerBtn
        }
        onClick={() => setVisible(!visible)}
      >
        <span></span>
      </div>

      <div
        className={
          visible
            ? styles.burgerNavigation + " " + styles.burgerNavigationVisible
            : styles.burgerNavigation
        }
      >
        <Navigation
          navItems={navigationFull}
          onClick={() => setVisible(false)}
        />
        <Link href="tel:+79119400877" className={styles.burgerPhone}>
          <LocalPhoneIcon /> 8-911-940-08-77
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
