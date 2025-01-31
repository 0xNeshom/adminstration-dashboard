import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../features/chartSlice';
import currentChartReducer from '../features/chartSlice';
export const store = configureStore({
  reducer: {
    charts: chartsReducer,
    currentChart: currentChartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
