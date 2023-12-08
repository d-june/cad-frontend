export type CartItemType = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  aroma: AromaType;
  availableCount?: number,
  imageUrl?: string,
  color: string, 
  volume?: number
};


type AromaType = {
  name: string; 
  count: number;
}

export interface CartSliceState {
  totalPrice: number;
  products: CartItemType[];
}







