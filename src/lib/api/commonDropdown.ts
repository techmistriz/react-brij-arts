import axiosInstance from "../axios"

export const getCountries = async() => {
    const response = await axiosInstance.get("/countries") 
    return response.data.data
 }

  export const getJobLevels = async() => {
    const response = await axiosInstance.get("/job-levels") 
    return response.data
 }
 
 export const getIndustries = async() => {
    const response = await axiosInstance.get("/industries") 
    return response.data
 }

 export const getCohorts = async() => {
  const response = await axiosInstance.get("/cohorts")
  return response.data
 }

 export const getFelloship = async() => {
  const response  =  await axiosInstance.get("/fellowship-sources")
  return response.data
 } 
 
 export const getInstitution = async() => {
  const response  =  await axiosInstance.get("/institution-types")
  return response.data
 }