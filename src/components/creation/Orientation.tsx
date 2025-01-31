import {Box,FormControl,InputLabel,MenuItem,Select,SelectChangeEvent,} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setChartOrientation } from '../../features/chartSlice';
import { Orientation } from '../../types/chartTypes';

const OrientationComponent: React.FC = () => {
  const dispatch = useDispatch();
  const orientation = useSelector(
    (state: RootState) => state.charts.currentChart.orientation
  );

  const handleChange = (event: SelectChangeEvent<Orientation>) => {
    dispatch(setChartOrientation(event.target.value as Orientation));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Orientation</InputLabel>
        <Select value={orientation} label='Orientation' onChange={handleChange}>
          <MenuItem value='vertical'>Vertical</MenuItem>
          <MenuItem value='horizontal'>Horizontal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrientationComponent;
