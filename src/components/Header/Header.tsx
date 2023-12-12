"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Navigation } from "../Navigation";
import { NavItem } from "@/app/types/types";
import { FC, useEffect, useState } from "react";

import HeaderCart from "./HeaderCart";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import BurgerMenu from "../BurgerMenu";

export const navigationShort = [
  {
    id: "1h",
    label: "Каталог",
    href: "/catalog",
  },
  {
    id: "2h",
    label: "О нас",
    href: "/about",
  },
  {
    id: "3h",
    label: "Инструкция",
    href: "/recomendations",
  },
  {
    id: "4h",
    label: "Контакты",
    href: "/contacts",
  },
];

const Header: FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(function mount() {
    function onResize() {
      if (typeof window !== "undefined") {
        setInnerWidth(window.innerWidth - 190);
      }
    }

    window.addEventListener("resize", onResize);

    return function unMount() {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <>
      {domLoaded && (
        <motion.header
          className={styles.header}
          variants={{
            visible: { y: "0%" },
            hidden: { y: "-100%" },
          }}
          initial="hidden"
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className={styles.headerContainer + " container"}>
            <div className={styles.headerWrapper}>
              <Logo />
              {innerWidth && innerWidth > 500 ? (
                <Navigation navItems={navigationShort} />
              ) : (
                <BurgerMenu />
              )}

              <div className={styles.headerItem}>
                <Link href="tel:+79119400877" className={styles.headerPhone}>
                  <LocalPhoneIcon /> 8-911-940-08-77
                </Link>
                <HeaderCart />
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </>
  );
};

export { Header };
