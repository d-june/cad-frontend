import * as yup from "yup";

export const editProductSchema = yup
.object()
.shape({
  title: yup.string().required("Вы забыли заполнить название"),
  description: yup.string().required("Вы забыли заполнить описание"),
  form: yup.string().required("Вы забыли заполнить форму"),
  volume: yup.number().required("Вы забыли заполнить объем"),
  price: yup.number().required("Вы забыли заполнить цену"),
  color: yup.string().required("Вы забыли заполнить цвет"),
  weight: yup.number().required("Вы забыли заполнить вес"),
  height: yup.number().required("Вы забыли заполнить высоту"),
  width: yup.number().required("Вы забыли заполнить ширину"),
  depth: yup.number().required("Вы забыли заполнить глубину"),
  aroma: yup.string().required("Вы забыли заполнить аромат"),
  available: yup.number().required("Вы забыли заполнить количество"),
  burningTime: yup.string().required("Вы забыли заполнить время горения"),
  generalGroup: yup.string().required("Вы забыли заполнить основную группу"),
  specifiedGroup: yup.string().required("Вы забыли заполнить подгруппу"),
  top: yup.boolean(),
})


export const addProductSchema = yup
.object()
.shape({
  file: yup
    .mixed()
    .test("fileSize", "Файла нет или он слишком большой", (value: any) => {
      if (!value.length) return false;
      if (value[0].size) {
        return value[0].size <= 1000000;
      }
    })
})
.concat(editProductSchema);

export const aromaSchema = yup
.object()
.shape({
    name: yup.string().required("Вы забыли заполнить название"),
    description: yup.string().required("Вы забыли заполнить описание"),
    top: yup.string().required("Вы забыли заполнить верхние ноты"),
    middle: yup.string().required("Вы забыли заполнить средние ноты"),
    base: yup.string().required("Вы забыли заполнить базовые ноты"),
})

