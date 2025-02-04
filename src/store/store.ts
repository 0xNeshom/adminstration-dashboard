import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/chartsSlice';
import currentChartReducer from '../features/currentChartSlice';
// import exportChartSlice from '../features/exportChartSlice'
export const store = configureStore({
  reducer: {
    charts: chartsReducer,
    currentChart: currentChartReducer,
    // exportChart: exportChartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
