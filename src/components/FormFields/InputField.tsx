import { TextField } from "@mui/material";
import styles from "./formComponents.module.scss";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  label?: string;
  name: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  type?: string;
};

const Input: FC<InputProps> = ({
  label,
  name,
  multiline,
  rows,
  fullWidth,
  type,
}) => {
  const { register, formState } = useFormContext();
  return (
    <div>
      <TextField
        label={label}
        fullWidth={fullWidth}
        multiline={multiline}
        maxRows={rows}
        type={type}
        {...register(name)}
        error={!!formState.errors[name]?.message}
        helperText={
          formState.errors[name]?.message
            ? `${formState.errors[name]?.message}`
            : ""
        }
        inputProps={{
          step: 0.1,
        }}
        className={styles.formItem}
      />
    </div>
  );
};

export default Input;
