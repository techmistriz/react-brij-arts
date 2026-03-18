import axiosInstance from "../axios";
export interface Nominee {
  first_name: string;
  last_name: string;
  email: string;
  role_title: string;
}

export interface NomineeResponse {
  status: boolean;
  data: Nominee;
  message: string;
}


export const getNominee = async (id: string): Promise<Nominee> => {
  try {
    const response = await axiosInstance.get<NomineeResponse>(
      `/get-nominee/${id}`
    );

    return response.data.data; // return only useful data
  } catch (error: any) {
    console.error("GET NOMINEE ERROR:", error.response?.data);

    throw new Error(
      error.response?.data?.message || "Failed to fetch nominee data"
    );
  }
};