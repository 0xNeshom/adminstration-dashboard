import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart, ChartSettings } from '../types/chartTypes';
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
    updateChartColor: (
      state,
      action: PayloadAction<{
        id: string;
        colorType: keyof ChartSettings['color'];
        value: string;
      }>
    ) => {
      const { id, colorType, value } = action.payload;
      const chart = state.charts.find((c) => c.id === id);
      if (chart?.settings?.color) {
        chart.settings.color[colorType] = value;
      }
    },
    toggleChartOrientation: (state, action: PayloadAction<string>) => {
      const chart = state.charts.find((c) => c.id === action.payload);
      if (chart) {
        chart.orientation =
          chart.orientation === 'vertical' ? 'horizontal' : 'vertical';
      }
    },
    updateChartPosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>
    ) => {
      const { id, position } = action.payload;
      const chart = state.charts.find((chart) => chart.id === id);
      if (chart) {
        chart.position = position;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(importChartFromJSON.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        importChartFromJSON.fulfilled,
        (state, action: PayloadAction<Chart[]>) => {
          state.status = 'succeeded';
          state.charts = action.payload;
        }
      )
      .addCase(importChartFromJSON.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : 'Error';
      });
  },
});

export const {
  addChart,
  removeChart,
  saveCharts,
  loadCharts,
  toggleChartOrientation,
  updateChartColor,
  updateChartPosition,
} = chartsSlice.actions;
export default chartsSlice.reducer;
