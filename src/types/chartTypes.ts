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
}

// export interface ChartDataItem {
//   name: string;
//   values: ChartValue[];
// }
// export interface ChartValue {
//   pv: number;
//   uv: number;
// }

export interface ChartSettings {
  showLegend: boolean;
  showGrid: boolean;
  color: {
    main: string;
  //   secondary: string, 
  //   tertiary:string;
  };
}

export type TimeRange = 'daily' | 'monthly' | 'yearly';
export type Unit = 'kg' | 'gram' | 'ton';

export interface Chart {
  id: string;
  type: ChartType;
  orientation: Orientation;
  position: Position;
  size?: Size;
  fields: ChartFields;
  settings: ChartSettings;
  data: ChartData;
  timeRange: TimeRange;
  unit: Unit;
  processedData:  { label: string; value: number; product: string }[];
}

// export interface ProcessedChartData {
//   label: string;
//   value: number;
//   product?: string;
// }

export type ChartData = Array<{
  date: string;
  quantity: number;
  unit: 'kg';
  product:string;
}>;
// export interface ChartValue {
//   name:string;
//   pv: number;
//   uv: number;
// }

// export interface PieChartData {
//   name: string;
//   value: number;
//   id: string;
// }

// export interface LineBarChartData {
//   name: string;
//   pv: number;
//   uv: number;
// }

// export type ChartData = LineBarChartData[] ;
