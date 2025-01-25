export interface Chart {
    id: string;
    type: 'bar' | 'line' | 'pie';
    data: {
      labels: string[];
      series: {
        name: string;
        values: number[];
        color?: string;
      }[];
    };
  }