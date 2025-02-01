import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartType, Orientation, ChartFields } from '../types/chartTypes';
import { Chart } from '../types/chartTypes';

const initialState: Chart = {
  id: Date.now().toString(),
  type: '',
  orientation: 'vertical',
  fields: {
    xAxis: 'uv',
    yAxis: 'pv',
    availableFields: ['name', 'value'],
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

  data: [],
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
    updateChartData: (state, action: PayloadAction<Chart['data']>) => {
      state.data = action.payload;
    },
    // updateSelectedFields: (state, action: PayloadAction<Partial<Chart['selectedFields']>>) => {
    //   state.selectedFields = { ...state.selectedFields, ...action.payload };
    // },
  },
});

export const {
  setChartType,
  setChartOrientation,
  updateChartFields,
  updateChartSettings,
  updateChartData,
  // updateSelectedFields
} = currentChartSlice.actions;
export default currentChartSlice.reducer;
