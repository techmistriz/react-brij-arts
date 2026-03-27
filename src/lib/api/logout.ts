import axiosInstance from "../axios";
export const logoutUser = async () => {
  const token = sessionStorage.getItem("token");

  const response = await axiosInstance.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },  
  );

  return response.data;
};
