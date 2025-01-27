import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../../types/Chart';
import { ChartType } from '../../types/Chart';
interface ChartState {
  charts: Chart[];
  currentChart:Partial<Chart>
}


const sampleData = [
  {name: 'Jan', pv: 2400, uv: 4000},
  {name: 'Feb', pv: 1398, uv: 3000},
  {name: 'Mar', pv: 9800, uv: 2000},
  {name: 'Apr', pv: 3908, uv: 2780},
  {name: 'May', pv: 4800, uv: 1890}
];

const initialState: ChartState = {
  charts: [],
  currentChart: {
    type: 'line' as ChartType ,
    orientation: 'vertical',
    fields: {
      xAxis: 'name',
      yAxis: 'pv'
    },
    settings: {
      showLegend: true,
      showGrid: true,
      color: '#8884d8'
    },
    data: sampleData
  }
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setChartType: (state, action: PayloadAction<ChartType>) => {
      state.currentChart.type = action.payload;
    },
    addChart: (state) => {
      const newChart: Chart = {
        id: Date.now().toString(),
        type: state.currentChart.type as ChartType,
        orientation: state.currentChart.orientation as 'horizontal' | 'vertical',
        fields: state.currentChart.fields as { xAxis: string; yAxis: string },
        settings: state.currentChart.settings as Chart['settings'],
        position: { x: 0, y: 0 },
        size: { width: 400, height: 300 },
        data: sampleData
      };
      state.charts.push(newChart);
    },
    removeChart: (state, action: PayloadAction<string>) => {
      state.charts = state.charts.filter(chart => chart.id !== action.payload);
    }
  },
});

export const { 
  setChartType, 
  addChart, 
  removeChart 
} = chartsSlice.actions;
export default chartsSlice.reducer;
