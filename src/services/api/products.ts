
import { AxiosInstance } from "axios";
import { OrderType, ProductFormType } from "@/redux/slices/products/types";



export const ProductsApi = (instance: AxiosInstance) => ({
  async getAll(params?: any) {
  
    let queryString = []
    if(params) {
      for (const [key, value] of Object.entries(params)) {
        if (value && value !== 1) {
          queryString.push(`${key + '=' + params[key]}`)
        }
      
      }
    }

    const { data } = await instance.get(`/products?${queryString && queryString.join('&')}&take=20`);
    return data;
  },

  async getTopProducts() {
    const { data } = await instance.get(`/products/top`);
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

  async updateAvailableCountById(id: string, available: number) {
    const { data } = await instance.post(`/products/update-available/${id}`,  {available: available})
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
      this.updateImages(res.id, productInfo.file[0])
    }) 
    return data
  },
  async updateProduct(productInfo: ProductFormType) {
    const { data } = await instance.post("/products/update", productInfo);
    return data;
  },
  async deleteProduct(productId: string) {
   
    const { data } = await instance.delete(`/products/${productId}`);

    return data;
  },

  async sendOrder(order: OrderType) {
    
    const { data } = await instance.get(`/products/send?name=${order.name}&phone=${order.phone}&email=${order.email}&delivery=${order.delivery}&address=${order.address}&text=${order.text}&totalPrice=${order.totalPrice}`);
    return data;
  },

  async createAroma(productId: string, aroma: any) {
    const { data } = await instance.post(`/products/aroma/create/${productId}`, aroma);
    return data;
  },



  async deleteAroma(aromaId: number) {
    const { data } = await instance.delete(`/products/aroma/${aromaId}`);
    return data;
  },

});





export const getProductById = async (slug:string)=> {
  const response = await fetch(`https://owa.cadhome.ru/api/products/${slug}`);
  if(!response.ok) throw new Error("Ошибка сервера. Товар не найден")
  return response.json() 
}