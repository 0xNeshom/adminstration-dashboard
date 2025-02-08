import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  ChartType, Orientation } from '../types/chartTypes';
import { Chart } from '../types/chartTypes';
import { sampleData } from '../utils/data';
import {processChartData} from '../utils/chartDataProcessor'
const initialState: Chart = {
  id: Date.now().toString(),
  type: 'bar',
  orientation: 'vertical',
  fields: {
    xAxis: 'name',
    yAxis: 'pv',
  },
  position: { x:250, y:250 }, 
  settings: {
    showLegend: true,
    showGrid: true,
    color: {
      main: '#16C47F',
    },
  },

  data: sampleData,
  timeRange: 'monthly',
  processedData: [],
  unit: 'kg',
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
    
    setTimeRange: (
      state,
      action: PayloadAction<'daily' | 'monthly' | 'yearly'>
    ) => {
      state.timeRange = action.payload;
    },
    setUnit: (state, action: PayloadAction<'gram' | 'kg' | 'ton'>) => {
      state.unit = action.payload;
    },
 processedChartData: (state) => {
      state.processedData = processChartData(state.data, state.timeRange, state.unit);
    },
  },
});

export const {
  setChartType,
  setChartOrientation,
  processedChartData,
  setTimeRange,
  setUnit,
  

} = currentChartSlice.actions;
export default currentChartSlice.reducer;
