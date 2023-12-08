import { AxiosInstance } from "axios";
import { CreateUserDto, LoginDto, ResponseUser } from "@/services/api/types";

export let accessToken = ''


export const UsersApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<ResponseUser[]>("/users");
    return data;
  },
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      "/auth/register",
      dto
    );
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      "/auth/login",
      dto
    );
    localStorage.setItem('token', data.accessToken)
    return data;
  },
  async logout() {
    const { data } = await instance.get(
      "/auth/logout"
    );
    localStorage.clear()
    return data;
  },
  async getMe() {
    const { data } = await instance.get<ResponseUser>("/user/me");
    return data;
  },
});


;

