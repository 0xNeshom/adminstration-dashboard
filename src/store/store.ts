import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/chartsSlice';
import currentChartReducer from '../features/currentChartSlice';
export const store = configureStore({
  reducer: {
    charts: chartsReducer,
    currentChart: currentChartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
