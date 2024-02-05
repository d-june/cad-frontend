export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASK = "-rating",
  TITLE_DESC = "title",
  TITLE_ASK = "-title",
  PRICE_DESK = "price",
  PRICE_ASK = "-price",
}


export interface FilterSliceState {
  currentPage: number;
  sortData: string;
  aromas?:  string,
  colors?:  string,
  forms?: string,
  volumes?: string,
  currentPrice?:  string
}
