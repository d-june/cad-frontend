import { FC } from "react";
import Link from "next/link";

import styles from "./Logo.module.scss";

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
