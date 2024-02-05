import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { setFilters } from "@/redux/slices/filter/slice";
import { useSelector } from "react-redux";
import { selectFilter } from "@/redux/slices/filter/selectors";

import AccordionBlock from "./AccordionBlock";

import styles from "./Filter.module.scss";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { selectAromasData } from "@/redux/slices/aromas/selectors";
import { getAromas } from "@/redux/slices/aromas/asyncActions";
import { selectProductsData } from "@/redux/slices/products/selectors";

type FilterProps = {
  setFilterVisible: Dispatch<SetStateAction<boolean>>;
};

const Filter: FC<FilterProps> = ({ setFilterVisible }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000]);
  const { aromas, colors, volumes, forms, currentPrice } =
    useSelector(selectFilter);
  const minDistance = 100;

  const aromasData = useAppSelector(selectAromasData);
  const data = useAppSelector(selectProductsData);

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  useEffect(() => {
    dispatch(getAromas());
  }, []);

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - minDistance),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + minDistance),
      ]);
    }
  };

  const onSubmit = async (dto: any, e: any) => {
    e.preventDefault();
    const dtoWithCurrentPrice = {
      ...dto,
      currentPrice: priceRange,
      currentPage: 1,
    };
    dispatch(setFilters(dtoWithCurrentPrice));
    setFilterVisible(false);
  };

  const clearFiltres = () => {
    location.search = "";
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterTop}>
        <div className={styles.filterTitle}>Фильтр</div>
        <div
          className={styles.filterIcon}
          onClick={() => setFilterVisible(false)}
        >
          <CloseOutlinedIcon />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.addProductForm}>
        <AccordionBlock
          expanded={expanded}
          handleChangeAccordion={handleChangeAccordion}
          name="price"
          title="Цена"
        >
          <Slider
            defaultValue={[
              Number(currentPrice?.split(",")[0]),
              Number(currentPrice?.split(",")[1]),
            ]}
            value={priceRange}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            disableSwap
            min={0}
            max={3000}
          />
          <div>
            от {priceRange[0]} ₽ до {priceRange[1]} ₽
          </div>
        </AccordionBlock>
        <AccordionBlock
          expanded={expanded}
          handleChangeAccordion={handleChangeAccordion}
          name="aromas"
          title="Аромат"
        >
          <FormGroup defaultValue={aromas}>
            {aromasData.aromas.map((aroma, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      {...register("aromas")}
                      defaultChecked={aromas?.includes(aroma.name)}
                    />
                  }
                  value={aroma.name}
                  label={aroma.name}
                />
              );
            })}
          </FormGroup>
        </AccordionBlock>

        <AccordionBlock
          expanded={expanded}
          handleChangeAccordion={handleChangeAccordion}
          name="colors"
          title="Цвет"
        >
          <FormGroup>
            {data.colors.map((color, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      {...register("colors")}
                      defaultChecked={colors?.includes(color)}
                    />
                  }
                  value={color}
                  label={color}
                />
              );
            })}
          </FormGroup>
        </AccordionBlock>

        <AccordionBlock
          expanded={expanded}
          handleChangeAccordion={handleChangeAccordion}
          name="forms"
          title="Форма"
        >
          <FormGroup>
            {data.forms.map((form, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      {...register("forms")}
                      defaultChecked={forms?.includes(form)}
                    />
                  }
                  value={form}
                  label={form}
                />
              );
            })}
          </FormGroup>
        </AccordionBlock>

        <AccordionBlock
          expanded={expanded}
          handleChangeAccordion={handleChangeAccordion}
          name="volumes"
          title="Объем"
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("volumes")}
                  defaultChecked={volumes?.includes("50")}
                />
              }
              value={50}
              label="50 мл"
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...register("volumes")}
                  defaultChecked={volumes?.includes("100")}
                />
              }
              value={100}
              label="100 мл"
            />
            <FormControlLabel
              control={
                <Checkbox
                  {...register("volumes")}
                  defaultChecked={volumes?.includes("180")}
                />
              }
              value={180}
              label="180 мл"
            />
          </FormGroup>
        </AccordionBlock>
        <div className={styles.filterBottom}>
          <Button variant="contained" type="submit">
            Применить
          </Button>
          <Button onClick={clearFiltres}>Сбросить</Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
