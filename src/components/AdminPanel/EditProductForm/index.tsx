import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Alert,
  Button,
  Checkbox,
  InputLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

import { ProductFormType, ProductType } from "@/redux/slices/products/types";
import { selectProductsData } from "@/redux/slices/products/selectors";
import {
  updateProduct,
  deleteProductData,
  deleteProductImage,
} from "@/redux/slices/products/asyncActions";

import { translit } from "@/components/utils/translit";
import { editProductSchema } from "@/components/utils/schemas/productFormValidation";
import AddImage from "./AddImage";
import Input from "@/components/FormFields/InputField";
import SelectItem from "@/components/FormFields/SelectField";

import styles from "./EditProduct.module.scss";

interface AuthPopupProps {
  product: ProductType;
  aromas: string[];
}

const EditProduct: FC<AuthPopupProps> = ({ product, aromas }) => {
  const { colors, gereralGroups, specifiedGroups, forms, burningTimes } =
    useAppSelector(selectProductsData);
  const [errorMessage, setErrorMessage] = useState("");

  const [checkedTop, setCheckedTop] = React.useState(product.top);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const dispatch = useAppDispatch();

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(editProductSchema),
    defaultValues: {
      title: product.title,
      description: product.description,
      form: product.form,
      volume: product.volume,
      weight: product.weight,
      width: product.width,
      height: product.height,
      depth: product.depth,
      burningTime: product.burningTime,
      price: product.price,
      generalGroup: product.generalGroup,
      specifiedGroup: product.specifiedGroup,
      color: product.color,
      aroma: product.aroma,
      available: product.available,
      top: product.top,
    },
  });

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const onSubmit = async (dto: any) => {
    const slug = translit(`${dto.color}-${dto.title}-${dto.volume}`);
    const newProduct: ProductFormType = {
      id: product.id,
      title: dto.title,
      slug: slug,
      description: dto.description,
      form: dto.form.toLowerCase().trim(),
      volume: dto.volume,
      price: dto.price,
      color: dto.color.toLowerCase().trim(),
      weight: dto.weight,
      height: dto.height,
      width: dto.width,
      depth: dto.depth,
      aroma: dto.aroma.toLowerCase().trim(),
      available: dto.available,
      burningTime: dto.burningTime,
      generalGroup: dto.generalGroup,
      specifiedGroup: dto.specifiedGroup,
      top: dto.top,
    };

    const data = await dispatch(updateProduct(newProduct));

    if (data.type === "products/updateProduct/rejected") {
      setErrorMessage("Ошибка при изменении товара.");
    } else {
      window.confirm("Товар успешно изменен");
      setErrorMessage("");
    }
  };

  const deleteProduct = async () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(deleteProductData(product.id));
    }
  };

  const deleteImage = async (image: string) => {
    if (window.confirm("Вы действительно хотите удалить картинку?")) {
      dispatch(deleteProductImage({ productId: product.id, filename: image }));
    }
  };

  return (
    <div className={styles.editProduct}>
      <div className={styles.editProductTop}>
        <div className={styles.editProductTopImage}>
          <img
            src={`https://owa.cadhome.ru/api/products/product-image/${product.images[0]}`}
            alt={product.title}
          />
        </div>
        <h3>{product.title}</h3>
        <div className={styles.editProductDelete} onClick={deleteProduct}>
          <DeleteIcon /> Удалить товар
        </div>
      </div>

      <Accordion
        expanded={expanded === "images"}
        onChange={handleChangeAccordion("images")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.editProductAccordionTitle}>
            Редактировать картинки
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.editProductImages}>
            {product.images?.map((image, index) => {
              return (
                <div className={styles.editProductImage} key={index}>
                  <img
                    src={`https://owa.cadhome.ru/api/products/product-image/${image}`}
                  ></img>
                  <div
                    className={styles.editProductDeleteImage}
                    onClick={() => deleteImage(image)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              );
            })}
          </div>

          <AddImage productId={product.id} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "characteristics"}
        onChange={handleChangeAccordion("characteristics")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.editProductAccordionTitle}>
            Редактировать описание и цену
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.editProductForm}
            >
              <Input fullWidth label="Название товара" name="title" multiline />
              <Input fullWidth label="Описание" name="description" multiline />

              <div className={styles.editProductCharacteristics}>
                <Input label="Объем" name="volume" type="number" />
                <Input label="Вес" name="weight" type="number" />
                <Input label="Ширина" name="width" type="number" />
                <Input label="Высота" name="height" type="number" />
                <Input label="Глубина" name="depth" type="number" />
                <SelectItem
                  label="Форма"
                  name="form"
                  items={forms}
                  defaultValue={product.form}
                />

                <SelectItem
                  label="Время горения"
                  name="burningTime"
                  items={burningTimes}
                  defaultValue={product.burningTime}
                />
                <SelectItem
                  label="Цвет"
                  name="color"
                  items={colors}
                  defaultValue={product.color}
                />
                <SelectItem
                  label="Основная группа"
                  name="generalGroup"
                  items={gereralGroups}
                  defaultValue={product.generalGroup}
                />

                <SelectItem
                  label="Подгруппа"
                  name="specifiedGroup"
                  items={specifiedGroups}
                  defaultValue={product.specifiedGroup}
                />
                <SelectItem
                  label="Аромат"
                  name="aroma"
                  items={aromas}
                  defaultValue={product.aroma}
                />
                <Input label="Цена" name="price" type="number" />
                <Input label="Количество" name="available" type="number" />
              </div>

              <InputLabel htmlFor="top">
                Нужно отображать в топе?
                <Checkbox
                  id="top"
                  {...form.register("top")}
                  checked={checkedTop}
                  onChange={(e) => setCheckedTop(!checkedTop)}
                />
              </InputLabel>

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

              <Button
                variant="contained"
                type="submit"
                className={styles.editProductChangeProduct}
              >
                Изменить товар
              </Button>
            </form>
          </FormProvider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EditProduct;
