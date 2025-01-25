import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../../types/Chart';

interface ChartState {
  charts: Chart[];
}

const initialState: ChartState = {
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
  },
});

export const { addChart, removeChart } = chartsSlice.actions;
export default chartsSlice.reducer;
