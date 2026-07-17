import { ComplianceReport, ComplianceResponse } from "@/types/compliance";
import axiosInstance from "../axios";

export const getComplianceReports = async (): Promise<
  ComplianceReport[]
> => {
  const response = await axiosInstance.get<ComplianceResponse>(
    "/compliance-report"
  );

  return response.data.data;
};