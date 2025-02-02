import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { addChart, saveCharts } from '../../../features/chartsSlice';
import { setChartType } from '../../../features/currentChartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';
import { Chart, ChartType } from '../../../types/chartTypes';
import OrientationInput from '../OrientationInput';
import ChartInput from '../ChartInput';
import { useAppDispatch } from '../../../store/hooks';

const ChartCreation: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  // const [xAxisValue, setXAxisValue] = useState<string>('');
  // const [yAxisValue, setYAxisValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const currentChart = useSelector((state: RootState) => state.currentChart);

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
      data: [],
      processedData: [],
      timeRange: 'monthly',
      unit: 'kg',
    };
    dispatch(addChart(newChart));
    setError(false);
  };

  const handleChartTypeChange = (event: SelectChangeEvent<ChartType>) => {
    dispatch(setChartType(event.target.value as ChartType));
  };

  const handleSave = () => {
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
        <FormControl size='small' style={{minWidth: 130}}>
          <InputLabel>Time Range </InputLabel>
          <Select>
            <MenuItem>Daily</MenuItem>
            <MenuItem>Weekly</MenuItem>
            <MenuItem>Monthly</MenuItem>
          </Select>
        </FormControl>
        <FormControl size='small' style={{minWidth: 110}}>
          <InputLabel>Unit </InputLabel>
          <Select>
            <MenuItem>Gram</MenuItem>
            <MenuItem>KG</MenuItem>
            <MenuItem>Ton</MenuItem>
          </Select>
        </FormControl>

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
          onClick={handleSave}
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
