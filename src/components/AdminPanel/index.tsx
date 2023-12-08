"use client";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";
import { Api } from "@/services/api";
import { useAppDispatch } from "@/redux/hooks";
import EditProduct from "./EditProductPopup";
import { ProductType } from "@/app/types/types";
import { setProductsData } from "@/redux/slices/adminPanelProducts/slice";
import { AppState } from "@/redux/store";

const AdminPanel = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  const { products } = useSelector(
    (state: AppState) => state.adminPanelProductsSlice
  );
  const [addProductFormVisible, setAddProductFormVisible] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Api()
      .products.getAll()
      .then((res) => {
        dispatch(setProductsData(res));
      });
  }, [products.length, dispatch]);

  console.log("products", products);

  if (user && user.roles && user.roles.includes("ADMIN")) {
    return (
      <div>
        {addProductFormVisible ? (
          <AddProductForm setAddProductFormVisible={setAddProductFormVisible} />
        ) : (
          <Button
            onClick={() => setAddProductFormVisible(!addProductFormVisible)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              minHeight: "400px",
              marginTop: "20px",
              textTransform: "uppercase",
            }}
          >
            <AddIcon />
            Добавить товар
          </Button>
        )}
        {products.map((product: ProductType) => {
          return <EditProduct product={product} />;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default AdminPanel;
