// store/currentChartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TchartType } from '../../types/chartType';
import { Torientation } from '../../types/orientation';
import { ChartFields } from '../../types/chartFields';
import { ChartSettings } from '../../types/chartSetting';

interface CurrentChartState {
  type: TchartType;
  orientation: Torientation;
  fields: ChartFields;
  position: { x: number; y: number };
  settings: ChartSettings;
  data: Array<{ name: string; pv: number; uv: number }>;
}

const initialState: CurrentChartState = {
  type: 'bar',
  orientation: 'vertical',
  fields: {
    xAxis: 'name',
    yAxis: 'pv',
  },
  position: { x: 250, y: 250 },
  settings: {
    showLegend: true,
    showGrid: true,
    color: {
      pv: '#8884d8',
      uv: '#82ca9d',
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
    setChartType: (state, action: PayloadAction<TchartType>) => {
      state.type = action.payload;
    },
    setChartOrientation: (state, action: PayloadAction<Torientation>) => {
      state.orientation = action.payload;
    },
    setChartColors: (state, action: PayloadAction<{ pv?: string; uv?: string }>) => {
      state.settings.color = {
        ...state.settings.color,
        ...action.payload,
      };
    },
  },
});

export const { setChartType, setChartOrientation, setChartColors } =
  currentChartSlice.actions;
export default currentChartSlice.reducer;