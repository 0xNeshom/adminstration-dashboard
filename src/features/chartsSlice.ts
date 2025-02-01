import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../types/chartTypes';
interface ChartsState {
  charts: Chart[];
}

const initialState: ChartsState = {
  charts: [],
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<Chart>) => {
      state.charts.push(action.payload);
    },
    removeChart: (state, action: PayloadAction<string>) => {
      state.charts = state.charts.filter(
        (chart) => chart.id !== action.payload
      );
    },
    saveCharts: (state) => {
      localStorage.setItem('savedCharts', JSON.stringify(state.charts));
    },
    loadCharts: (state) => {
      const savedCharts = localStorage.getItem('savedCharts');
      if (savedCharts) {
        state.charts = JSON.parse(savedCharts);
      }
    },
    toggleChartOrientation: (state, action: PayloadAction<string>) => {
      const chart = state.charts.find((c) => c.id === action.payload);
      if (chart) {
        chart.orientation =
          chart.orientation === 'vertical' ? 'horizontal' : 'vertical';
      }
    },
  },
});

export const {
  addChart,
  removeChart,
  saveCharts,
  loadCharts,
  toggleChartOrientation,
} = chartsSlice.actions;
export default chartsSlice.reducer;
