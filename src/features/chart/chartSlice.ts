import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../../types/Chart';
import { ChartType } from '../../types/Chart';
interface ChartState {
  charts: Chart[];
  currentChart:Partial<Chart>
}

const initialState: ChartState = {
  charts: [],
  currentChart: {
    type: 'line' as ChartType ,
    orientation: 'vertical',
    fields: {
      xAxis: '',
      yAxis: ''
    },
    settings: {
      showLegend: true,
      showGrid: true,
      color: '#8884d8'
    }
  }
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setChartType:(state,action:PayloadAction<ChartType>)=>{
      state.currentChart.type = action.payload;
    },
    addChart: (state, action: PayloadAction<Chart>) => {
      state.charts.push(action.payload);
    },
    removeChart: (state, action: PayloadAction<string>) => {
      state.charts = state.charts.filter(
        (chart) => chart.id !== action.payload
      );
    },
  },
});

export const {setChartType, addChart, removeChart } = chartsSlice.actions;
export default chartsSlice.reducer;
