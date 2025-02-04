import { createAsyncThunk } from "@reduxjs/toolkit";
import { Chart } from "../types/chartTypes";

export const importChartFromJSON = createAsyncThunk<
  Chart[],      
  File,         
  { rejectValue: string }
>(
  "charts/importFromJSON",
  async (file) => {
    
      const text = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = () => {
          reject("Error!");
        };
        reader.readAsText(file);
      });

      
      const data: Chart[] = JSON.parse(text);
      return data;
    }
   
  
);
