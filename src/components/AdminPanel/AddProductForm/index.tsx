import React, { Dispatch, FC, SetStateAction, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createProduct } from "@/redux/slices/products/asyncActions";
import { selectProductsData } from "@/redux/slices/products/selectors";
import { ProductFormType } from "@/redux/slices/products/types";

import Input from "@/components/FormFields/InputField";
import SelectItem from "@/components/FormFields/SelectField";
import { translit } from "@/components/utils/translit";
import { addProductSchema } from "@/components/utils/schemas/productFormValidation";

import { Alert, Button, Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AddProductForm.module.scss";

type AddProductProps = {
  setAddProductFormVisible: Dispatch<SetStateAction<boolean>>;
  aromas: string[];
};

const AddProductForm: FC<AddProductProps> = ({
  setAddProductFormVisible,
  aromas,
}) => {
  const { colors, gereralGroups, specifiedGroups, forms, burningTimes } =
    useAppSelector(selectProductsData);

  const [errorMessage, setErrorMessage] = useState("");
  const [checkedTop, setCheckedTop] = React.useState(false);
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(addProductSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (dto, e) => {
    e?.preventDefault();
    const slug = translit(`${dto.color}-${dto.title}-${dto.volume}`);

    const newProduct: ProductFormType = {
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
      file: dto.file,
    };

    const data = await dispatch(createProduct(newProduct));

    if (data.type === "products/createProduct/rejected") {
      setErrorMessage("Товар не добавлен. Что-то пошло не так.");
    } else {
      setAddProductFormVisible(false);
      setErrorMessage("");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.addProductForm}
      >
        <div className={styles.addProductFormCloseIcon}>
          <CloseIcon onClick={() => setAddProductFormVisible(false)} />
        </div>

        <Input fullWidth label="Название товара" name="title" />
        <Input
          fullWidth
          label="Описание"
          name="description"
          multiline
          rows={4}
        />

        <div className={styles.addProductFormCharacteristics}>
          <Input label="Объем" name="volume" type="number" />
          <Input label="Вес" name="weight" type="number" />
          <Input label="Ширина" name="width" type="number" />
          <Input label="Высота" name="height" type="number" />
          <Input label="Глубина" name="depth" type="number" />

          <SelectItem label="Форма" name="form" items={forms} />

          <SelectItem
            label="Время горения"
            name="burningTime"
            items={burningTimes}
          />

          <SelectItem label="Цвет" name="color" items={colors} />

          <SelectItem
            label="Общая группа"
            name="generalGroup"
            items={gereralGroups}
          />

          <SelectItem
            label="Подгруппа"
            name="specifiedGroup"
            items={specifiedGroups}
          />
          <Input label="Цена" name="price" type="number" />
          <SelectItem label="Аромат" name="aroma" items={aromas} />
          <Input label="Количество" name="available" type="number" />
        </div>

        <div>
          <label htmlFor="top">Нужно отображать в топе?</label>
          <Checkbox
            id="top"
            {...form.register("top")}
            checked={checkedTop}
            onChange={(e) => setCheckedTop(!checkedTop)}
          />
        </div>
        <div className={styles.addProductFormImageInput}>
          <Input name="file" type="file" />
        </div>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <div>
          <Button
            variant="contained"
            type="submit"
            className={styles.addProductFormButton}
          >
            Создать товар
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddProductForm;
