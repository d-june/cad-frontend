import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FC, ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./AccordionBlock.module.scss";

type AccordionBlockProps = {
  expanded: string | false;
  handleChangeAccordion: (name: string) => any;
  name: string;
  title: string;
  children: ReactNode;
};

const AccordionBlock: FC<AccordionBlockProps> = ({
  expanded,
  handleChangeAccordion,
  name,
  title,
  children,
}) => {
  return (
    <Accordion
      expanded={expanded === name}
      onChange={handleChangeAccordion(name)}
      className={styles.accordionItem}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionBlock;
