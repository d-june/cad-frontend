export enum StatusEnum {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductsSliceState {
  totalCount: number;
  products: ProductType[];
  topProducts: ProductType[];
  currentProduct: ProductType | null;
  currentPage: number;
  status: StatusEnum;
  colors: string[];
  gereralGroups: string[];
  specifiedGroups: string[];
  forms: string[];
  burningTimes: string[];
}

export type SearchProductParamsThunkType = {
  currentPage?: number | undefined;
  orderBy?: string | undefined;
  aromas?: string | undefined;
  colors?: string | undefined;
  volumes?: string | undefined;
  forms?: string | undefined;
  currentPrice?: string | undefined
};

export type SearchProductParamsType = {
  page: string;
  orderBy: string;
  aromas: string | undefined;
  colors: string | undefined;
  volumes: string | undefined;
  forms: string | undefined;
  currentPrice: string | undefined
};


export type ResponseProductsType = {
  totalCount: number,
  data: ProductType[]
}

export type ProductType = {
    id: string,
    title: string,
    slug: string,
    images: string[],
    description: string,
    volume: number,
    weight: number,
    height: number,
    width: number,
    depth: number,
    burningTime: string,
    price: number,
    top: boolean,
    generalGroup: string,
    specifiedGroup: string,
    color: string,
    aroma: string,
    available: number,
    form: string
}

export type ProductFormType = {
  id?: string,
  title: string,
  slug?: string,
  images?: string[],
  description: string,
  volume: number,
  weight: number,
  height: number,
  width: number,
  depth: number,
  burningTime: string,
  price: number,
  top: boolean,
  generalGroup: string,
  specifiedGroup: string,
  color: string,
  aroma: string,
  available: number,
  form: string
  file?: File[]
}

export type OrderType = {
  name: string, 
  phone: string, 
  email: string, 
  delivery: string, 
  address: string, 
  text: string, 
  totalPrice: number
}

