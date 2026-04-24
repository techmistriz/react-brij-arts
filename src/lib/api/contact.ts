import axiosInstance from "../axios";

export interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await axiosInstance.post("/contact-us-lead", data);
    return response.data;
  } catch (error: any) {
    console.log(error.response?.data);
    throw error;
  }
};