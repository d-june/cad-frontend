"use client";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useAppDispatch } from "@/redux/hooks";

import {
  setCurrentPage,
  setFilters,
  setSortData,
} from "@/redux/slices/filter/slice";
import { getProducts } from "@/redux/slices/products/asyncActions";
import { selectFilter } from "@/redux/slices/filter/selectors";
import { selectProductsData } from "@/redux/slices/products/selectors";
import {
  ProductType,
  SearchProductParamsType,
} from "@/redux/slices/products/types";

import Filter from "../Filter";
import Product from "../Product";
import EmptyCatalog from "../emptyCatalog";
import Pagination from "../Pagination/Pagination";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import styles from "./Products.module.scss";

const productsAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: (custom: number) => ({
    opacity: 1,

    transition: {
      delay: 0,
      duration: 1.8,
    },
  }),
};

const Products: FC = () => {
  const { products, status, totalCount } = useSelector(selectProductsData);
  const [domLoaded, setDomLoaded] = useState(false);
  const [sort, setSort] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [pageHeight, setPageHeight] = useState(
    typeof window !== "undefined" && window.innerHeight - 100
  );

  const router = useRouter();

  const {
    currentPage,
    sortData,
    aromas,
    colors,
    volumes,
    forms,
    currentPrice,
  } = useSelector(selectFilter);

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    const params = qs.parse(
      location.search.substring(1)
    ) as unknown as SearchProductParamsType;
    dispatch(
      getProducts({
        currentPage: currentPage,
        currentPrice: currentPrice,
        orderBy: sort,
        aromas: aromas,
        colors: colors,
        volumes: volumes,
        forms: forms,
      })
    );
  }, [sort, aromas, colors, volumes, forms, currentPrice, currentPage]);

  useEffect(() => {
    if (location.search) {
      const params = qs.parse(
        location.search.substring(1)
      ) as unknown as SearchProductParamsType;

      setSort(params.orderBy);

      dispatch(
        setFilters({
          currentPage: Number(params.page),
          currentPrice: params.currentPrice as string,
          sortData: params.orderBy as string,
          aromas: params.aromas as string,
          colors: params.colors as string,
          volumes: params.volumes as string,
          forms: params.forms as string,
        })
      );
    }
  }, []);

  const handleChange = async (event: SelectChangeEvent) => {
    setSort(event.target.value);
    dispatch(setSortData(sort));
  };

  const isMounted = useRef(false);

  useEffect(() => {
    const filter: any = {
      page: undefined ? undefined : String(currentPage),
      currentPrice: currentPrice,
      orderBy: sort,
      aromas: aromas,
      colors: colors,
      forms: forms,
      volumes: volumes,
    };

    if (filter) {
      Object.entries(filter).map((a: any) => {
        if (a[1] === undefined) {
          delete filter[a];
        } else {
          Object.entries(a[1]).filter((b: any) => b[1].length).length
            ? a
            : delete filter[a[0]];
        }
      });
    }

    if (isMounted.current) {
      const queryString = qs.stringify(filter);
      router.push(`?${queryString}`, { scroll: true });
    }
    isMounted.current = true;
  }, [currentPrice, sort, aromas, colors, forms, volumes, currentPage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !event.composedPath().includes(filterRef.current)
      ) {
        setFilterVisible(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onChangePage = async (number: number) => {
    dispatch(setCurrentPage(number));
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onResizePage = () => {
    if (typeof window !== "undefined") {
      setPageHeight(window.innerHeight - 120);
      if (window.innerWidth < 900) {
        setPageHeight(window.innerHeight - 100);
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

  return (
    <div>
      {domLoaded && (
        <motion.section
          className={styles.products}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <div className={styles.productsSelection}>
            <Button
              className={styles.catalogFilterButton}
              onClick={() => {
                setFilterVisible(!filterVisible);
              }}
            >
              Фильтр <FilterAltIcon />
            </Button>
            <div
              className={
                filterVisible
                  ? styles.catalogFilterWrapper +
                    " " +
                    styles.catalogFilterWrapperActive
                  : styles.catalogFilterWrapper
              }
              style={{ height: pageHeight ? pageHeight : "100vh" }}
            >
              <div
                ref={filterRef}
                className={
                  filterVisible
                    ? styles.catalogFilter + " " + styles.catalogFilterActive
                    : styles.catalogFilter
                }
              >
                <Filter setFilterVisible={setFilterVisible} />
              </div>
            </div>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel>Сортировка</InputLabel>
              <Select
                value={sort}
                label="Сортировка"
                onChange={handleChange}
                defaultValue={sort}
              >
                <MenuItem value={"asc"}>По возрастанию цены</MenuItem>
                <MenuItem value={"desc"}>По убыванию цены</MenuItem>
              </Select>
            </FormControl>
          </div>
          <motion.div variants={productsAnimation}>
            {products.length > 0 ? (
              <>
                <div className={styles.productsWrapper}>
                  {products.map((product: ProductType, index: number) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>

                <Pagination
                  currentPage={currentPage}
                  onChangePage={onChangePage}
                  totalCount={totalCount}
                />
              </>
            ) : (
              <EmptyCatalog />
            )}
          </motion.div>
        </motion.section>
      )}
    </div>
  );
};

export default Products;
