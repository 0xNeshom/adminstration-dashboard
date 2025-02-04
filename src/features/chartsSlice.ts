/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../types/chartTypes';
import { importChartFromJSON } from './importThunks';
interface ChartsState {
  charts: Chart[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
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
  extraReducers: (builder) => {
    builder
      .addCase(importChartFromJSON.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(importChartFromJSON.fulfilled, (state, action: PayloadAction<Chart[]>) => {
        state.status = "succeeded";
        state.charts = action.payload;
      })
      .addCase(importChartFromJSON.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload : "Error";
      });
  },
});

export const {
  addChart,
  removeChart,
  saveCharts,
  loadCharts,
  toggleChartOrientation,
  // editChartColor,
} = chartsSlice.actions;
export default chartsSlice.reducer;
