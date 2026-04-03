import axiosInstance from "../axios";

export const getApplicationStatus = async (email: string) => {
  try {
    const token = sessionStorage.getItem("token");

    const res = await axiosInstance.post(
      "/status",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error: any) {
    console.error("API Error:", error?.response || error);
    throw error;
  }
};


export const mapStatus = (status: number): string => {
  switch (status) {
    case 1:
      return "under_review";
    case 2:
      return "accepted";
    case 3:
      return "rejected";
    default:
      return "draft";
  }
};