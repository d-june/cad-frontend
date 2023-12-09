import React, { FC, Fragment, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useForm } from "react-hook-form";

import styles from "./EditProduct.module.scss";
import { ProductType } from "@/app/types/types";
import { Api } from "@/services/api";
import AddImage from "./AddImage";
import UpdateAroma from "./UpdateAroma";
import AddNewAroma from "./AddNewAroma";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteProductData,
  updateProductImages,
} from "@/redux/slices/adminPanelProducts/slice";
import { translit } from "@/components/utils/translit";

interface AuthPopupProps {
  product: ProductType;
}

const EditProduct: FC<AuthPopupProps> = ({ product }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [generalGroup, setGeneralGroup] = React.useState(product.generalGroup);
  const [specifiedGroup, setSpecifiedGroup] = React.useState(
    product.specifiedGroup
  );
  const [color, setColor] = React.useState(product.color);
  const [checkedTop, setCheckedTop] = React.useState(product.top);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      id: product.id,
      title: product.title,
      description: product.description,
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
      aromas: product.aromas,
      top: product.top,
    },
  });

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChangeGeneralGroup = (event: SelectChangeEvent) => {
    setGeneralGroup(event.target.value);
  };

  const handleChangeSpecifiedGroup = (event: SelectChangeEvent) => {
    setSpecifiedGroup(event.target.value);
  };

  const handleChangeColor = (e: any) => {
    setColor(e.target.value);
  };

  const onSubmit = async (dto: any) => {
    const slug = translit(`${dto.color}-${dto.title}-${dto.volume}`);
    const newProduct = { ...dto, slug };

    try {
      const data = await Api().products.updateProduct(newProduct);
      window.confirm("Товар успешно изменен");
      setErrorMessage("");
    } catch (err: any) {
      console.warn("Ошибка при изменении товара", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  const deleteProduct = async () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      await Api().products.deleteProduct(product.id);
      dispatch(deleteProductData(product));
    }
  };

  const deleteImage = async (image: string) => {
    if (window.confirm("Вы действительно хотите удалить картинку?")) {
      const data = await Api().products.deleteImage(product.id, image);
      dispatch(updateProductImages(data));
    }
  };

  return (
    <div className={styles.editProduct}>
      <div className={styles.editProductTop}>
        <h3>{product.title}</h3>
        <div className={styles.editProductDelete} onClick={deleteProduct}>
          <DeleteIcon /> Удалить товар
        </div>
      </div>

      <div className={styles.editProductImages}>
        {product.images?.map((image) => {
          return (
            <div className={styles.editProductImage}>
              <img
                src={`http://api.cadhome.ru/api/products/product-image/${image}`}
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

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChangeAccordion("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.editProductAccordionTitle}>
            Редактировать описание и цену
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.editProductForm}
          >
            <div>
              <TextField
                label="Название товара"
                {...register("title", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                label="Описание"
                {...register("description", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                label="Объем"
                {...register("volume", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                type="number"
                label="Вес"
                {...register("weight", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                type="number"
                label="Ширина"
                {...register("width", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                type="number"
                label="Высота"
                {...register("height", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                type="number"
                label="Глубина"
                {...register("depth", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                label="Время горения"
                {...register("burningTime", { required: true })}
                className={styles.editProductItem}
              />
              <TextField
                label="Цена"
                {...register("price", { required: true })}
                className={styles.editProductItem}
              />

              <FormControl fullWidth className={styles.editProductItem}>
                <InputLabel id="demo-simple-select-label">
                  Основная группа
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={generalGroup}
                  label="Основная группа"
                  {...register("generalGroup", { required: true })}
                  onChange={handleChangeGeneralGroup}
                >
                  <MenuItem value={"Свечи"}>Свечи</MenuItem>
                  <MenuItem value={"Подсвечники"}>Подсвечники</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className={styles.editProductItem}>
                <InputLabel id="demo-simple-select-label">Подгруппа</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={specifiedGroup}
                  label="Подгруппа"
                  {...register("specifiedGroup", { required: true })}
                  onChange={handleChangeSpecifiedGroup}
                >
                  <MenuItem value={"Свечи в гипсовых подсвечниках"}>
                    Свечи в гипсовых подсвечниках
                  </MenuItem>
                  <MenuItem value={"Свечи в банках"}>Свечи в банках</MenuItem>
                  <MenuItem value={"Наборы"}>Наборы</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth className={styles.editProductItem}>
                <InputLabel id="demo-simple-select-label">Цвет</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Цвет"
                  value={color}
                  {...register("color", { required: true })}
                  onChange={handleChangeColor}
                >
                  <MenuItem value={"Белый"}>Белый</MenuItem>
                  <MenuItem value={"Белая"}>Белая</MenuItem>
                  <MenuItem value={"Черный"}>Черный</MenuItem>
                  <MenuItem value={"Черная"}>Черная</MenuItem>
                  <MenuItem value={"Черный мрамор"}>Черный мрамор</MenuItem>
                </Select>
              </FormControl>

              <div>
                <InputLabel htmlFor="top">
                  Нужно отображать в топе?
                  <Checkbox
                    id="top"
                    {...register("top")}
                    checked={checkedTop}
                    onChange={(e) => setCheckedTop(!checkedTop)}
                  />
                </InputLabel>
              </div>

              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </div>
            <div>
              <Button
                variant="contained"
                type="submit"
                className={styles.editProductChangeProduct}
              >
                Изменить товар
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChangeAccordion("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.editProductAccordionTitle}>
            Редактировать ароматы
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.editProducAromas}>
          {product.aromas?.map((aroma) => {
            return <UpdateAroma aroma={aroma} productId={product.id} />;
          })}

          <AddNewAroma productId={product.id} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EditProduct;
