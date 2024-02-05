import { FC } from "react";
import Link from "next/link";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = {
  textItems: Array<textItem>;
};

type textItem = {
  text: string;
  link?: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ textItems }) => {
  let itemsArray = textItems;
  if (textItems.length > 1) {
    itemsArray = textItems.slice(0, -1);
  }

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link href="/" className={styles.breadcrumbsHome}>
            <HomeOutlinedIcon /> /
          </Link>
        </li>
        {itemsArray &&
          itemsArray.map((item, index) => {
            if (item.text !== "undefined" && item.link) {
              return (
                <li key={index}>
                  <Link href={item.link}>{item.text}</Link> /
                </li>
              );
            }
          })}

        <li>
          {textItems[textItems.length - 1].text !== "undefined" &&
            textItems[textItems.length - 1].text}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
