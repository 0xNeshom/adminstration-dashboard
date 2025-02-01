 
import Fields from './Fields';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { addChart, setChartType, saveChart } from '../../features/chartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { ChartType } from '../../types/chartTypes';
import OrientationComponent from './Orientation';
// import CustomizableChart from './CustomizableChart ';
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

  const handleChartTypeChange = (event: SelectChangeEvent<ChartType>) => {
    dispatch(setChartType(event.target.value as ChartType));
  };

  const handlSave = () => {
    dispatch(saveChart());
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
        // direction='row'
        // spacing={2}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          Chart Creation
        </Typography>
        {/* <Box sx={{ display: 'flex', gap: '10px' }}> */}
        <Divider orientation='vertical' />
        <OrientationComponent />

        <FormControl error={error} size='small' style={{ width: '120px' }}>
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
          {error && <FormHelperText>you sould select a type </FormHelperText>}
        </FormControl>
        <Fields />
        <Button
          variant='contained'
          onClick={handlCreate}
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
        {/* </Box> */}
        {/* <CustomizableChart /> */}
      </Box>
      <Divider orientation='horizontal' sx={{ marginTop: '10px' }} />
    </>
  );
};

export default ChartCreation;
