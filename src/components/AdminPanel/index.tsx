"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { ProductType } from "@/redux/slices/products/types";
import { selectProductsData } from "@/redux/slices/products/selectors";
import { setCurrentPage } from "@/redux/slices/products/slice";
import { getProducts } from "@/redux/slices/products/asyncActions";
import { getAromas } from "@/redux/slices/aromas/asyncActions";
import { selectAromasData } from "@/redux/slices/aromas/selectors";

import AromasBlock from "./AromasBlock";
import Pagination from "../Pagination/Pagination";
import AddProductForm from "./AddProductForm";
import EditProduct from "./EditProductForm";

import { Button, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AdminPanel.module.scss";

const AdminPanel = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  const { products, totalCount, currentPage } =
    useAppSelector(selectProductsData);
  const { aromas } = useAppSelector(selectAromasData);
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);
  const dispatch = useAppDispatch();

  const aromasList = aromas.map((aroma) => aroma.name);

  useEffect(() => {
    dispatch(getProducts({ currentPage: currentPage }));
    dispatch(getAromas());
  }, [currentPage]);

  const [value, setValue] = useState("products");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onChangePage = async (number: number) => {
    dispatch(setCurrentPage(number));
    if (window !== undefined) {
      window.scrollTo({
        top: 620,
        behavior: "smooth",
      });
    }
  };

  if (user && user.roles && user.roles.includes("ADMIN")) {
    return (
      <div>
        <Box sx={{ width: "100%" }} className={styles.adminPanelTabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="products" label="Товары" />
            <Tab value="aromas" label="Ароматы" />
          </Tabs>
        </Box>

        {value === "products" && (
          <>
            {addProductFormVisible ? (
              <AddProductForm
                setAddProductFormVisible={setAddProductFormVisible}
                aromas={aromasList}
              />
            ) : (
              <Button
                onClick={() => setAddProductFormVisible(!addProductFormVisible)}
                className={styles.adminAddProductButton}
              >
                <AddIcon />
                Добавить товар
              </Button>
            )}
            <div className={styles.editProducts}>
              {products.map((product: ProductType) => {
                return (
                  <EditProduct
                    product={product}
                    key={product.id}
                    aromas={aromasList}
                  />
                );
              })}
            </div>

            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              onChangePage={onChangePage}
            />
          </>
        )}

        {value === "aromas" && <AromasBlock aromas={aromas} />}
      </div>
    );
  } else {
    return null;
  }
};

export default AdminPanel;
