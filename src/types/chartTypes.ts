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

export interface ChartFieldDefinition {
  key: string;
  label: string;
  type: string;
}

export interface ChartFields {
  availableFields: ChartFieldDefinition[];
  selectedXAxis: string;
  selectedYAxis: string;
}

// export interface ChartSettings {
//   showLegend: boolean;
//   showGrid: boolean;
//   color: string;
// }

export interface ChartDataItem {
  [key: string]: string | number;
}

export interface ChartFields {
    xAxis: string;
    yAxis: string;
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