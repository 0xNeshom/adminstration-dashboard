import Stack from '@mui/material/Stack';
import Orientation from './Orientation';
import Fields from './Fields';
import {Box,Button,FormControl,InputLabel,MenuItem,Select,SelectChangeEvent,Typography,} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { addChart, setChartType } from '../../../features/chart/chartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { saveChart } from '../../../features/chart/chartSlice';
const ChartCreation = () => {
  const dispatch = useDispatch();
  const currentChart = useSelector(
    (state: RootState) => state.charts.currentChart
  );

  const handlCreate = () => {
    dispatch(addChart());
  };

  const handleChartTypeChange = (
    event: SelectChangeEvent<'line' | 'bar' | 'pie' | 'scatter'>) => {
    dispatch(setChartType(event.target.value as 'line' | 'bar' | 'pie'));
    // console.log('Chart Type Changed' + event.target.value);
  };

  const handlSave = () => {
    dispatch(saveChart());
  };

  return (
    <>
      <Typography sx={{ fontSize: '2rem' }}>Chart Creation</Typography>
      <Divider />
      <Stack
        sx={{ marginTop: '20px', width: '100%' }}
        direction='row'
        spacing={2}
      >
        {/* <FieldSelector/> */}
        <Orientation />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Chart Type</InputLabel>
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
        <Button variant='contained' onClick={handlSave}>
          Save
        </Button>
      </Stack>
    </>
  );
};

export default ChartCreation;
