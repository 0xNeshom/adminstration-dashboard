export interface Chart {
  id: string;
  type: ChartType;
  orientation: 'horizontal' | 'vertical';
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  fields: {
    xAxis: string;
    yAxis: string;
  };
  settings: {
    showLegend: boolean;
    showGrid: boolean;
    color: string;
  };
  data?: Array<{ [key: string]: string | number }>;
}

export type ChartType = 'line' | 'bar' | 'pie' | 'scatter';

export type OrientationType = "vertical" | "horizontal" ;