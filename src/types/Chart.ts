export interface Chart {
  id: string;
  type: ChartType;
  orientation: 'horizontal' | 'vertical';
  fields: {
    xAxis: string;
    yAxis: string;
  };
  settings: {
    showLegend: boolean;
    showGrid: boolean;
    color: string;
  };
  data: Array<{ [key: string]: string | number }>;
}

export type ChartType = 'line' | 'bar' | 'pie' | 'scatter';
