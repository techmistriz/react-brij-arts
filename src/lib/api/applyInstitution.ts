import axiosInstance from "../axios";

export const submitInstitutionalNomination = async (data: any) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error: any) {
    const apiError = error.response?.data;

    if (apiError?.errors) {
      // get first validation error message
      const firstError = Object.values(apiError.errors)[0][0];
      throw new Error(firstError);
    }

    throw new Error(apiError?.message || "Something went wrong");
  }
};