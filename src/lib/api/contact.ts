import axios from "axios";

export interface ContactFormData {
  name: string;
  email: string;
  contact: string;
}

const CONTACT_API_URL = "http://localhost/laravel-brij-arts/api/v1/contact-us-lead";

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const response = await axios.post(CONTACT_API_URL, data);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data); // 👈 important
    throw error;
  }
};
