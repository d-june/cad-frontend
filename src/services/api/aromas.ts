import  { AxiosInstance } from "axios";
import {  AromaType, CreateAromaType} from "../../redux/slices/aromas/types";


export const AromasApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get("/aromas");
    return data;
  },
  async createAroma(aromaInfo: CreateAromaType) {
    
    const { data } = await instance.post("/aromas/new",  aromaInfo)
    return data;
  },

  async updateAroma(aromaInfo: AromaType) {
    const { data } = await instance.post("/aromas/update", aromaInfo);
    return data;
  },
  async deleteAroma(aromaId: number) {
    const { data } = await instance.delete(`/aromas/${aromaId}`);
    return data;
  },
  async updateImage(aromaId: number, image: File) {
    const formData = new FormData();
    formData.append("file", image);
    const { data } = await instance.post(`/aromas/upload/${aromaId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }});
    return data;
  },


});
