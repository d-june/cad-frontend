import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./formComponents.module.scss";

type SelectItemProps = {
  label: string;
  name: string;
  items: string[];
  defaultValue?: string;
};

const SelectItem: FC<SelectItemProps> = ({
  label,
  name,
  items,
  defaultValue,
}) => {
  const { register, formState } = useFormContext();
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  const handleChangeValue = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={styles.formItem}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        {...register(name)}
        error={!!formState.errors[name]?.message}
        onChange={handleChangeValue}
      >
        {items.map((item) => {
          return (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>
        {formState.errors[name]?.message
          ? `${formState.errors[name]?.message}`
          : ""}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectItem;
