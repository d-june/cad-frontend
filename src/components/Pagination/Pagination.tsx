import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  onChangePage: (page: number) => void;
};
const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePage,
  totalCount,
}) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel={<EastIcon />}
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageCount={totalCount / 20}
      forcePage={currentPage - 1}
      previousLabel={<WestIcon />}
    />
  );
};

export default Pagination;
