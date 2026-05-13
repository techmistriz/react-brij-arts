import axiosInstance from "../axios";

export const getDisciplines = async () => {
  const res = await axiosInstance.get("/disciplines");
  return res.data?.data; // returns array
};