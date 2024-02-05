export type CartItemType = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  aroma: string;
  count: number;
  availableCount?: number,
  imageUrl?: string,
  color: string, 
  volume?: number
};



export interface CartSliceState {
  totalPrice: number;
  products: CartItemType[];
}







