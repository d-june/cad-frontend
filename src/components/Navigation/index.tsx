"use client";

import { NavItem } from "@/app/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";
import { FC } from "react";

type PropsType = {
  navItems: NavItem[];
  column?: boolean;
  onClick?: () => void;
};

const Navigation: FC<PropsType> = ({ navItems, column, onClick }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className={
          column
            ? styles.navigation + " " + styles.navigationColumn
            : styles.navigation
        }
      >
        {navItems.map((item: NavItem) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.id}
              className={
                isActive
                  ? styles.navigationItem + " active"
                  : styles.navigationItem
              }
            >
              <Link href={item.href} onClick={onClick}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navigation };
