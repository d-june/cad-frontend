import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

import { deleteAroma, updateAroma } from "@/redux/slices/aromas/asyncActions";
import { AromaType } from "@/redux/slices/aromas/types";

import AddAromaImage from "../AddAromaImage";
import Input from "@/components/FormFields/InputField";
import { aromaSchema } from "@/components/utils/schemas/productFormValidation";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./EditAroma.module.scss";

interface EditAromasProps {
  aroma: AromaType;
}

const EditAroma: FC<EditAromasProps> = ({ aroma }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const dispatch = useAppDispatch();

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(aromaSchema),
    defaultValues: {
      name: aroma.name,
      description: aroma.description,
      top: aroma.top,
      middle: aroma.middle,
      base: aroma.base,
    },
  });

  const onSubmit = async (dto: any) => {
    const data = await dispatch(updateAroma({ ...dto, id: aroma.id }));

    if (data.type === "products/updateAroma/rejected") {
      setErrorMessage("Ошибка при изменении аромата.");
    } else {
      window.confirm("Аромат успешно изменен");
      setErrorMessage("");
    }
  };

  const deleteAromaItem = async () => {
    if (window.confirm("Вы действительно хотите удалить аромат?")) {
      dispatch(deleteAroma(aroma.id));
    }
  };

  return (
    <div className={styles.editAroma}>
      <div className={styles.editAromaTop}>
        {aroma.image && (
          <div className={styles.editAromaImage}>
            <img
              src={`https://owa.cadhome.ru/api/products/product-image/${aroma.image}`}
            ></img>
          </div>
        )}
        <h3 className={styles.editAromaTitle}>{aroma.name}</h3>
        <div className={styles.editAromaDelete} onClick={deleteAromaItem}>
          <DeleteIcon /> Удалить аромат
        </div>
      </div>

      <AddAromaImage aromaId={aroma.id} />

      <Accordion
        expanded={expanded === "edit"}
        onChange={handleChangeAccordion("edit")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.aromasBlockAccordionTitle}>
            Описание аромата
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.editAromaForm}
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
                variant="contained"
                type="submit"
                className={styles.editAromaSubmit}
              >
                Изменить аромат
              </Button>
            </form>
          </FormProvider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EditAroma;
