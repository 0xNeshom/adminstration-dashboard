import { Box, SelectChangeEvent, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { addChart, saveCharts } from '../../features/chartsSlice';
import {processedChartData,setChartType,
} from '../../features/currentChartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect, useState } from 'react';
import { Chart, ChartType } from '../../types/chartTypes';
import OrientationInput from './container/inputs/OrientationInput';
import ChartInput from './container/inputs/ChartInput';
import { useAppDispatch } from '../../store/hooks';
import TimeRange from './container/inputs/TimeRange';
import UnitInput from './container/inputs/UnitInput';
import ReusableButton from '../ui/ReusableButton';

const ChartCreation: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const currentChart = useSelector((state: RootState) => state.currentChart);

  useEffect(() => {
    dispatch(processedChartData());
  }, [currentChart.unit, currentChart.timeRange, dispatch]);

  const handleCreate = () => {
    if (!currentChart.type || !currentChart.timeRange) {
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
      data: currentChart.data,
      processedData: currentChart.processedData,
      timeRange: currentChart.timeRange,
      unit: currentChart.unit,
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
        style={{display: 'flex',width: '100%',height: '50px',gap: '10px',alignItems: 'center',}} >
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          Chart Creation
        </Typography>
        <Divider orientation='vertical' />
        <OrientationInput />
        <ChartInput error={error} handleChart={handleChartTypeChange} />
        <TimeRange error={error} />
        <UnitInput error={error} />
        <ReusableButton size='medium' variant='contained' onClick={handleCreate}>
          Create
        </ReusableButton>
        <ReusableButton size='medium' variant='contained' onClick={handleSave} disabled={!currentChart.type}>
          Save
        </ReusableButton>
      </Box>
      <Divider orientation='horizontal' sx={{ marginTop: '10px' }} />
    </>
  );
};

export default ChartCreation;
