import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setChartOrientation } from '../../features/currentChartSlice';
import { Orientation } from '../../types/chartTypes';

const OrientationInput: React.FC = () => {
  const dispatch = useDispatch();
  const orientation = useSelector(
    (state: RootState) => state.currentChart.orientation
  );

  const handleChange = (event: SelectChangeEvent<Orientation>) => {
    dispatch(setChartOrientation(event.target.value as Orientation));
  };

  return (
    <FormControl size='small'>
      <InputLabel>Orientation</InputLabel>
      <Select value={orientation} label='Orientation' onChange={handleChange}>
        <MenuItem value='vertical'>Vertical</MenuItem>
        <MenuItem value='horizontal'>Horizontal</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrientationInput;
