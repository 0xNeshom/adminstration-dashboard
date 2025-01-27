import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../../types/Chart';
import { ChartType } from '../../types/Chart';
interface ChartState {
  charts: Chart[];
  currentChart:Partial<Chart>
}


const sampleData = [
  {name: 'َA', pv: 2400, uv: 4000},
  {name: 'B', pv: 1398, uv: 3000},
  {name: 'C', pv: 9800, uv: 2000},
  {name: 'D', pv: 3908, uv: 2780},
  {name: 'E', pv: 4800, uv: 1890}
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
        position: { x: 250, y: 250 },
        size: { width: 400, height: 300 },
        data: sampleData
      };
      state.charts.push(newChart);
    },
    setChartField: (state, action: PayloadAction<{ xAxis: string; yAxis: string }>) => {
      state.currentChart.fields = action.payload;
    },
    removeChart: (state, action: PayloadAction<string>) => {
      state.charts = state.charts.filter(chart => chart.id !== action.payload);
    },
    saveChart:(state)=>{
      localStorage.setItem('savedCharts', JSON.stringify(state.charts));

    },
    laodCharts:(state) =>{
      const savedCharts =localStorage.getItem('savedCharts');
      if(savedCharts){
        state.charts = JSON.parse(savedCharts);
      }
    }
  },
});

export const { 
  setChartType, 
  addChart, 
  removeChart, 
  setChartField,
  saveChart,
  laodCharts
} = chartsSlice.actions;
export default chartsSlice.reducer;
