
import axiosInstance from "../axios"

export const getCountries = async() => {
    const response = await axiosInstance.get("/countries") 
    return response.data.data
 }

 
 export const getInstitution_type = async() => {
  const response  =  await axiosInstance.get("/institution-types")
  return response.data
 }