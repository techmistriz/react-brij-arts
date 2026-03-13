import axiosInstance from "../axios";

export const submitInstitutionalNomination = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      "/auth/register",
      data
    );

    return response.data;
  } catch (error: any) {
    console.log("API ERROR:", error.response?.data); // important
    throw new Error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};