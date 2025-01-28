import Stack from '@mui/material/Stack';
import Orientation from './Orientation';
import Fields from './Fields';
import {
  Button,
FormControl,FormHelperText,InputLabel,MenuItem,Select,SelectChangeEvent,Typography,} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { addChart, setChartType } from '../../../features/chart/chartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { saveChart } from '../../../features/chart/chartSlice';
import { useState } from 'react';
const ChartCreation = () => {
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const currentChart = useSelector(
    (state: RootState) => state.charts.currentChart
  );

  const handlCreate = () => {
    if (!currentChart.type) {
      setError(true);
      return;
    }
    dispatch(addChart());
    setError(false);
  };

  const handleChartTypeChange = (
    event: SelectChangeEvent<'bar' | 'line' | 'pie' | 'scatter'>
  ) => {
    dispatch(setChartType(event.target.value as 'line' | 'bar' | 'pie'));
  };

  const handlSave = () => {
    dispatch(saveChart());
  };

  return (
    <>
      <Typography sx={{ fontSize: '2rem' }}>Chart Creation</Typography>
      <Divider />
      <Stack
        sx={{ marginTop: '20px', width: '100%', height:'70px' }}
        direction='row'
        spacing={2}
      >
        <Orientation />
          <FormControl  error={error} sx={{ minWidth: 120 }}>
            <InputLabel>Chart Type</InputLabel>
            <Select
              value={currentChart.type}
              label='Chart Type'
              onChange={handleChartTypeChange}
            >
              <MenuItem value='bar'>Bar</MenuItem>
              <MenuItem value='line'>Line</MenuItem>
              <MenuItem value='pie'>Pie</MenuItem>
            </Select>
            {error && <FormHelperText >you sould select a type </FormHelperText>}
          </FormControl>
        <Fields />
        <Button variant='contained' onClick={handlCreate} sx={{height:'80%'}}>
          Create
        </Button>
        <Button
        sx={{height:'80%'}}
          variant='contained'
          onClick={handlSave}
          disabled={!currentChart.type}
        >
          Save
        </Button>

      </Stack>
    </>
  );
};

export default ChartCreation;
