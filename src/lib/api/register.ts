
import axiosInstance from "../axios";

export const submitApplication = async (data: any) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    const res = error?.response?.data;

    console.log("API ERROR:", res);

    let message = "Something went wrong";

    if (res?.errors) {
      message = Object.values(res.errors)[0][0]; // ✅ correct extraction
    } else if (res?.message) {
      message = res.message;
    }

    throw new Error(message); // ✅ now sending proper string
  }
};

export const submitApplication2 = async (id: string, data: any) => {
  try {
    const response = await axiosInstance.post(`/nominee-application/${id}`, data);
    return response.data;
  } catch (error: any) {
    const res = error?.response?.data;

    console.log("API ERROR:", res);

    let message = "Something went wrong";

    if (res?.errors) {
      message = Object.values(res.errors)[0][0];
    } else if (res?.message) {
      message = res.message;
    }

    throw new Error(message);
  }
};
