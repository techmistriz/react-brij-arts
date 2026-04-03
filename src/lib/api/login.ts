import axiosInstance from "../axios";

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  data: any;
  token: string;
  user: any; // you can type this properly later
};

export const loginUser = async (
  payload: LoginPayload
): Promise<{ token: string; user: any }> => {
  try {
    const res = await axiosInstance.post("/auth/login", payload);

    return res.data.data; //  return only inner data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Login failed");
  }
};