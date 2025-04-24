export interface Product {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  interestRate?: number;
  riskLevel?: number;
  term?: string;
  minimumAmount?: number;
  benefits?: string[];
  features?: {
    title: string;
    description: string;
  }[];
  performanceData?: {
    labels: string[];
    values: number[];
  };
}
