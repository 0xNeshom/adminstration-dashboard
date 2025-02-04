import { createAsyncThunk } from '@reduxjs/toolkit';

export const exportFromLocalStorage = createAsyncThunk<
  { success: boolean },
  void,
  { rejectValue: string }
>('charts/exportFromLocalStorage', async (_, thunkAPI) => {
  const data = localStorage.getItem('savedCharts');
  if (data) {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `charts_export_${new Date().toISOString()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return { success: true };
  } else {
    return thunkAPI.rejectWithValue('No data!');
  }
});
