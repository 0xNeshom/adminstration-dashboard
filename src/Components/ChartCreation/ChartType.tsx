/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { UseDispatch,useSelector   } from 'react-redux';
import {RootState} from '../../app/store'
import { ChartType as ChartTypeEnum } from '../../types/Chart';
import { useDispatch } from 'react-redux';
import { setChartType } from '../../features/chart/chartSlice';
// import { RootState } from '@reduxjs/toolkit/query';
const ChartType = () => {
  const dispatch = useDispatch();
  const currentType = useSelector((state :RootState)=>state.charts.currentChart.type);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Chart Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={currentType}
          label='Chart Type'
          onChange={(e)=>dispatch(setChartType(e.target.value as ChartTypeEnum))}
        >
          <MenuItem value='pie'> Pie </MenuItem>
          <MenuItem value='line'>Line </MenuItem>
          <MenuItem value='bar'> Bar </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChartType;
