import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartType, Orientation, ChartFields } from '../types/chartTypes';
import { Chart } from '../types/chartTypes';
// interface CurrentChartState {
//   type: ChartType;
//   orientation: Orientation;
//   fields: ChartFields;
//   position: { x: number; y: number };
//   size?: { width: number; height: number };
//   settings: {
//     showLegend: boolean;
//     showGrid: boolean;
//     color: {
//       pv: string;
//       uv: string;
//     };
//   };
//   data: Array<{ name: string; pv: number; uv: number }>;
// }

const initialState: Chart = {
  id: '',
  type: 'bar',
  orientation: 'vertical',
  fields: {
    xAxis: 'name',
    yAxis: 'pv',
    availableFields: [],
    selectedXAxis: '',
    selectedYAxis: '',
  },
  position: { x: 250, y: 250 },
  settings: {
    showLegend: true,
    showGrid: true,
    color: {
      pv: '',
      uv: '',
    },
  },
  data: [
    { name: 'A', pv: 2400, uv: 4000 },
    { name: 'B', pv: 1398, uv: 3000 },
    { name: 'C', pv: 9800, uv: 2000 },
    { name: 'D', pv: 3908, uv: 2780 },
    { name: 'E', pv: 4800, uv: 1890 },
  ],
};

const currentChartSlice = createSlice({
  name: 'currentChart',
  initialState,
  reducers: {
    setChartType: (state, action: PayloadAction<ChartType>) => {
      state.type = action.payload;
    },
    setChartOrientation: (state, action: PayloadAction<Orientation>) => {
      state.orientation = action.payload;
    },
    updateChartFields: (state, action: PayloadAction<Partial<ChartFields>>) => {
      state.fields = { ...state.fields, ...action.payload };
    },
    updateChartSettings: (
      state,
      action: PayloadAction<Partial<Chart['settings']>>
    ) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    updateChartData: (
      state,
      action: PayloadAction<Chart['data']>
    ) => {
      state.data = action.payload;
    },
  },
});

export const {
  setChartType,
  setChartOrientation,
  updateChartFields,
  updateChartSettings,
  updateChartData,
} = currentChartSlice.actions;
export default currentChartSlice.reducer;
