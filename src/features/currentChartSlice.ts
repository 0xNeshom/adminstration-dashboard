import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartType, Orientation, ChartFields } from '../types/chartTypes';
import { Chart } from '../types/chartTypes';
import { sampleData } from '../utils/data';
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
    updateChartFields: (state, action: PayloadAction<Partial<ChartFields>>) => {
      state.fields = { ...state.fields, ...action.payload };
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
      const convertUnit = (value: number) => {
        switch (state.unit) {
          case 'gram':
            return value * 1000;
          case 'ton':
            return value / 1000;
          default:
            return value;
        }
      };
      const groupedData: Record<string, number> = {};
      state.data.forEach((item) => {
        const date = new Date(item.date);
        let key: string = '';

        switch (state.timeRange) {
          case 'daily':
            key = date.toISOString().split('T')[0];
            break;

          case 'monthly':
            key = `${date.getFullYear()}-${date.getMonth() + 1}`;
            break;

          case 'yearly':
            key = date.getFullYear().toString();
            break;
        }

        if (!groupedData[key]) {
          groupedData[key] = 0;
        }

        groupedData[key] += convertUnit(item.quantity);
      });

      state.processedData = Object.entries(groupedData).map(
        ([label, value]) => {
          const product = state.data.length > 0 ? state.data[0].product : '';
          return {
            label,
            value: Number(value.toFixed(2)),
            product,
          };
        }
      );
    },
  },
});

export const {
  setChartType,
  setChartOrientation,
  processedChartData,
  setTimeRange,
  setUnit,
  updateChartFields,

} = currentChartSlice.actions;
export default currentChartSlice.reducer;
