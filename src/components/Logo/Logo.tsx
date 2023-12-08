import styles from "./Logo.module.scss";
import Link from "next/link";
import React from "react";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <div>
        <div className={styles.logoTitle}>CAD</div>
      </div>
    </Link>
  );
};

export default Logo;
