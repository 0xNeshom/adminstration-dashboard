/* eslint-disable @typescript-eslint/no-unused-vars */
import Stack from '@mui/material/Stack';
import Orientation from './Orientation';
import Fields from './Fields';
import ChartType from './ChartType';
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
import { useDispatch } from 'react-redux';
import { addChart, setChartType } from '../../../features/chart/chartSlice';
import { useSelector } from 'react-redux';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { RootState } from '../../../store/store';
import { Chart } from '../../../types/Chart';

const ChartCreation = () => {
  const dispatch = useDispatch();
  const currentChart = useSelector(
    (state: RootState) => state.charts.currentChart
  );

  const handlCreate = () => {
    dispatch(addChart());
  };

  const handleChartTypeChange = (
    event: SelectChangeEvent<'line' | 'bar' | 'pie' | 'scatter'>
  ) => {
    dispatch(setChartType(event.target.value as 'line' | 'bar' | 'pie'));
    console.log('Chart Type Changed' + event.target.value);
  };

  return (
    <>
      <Typography sx={{ fontSize: '2rem' }}>Chart Creation</Typography>
      <Divider />
      <Stack
        sx={{ marginTop: '20px', width: '90%' }}
        direction='row'
        spacing={2}
      >
        <Orientation />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Chart Type</InputLabel>
            <Select
              value={currentChart.type}
              label='Chart Type'
              onChange={handleChartTypeChange}
            >
              <MenuItem value='pie'> Pie </MenuItem>
              <MenuItem value='line'>Line </MenuItem>
              <MenuItem value='bar'> Bar </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Fields />
        <Button variant='contained' onClick={handlCreate}>
          Create
        </Button>
      </Stack>
    </>
  );
};

export default ChartCreation;
