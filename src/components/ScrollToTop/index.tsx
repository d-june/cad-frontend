"use client";

import { useEffect, useState } from "react";

import NorthIcon from "@mui/icons-material/North";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {typeof document !== "undefined" &&
        scroll > document.documentElement.clientHeight && (
          <div onClick={handleScrollToTop} className={styles.scrollToTop}>
            <NorthIcon />
          </div>
        )}
    </div>
  );
};

export default ScrollToTop;
