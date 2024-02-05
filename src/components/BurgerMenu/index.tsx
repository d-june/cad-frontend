"use client";

import { FC, useEffect, useState } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

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
  const [pageHeight, setPageHeight] = useState(
    typeof window !== "undefined" && window.innerHeight - 90
  );

  const onResizePage = () => {
    if (typeof window !== "undefined") {
      setPageHeight(window.innerHeight - 120);
      if (window.innerWidth < 900) {
        setPageHeight(window.innerHeight - 90);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResizePage);
      return () => {
        window.removeEventListener("resize", onResizePage);
      };
    }
  }, [typeof window !== "undefined" && window.innerHeight]);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const handleClickBurgerToggle = (e: any) => {
    if (visible === true) {
      setVisible(false);
      enableBodyScroll(e.target);
    } else {
      setVisible(true);
      disableBodyScroll(e.target);
    }
  };

  const handleCloseMenu = () => {
    setVisible(false);
    clearAllBodyScrollLocks();
  };

  return (
    <div className={styles.burgerMenu}>
      <div
        className={
          visible
            ? styles.burgerBtn + " " + styles.sidebarOpen
            : styles.burgerBtn
        }
        onClick={handleClickBurgerToggle}
      >
        <span></span>
      </div>

      <div
        className={
          visible
            ? styles.burgerNavigation + " " + styles.burgerNavigationVisible
            : styles.burgerNavigation
        }
        style={{ height: pageHeight ? pageHeight : "100vh" }}
      >
        <Navigation navItems={navigationFull} onClick={handleCloseMenu} />
        <Link href="tel:+79119400877" className={styles.burgerPhone}>
          <LocalPhoneIcon /> 8-911-940-08-77
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
