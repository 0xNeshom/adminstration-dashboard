// types/chartTypes.ts
export type ChartType = 'line' | 'bar' | 'pie';
export type Orientation = 'vertical' | 'horizontal';

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}


export interface ChartFields {
  xAxis: string;
  yAxis: string;
  availableFields: string[];
 
}



export interface ChartDataItem {
  name: string; 
  values: ChartValue[];
}
export interface ChartValue {
  pv: number; 
  uv: number; 
}
  
  export interface ChartSettings {
    showLegend: boolean;
    showGrid: boolean;
    color: {
      pv:string,
      uv:string
    };
  }

export interface Chart {
  id: string;
  type: ChartType;
  orientation: Orientation;
  position: Position;
  size?: Size;
  fields: ChartFields;
  settings: ChartSettings;
  data?: ChartDataItem[];
}

export interface ChartValue {
  pv: number; 
  uv: number; 
}

export interface ChartDataItem {
  name: string;
  values: ChartValue[];  // <-- 'values' here
}
export interface ChartValue {
  pv: number;
  uv: number;
}
export interface Datasets {
  scan: ChartDataItem[];
  vulnerability: ChartDataItem[];
  deviceOverview: ChartDataItem[];
  deviceCritical: ChartDataItem[];
}