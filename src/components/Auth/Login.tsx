import React, { FC, useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../utils/schemas/formsValidation";
import FormField from "../FormFields/FormField";
import styles from "./AuthPopup.module.scss";
import { LoginDto } from "../../services/api/types";
import { useAppDispatch } from "../../redux/hooks";
import { setUserData } from "../../redux/slices/user";
import { Api } from "@/services/api";
import Input from "../FormFields/InputField";

interface LoginFormProps {
  onClickRegister?: () => void;
}
const Login: FC<LoginFormProps> = ({ onClickRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().users.login(dto);
      setErrorMessage("");
      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn("Ошибка при регистрации", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.popupFields}>
            <Input name="email" label="Email" />
            <Input name="password" label="Пароль" type="password" />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
          <div className={styles.popupBottom}>
            <Button disabled={form.formState.isSubmitting} type="submit">
              Войти
            </Button>
            {onClickRegister && (
              <Button onClick={onClickRegister} variant="outlined">
                Зарегистрироваться
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
