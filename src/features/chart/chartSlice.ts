/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chart } from '../../types/chart';
import { TchartType } from '../../types/chartType';
import { Torientation } from '../../types/orientation';
import {ChartFields} from '../../types/chartFields';
import { ChartSettings } from '../../types/chartSetting';
interface ChartState {
  charts: Chart[];
  currentChart: Partial<Chart>;
}

const initialState: ChartState = {
  charts: [],
  currentChart: {
    type: '' as TchartType,
    orientation: 'vertical' as Torientation,
    fields: {
      xAxis: 'name',
      yAxis: 'pv',
    },
    position: { x: 250, y: 250 },
    settings: {
      showLegend: true,
      showGrid: true,
      color: {
        pv: '#8884d8' ,
        uv:'#82ca9d'
      },
    },
    data: [
      { name: 'A', pv: 2400, uv: 4000 },
      { name: 'B', pv: 1398, uv: 3000 },
      { name: 'C', pv: 9800, uv: 2000 },
      { name: 'D', pv: 3908, uv: 2780 },
      { name: 'E', pv: 4800, uv: 1890 },
    ],
  },
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setChartType: (state, action: PayloadAction<TchartType>) => {
      state.currentChart.type = action.payload;
    },
    addChart: (state) => {
      const newChart: Chart = {
        id: Date.now().toString(),
        type: state.currentChart.type as TchartType,
        orientation: state.currentChart.orientation as Torientation,
        fields: state.currentChart.fields as ChartFields,
        settings: state.currentChart.settings as Chart['settings'],
        position: { x: 250, y: 250 },
        size: { width: 400, height: 300 },
        data: state.currentChart.data,
      };
      state.charts.push(newChart);
    },

    removeChart: (state, action: PayloadAction<string>) => {
      state.charts = state.charts.filter(
        (chart) => chart.id !== action.payload
      );
    },
    saveChart: (state) => {
      localStorage.setItem('savedCharts', JSON.stringify(state.charts));
    },
    laodCharts: (state) => {
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
    setChartOrientation: (state, action: PayloadAction<Torientation>) => {
      state.currentChart.orientation = action.payload;
    },
    setChartColors: (
      state,
      action: PayloadAction<Partial<ChartSettings>>
    ) => {
      if (state.currentChart.settings) {
        state.currentChart.settings = {
          ...state.currentChart.settings,
          ...action.payload,
        };
      }
    },
  },
});

export const {
  setChartType,
  addChart,
  removeChart,
  saveChart,
  laodCharts,
  toggleChartOrientation,
  setChartOrientation,
  setChartColors
} = chartsSlice.actions;
export default chartsSlice.reducer;
