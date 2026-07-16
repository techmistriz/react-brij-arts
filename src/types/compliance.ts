export interface ComplianceReport {
  id: number;
  title: string;
  year: string;
  description: string;
  bg_image: string;
  report_file: string;
}

export interface ComplianceResponse {
  status: boolean;
  data: ComplianceReport[];
  meta: any[];
  message: string;
}