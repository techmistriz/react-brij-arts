import axiosInstance from "../axios";

export const submitApplication = async (data: any, bursaryFile?: File) => {
  try {
    const formData = new FormData();

    // Append all fields from data
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // Append file if exists
    if (bursaryFile) {
      formData.append("bursary_document", bursaryFile); // backend expects this name
    }

    const response = await axiosInstance.post("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    const res = error?.response?.data;


    let message = "Something went wrong";

    if (res?.errors) {
      message = Object.values(res.errors)[0][0];
    } else if (res?.message) {
      message = res.message;
    }

    throw new Error(message);
  }
};

export const submitApplication2 = async (id: string, data: any) => {
  try {
    const response = await axiosInstance.post(
      `/nominee-application/${id}`,
      data,
    );
    return response.data;
  } catch (error: any) {
    const res = error?.response?.data;

    let message = "Something went wrong";

    if (res?.errors) {
      message = Object.values(res.errors)[0][0];
    } else if (res?.message) {
      message = res.message;
    }

    throw new Error(message);
  }
};
