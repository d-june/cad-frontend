import React, { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/redux/hooks";

import { CreateAromaType } from "@/redux/slices/aromas/types";
import { createAroma } from "@/redux/slices/aromas/asyncActions";

import Input from "@/components/FormFields/InputField";
import { aromaSchema } from "@/components/utils/schemas/productFormValidation";

import { Alert, Button } from "@mui/material";
import styles from "./AddAroma.module.scss";

type AddAromaProps = {
  setAromaFormVisible: (visible: boolean) => void;
};

const AddAroma: FC<AddAromaProps> = ({ setAromaFormVisible }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(aromaSchema),
  });

  const onSubmit: SubmitHandler<CreateAromaType> = async (dto) => {
    const data = await dispatch(createAroma(dto));
    if (data.type === "products/createAroma/rejected") {
      setErrorMessage("Аромат не добавлен. Что-то пошло не так.");
    } else {
      setAromaFormVisible(false);
      setErrorMessage("");
    }
  };

  return (
    <div className={styles.addAroma}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.addAromaForm}
        >
          <Input fullWidth label="Название аромата" name="name" />
          <Input
            fullWidth
            label="Описание аромата"
            name="description"
            rows={5}
            multiline
          />

          <Input fullWidth label="Верх" name="top" />

          <Input fullWidth label="Середина" name="middle" />

          <Input fullWidth label="База" name="base" />

          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          <Button
            type="submit"
            variant="contained"
            disabled={form.formState.isSubmitting}
          >
            Добавить аромат
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddAroma;
