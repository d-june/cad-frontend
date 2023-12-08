import React, { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import { setCookie } from "nookies";
import {
  Alert,
  Button,
  Checkbox,
  Chip,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../../utils/schemas/formsValidation";
import FormField from "../../FormField";

import { CreateProductDto, CreateUserDto } from "../../../services/api/types";
import styles from "./AddProductForm.module.scss";
import { Api } from "@/services/api";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "@/redux/hooks";
import { setProductsData } from "@/redux/slices/adminPanelProducts/slice";
import { translit } from "@/components/utils/translit";

type AddProductProps = {
  setAddProductFormVisible: Dispatch<SetStateAction<boolean>>;
};

const AddProductForm: FC<AddProductProps> = ({ setAddProductFormVisible }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [aromaName, setAromaName] = React.useState("");
  const [aromaCount, setAromaCount] = React.useState<number>(0);
  const [generalGroup, setGeneralGroup] = React.useState("");
  const [specifiedGroup, setSpecifiedGroup] = React.useState("");
  const [color, setColor] = React.useState("");
  const [checkedTop, setCheckedTop] = React.useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "aromas",
    control: control,
  });

  const addAroma = () => {
    append({ name: aromaName, count: Number(aromaCount) });
  };

  const removeAroma = (index: number) => () => {
    remove(index);
  };

  const onChangeAromaName = (e: any) => {
    setAromaName(e.target.value);
  };

  const handlePlusAromaCount = () => {
    setAromaCount(aromaCount + 1);
  };

  const handleMinusAromaCount = () => {
    setAromaCount(aromaCount - 1);
  };

  const handleChangeColor = (e: any) => {
    setColor(e.target.value);
  };

  const handleChangeGeneralGroup = (event: SelectChangeEvent) => {
    setGeneralGroup(event.target.value);
  };

  const handleChangeSpecifiedGroup = (event: SelectChangeEvent) => {
    setSpecifiedGroup(event.target.value);
  };

  const onSubmit = async (dto: any) => {
    const slug = translit(`${dto.color}-${dto.title}-${dto.volume}`);
    const newProduct = { ...dto, slug };

    try {
      const data = await Api().products.createProduct(newProduct);
      Api()
        .products.getAll()
        .then((res) => {
          dispatch(setProductsData(res));
        });
      setErrorMessage("");
    } catch (err: any) {
      console.warn("Ошибка при регистрации", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
    setAddProductFormVisible(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.addProductForm}>
      <div className={styles.addProductFormCloseIcon}>
        <CloseIcon onClick={() => setAddProductFormVisible(false)} />
      </div>

      <div>
        <TextField
          label="Название товара"
          {...register("title", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          label="Описание"
          {...register("description", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          label="Объем"
          {...register("volume", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          type="number"
          label="Вес"
          {...register("weight", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          type="number"
          label="Ширина"
          {...register("width", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          type="number"
          label="Высота"
          {...register("height", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          type="number"
          label="Глубина"
          {...register("depth", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          label="Время горения"
          {...register("burningTime", { required: true })}
          className={styles.addProductFormItem}
        />
        <TextField
          label="Цена"
          {...register("price", { required: true })}
          className={styles.addProductFormItem}
        />

        <FormControl fullWidth className={styles.addProductFormItem}>
          <InputLabel id="demo-simple-select-label">Общая группа</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={generalGroup}
            label="Общая группа"
            {...register("generalGroup", { required: true })}
            onChange={handleChangeGeneralGroup}
          >
            <MenuItem value={"Свечи"}>Свечи</MenuItem>
            <MenuItem value={"Подсвечники"}>Подсвечники</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className={styles.addProductFormItem}>
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
        <FormControl fullWidth className={styles.addProductFormItem}>
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

        <div className={styles.addProductFormAromas}>
          {/* <InputLabel id="demo-mutiple-chip-label">Ароматы</InputLabel> */}
          {fields.map((item, index) => (
            <Fragment key={item.id}>
              <Controller
                name={`aromas[${item.id}].name`}
                control={control}
                defaultValue={aromaName}
                render={({ field: { value, onChange } }) => (
                  <TextField value={value} onChange={onChange} />
                )}
              />
              <Controller
                name={`aromas[${item.id}].count`}
                control={control}
                defaultValue={aromaCount}
                render={({ field: { value, onChange } }) => (
                  <TextField value={value} onChange={onChange} />
                )}
              />
              <Button
                type="button"
                onClick={removeAroma(index)}
                className={styles.deleteAromaButton}
              >
                Удалить аромат
              </Button>
            </Fragment>
          ))}
        </div>
        <div className={styles.addProductFormAromas}>
          <TextField
            placeholder="Введите аромат..."
            value={aromaName}
            onChange={(e) => onChangeAromaName(e)}
          />

          <Button onClick={handleMinusAromaCount} disabled={aromaCount === 0}>
            -
          </Button>
          {aromaCount}
          <Button onClick={handlePlusAromaCount}>+</Button>

          <Button type="button" onClick={addAroma}>
            Добавить аромат
          </Button>
        </div>
        <div>
          <label htmlFor="top">Нужно отображать в топе?</label>
          <Checkbox
            id="top"
            {...register("top")}
            checked={checkedTop}
            onChange={(e) => setCheckedTop(!checkedTop)}
          />
        </div>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </div>
      <TextField
        id="file"
        type="file"
        {...register("file", { required: true })}
        className={styles.addImageInput}
      />

      <div className={styles.popupBottom}>
        <Button
          variant="contained"
          type="submit"
          className={styles.createProductButton}
        >
          Создать товар
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
