
import axiosInstance from "../axios";

export const submitApplication = async (data: any) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    console.log("API ERROR:", error.response?.data); // important
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

export const submitApplication2 = async (id: string, data: any) => {
  try{
    const response = await axiosInstance.post(`/nominee-application/${id}`, data);
    return response.data;
  } catch (error: any) {
    console.log("API ERROR:", error.response?.data);
     throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
}

