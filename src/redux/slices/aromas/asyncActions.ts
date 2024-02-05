import { createAsyncThunk } from "@reduxjs/toolkit";
import {  AromaType, CreateAromaType} from "./types";
import { Api } from "@/services/api";



export const getAromas = createAsyncThunk<
  AromaType[]
>("products/getAromas", async () => {
  const data = await Api().aromas.getAll();
  return data;
});

export const createAroma = createAsyncThunk<
  AromaType,
  CreateAromaType
>("products/createAroma", async (aromaInfo) => {
  const data = await Api().aromas.createAroma(aromaInfo);
  return data;
});

export const updateAroma = createAsyncThunk<
  AromaType,
  AromaType
>("products/updateAroma", async (aromaInfo) => {
  const data = await Api().aromas.updateAroma(aromaInfo);
  return data;
});

export const updateAromaImage = createAsyncThunk<
  AromaType,
  {aromaId: number, image: File}
>("products/updateAromaImage", async ({aromaId, image}) => {
  const data = await Api().aromas.updateImage(aromaId, image);
  return data;
});

export const deleteAroma = createAsyncThunk<
  AromaType,
  number
>("products/deleteAroma", async (aromaId) => {
  const data = await Api().aromas.deleteAroma(aromaId);
  return data;
});




