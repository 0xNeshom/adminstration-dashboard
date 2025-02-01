import Fields from '../FieldsInput';
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { addChart, saveCharts } from '../../../features/chartsSlice';
import { setChartType } from '../../../features/currentChartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';
import { Chart, ChartType } from '../../../types/chartTypes';
import OrientationInput from '../OrientationInput';
import ChartInput from '../ChartInput';
// import CustomizableChart from './CustomizableChart ';
const ChartCreation = () => {
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const currentChart = useSelector(
    (state: RootState) => state.currentChart
  );

  const handleCreate = () => {
    if (!currentChart.type) {
      setError(true);
      return;
    }
  
    const newChart: Chart = {
      id: Date.now().toString(), 
      type: currentChart.type,
      orientation: currentChart.orientation,
      fields: currentChart.fields,
      settings: currentChart.settings,
      position: currentChart.position,
      size: { width: 400, height: 300 }, 
      data: currentChart.data,
    };
  
    dispatch(addChart(newChart));
    setError(false);
  };

  const handleChartTypeChange = (event: SelectChangeEvent<ChartType>) => {
    dispatch(setChartType(event.target.value as ChartType));
  };

  const handlSave = () => {
    dispatch(saveCharts());
  };

  return (
    <>
      <Box
        style={{
          display: 'flex',
          width: '100%',
          height: '50px',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          Chart Creation
        </Typography>
        <Divider orientation='vertical' />
        <OrientationInput />
        <ChartInput error={error} handleChart={handleChartTypeChange} />

        <Fields />
        <Button
          variant='contained'
          onClick={handleCreate}
          sx={{ height: '80%' }}
        >
          Create
        </Button>
        <Button
          sx={{ height: '80%' }}
          variant='contained'
          onClick={handlSave}
          disabled={!currentChart.type}
        >
          Save
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ marginTop: '10px' }} />
    </>
  );
};

export default ChartCreation;
