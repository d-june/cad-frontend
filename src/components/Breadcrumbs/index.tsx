import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FC } from "react";

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
      <Link href="/" className={styles.breadcrumbsHome}>
        <HomeOutlinedIcon />
      </Link>
      /
      <ul>
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
