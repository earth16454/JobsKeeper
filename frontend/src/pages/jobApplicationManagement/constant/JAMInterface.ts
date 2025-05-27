import React from "react";

export interface JAMFormValues {
  Position: string;
  CompanyName?: string;
  ApplicationDate?: string;
  Location?: string;
  Status?: string;
  Notes?: string;
}

export interface JAMTableData extends JAMFormValues {
  key: React.Key;
}