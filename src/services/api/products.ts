
import { AxiosInstance } from "axios";
import { CreateProductDto } from "./types";
import { AromaType } from "@/app/types/types";
import next from "next";

export const ProductsApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get("/products");
    return data;
  },
  async getBySlug(slug: string) {
    const { data } = await instance.get(`/products/${slug}`);
    return data;
  },
  async createProductData(productInfo: any) {
    
    const { data } = await instance.post("/products/new",  productInfo)
    return data;
  },

  async updateImages(productId: string, image: File) {
        const formData = new FormData();
        formData.append("file", image);
        const { data } = await instance.post(`/products/upload/${productId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }});
        return data;
      },

      async deleteImage(productId: string, filename: string) {
        const { data } = await instance.delete(`/products/images/${productId}/${filename}`);
        return data;
      },

  async createProduct  (productInfo: any)  {
    const data = await this.createProductData(productInfo).then(res => {
      console.log(res)
      this.updateImages(res.id, productInfo.file[0])
    }) 
    return data
  },
  async updateProduct(productInfo: CreateProductDto) {
    const { data } = await instance.post("/products/update", productInfo);
    return data;
  },
  async deleteProduct(productId: string) {
    const { data } = await instance.delete(`/products/${productId}`);
    return data;
  },

  async sendOrder(name: string, phone: string, email: string, delivery: string, address: string, text: string, totalPrice: number) {
    const { data } = await instance.get(`/products/send?name=${name}&phone=${phone}&email=${email}&delivery=${delivery}&address=${address}&text=${text}&totalPrice=${totalPrice}`);
    return data;
  },

  async createAroma(productId: string, aroma: any) {
    const { data } = await instance.post(`/products/aroma/create/${productId}`, aroma);
    return data;
  },

  async updateAroma(aroma: AromaType) {
    const { data } = await instance.post(`/products/aroma/update/${aroma.id}`, aroma);
    return data;
  },

  async deleteAroma(aromaId: number) {
    const { data } = await instance.delete(`/products/aroma/${aromaId}`);
    return data;
  },

});



export const getAllProducts = async ()=> {
  return fetch("http://api.cadhome.ru/api/products", {
    next: {revalidate: 1}
  }).then(res => res.json())
 

}

export const getProductById = async (slug:string)=> {
  const response = await fetch(`http://api.cadhome.ru/api/products/${slug}`);
  if(!response.ok) throw new Error("Ошибка сервера. Товар не найден")
  return response.json() 
}