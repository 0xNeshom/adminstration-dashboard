import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import React from 'react';
import { setUnit } from '../../../../features/currentChartSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

interface UnitInputProps {
  error: boolean;
}
const UnitInput: React.FC<UnitInputProps> = ({ error }) => {
  const dispatch = useAppDispatch();
  const currentChart = useAppSelector((state) => state.currentChart);
  return (
    <FormControl size='small' >
      <InputLabel >Unit</InputLabel>
      <Select
        value={currentChart.unit}
        onChange={(e) =>
          dispatch(setUnit(e.target.value as 'gram' | 'kg' | 'ton'))
        }
      >
        <MenuItem value='kg'> kg</MenuItem>
        <MenuItem value='gram'>gram</MenuItem>
        <MenuItem value='ton'>Ton</MenuItem>
      </Select>
      {error && <FormHelperText>you sould select</FormHelperText>}
    </FormControl>
  );
};

export default UnitInput;
