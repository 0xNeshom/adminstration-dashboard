import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import React from 'react';
import { setTimeRange } from '../../../../features/currentChartSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

interface TimeRangeProps {
  error: boolean;
}
const TimeRange: React.FC<TimeRangeProps> = ({ error }) => {
  const dispatch = useAppDispatch();
  const currentChart = useAppSelector((state) => state.currentChart);
  return (
    <FormControl size='small' style={{ minWidth: 100 }}>
      <InputLabel>Time Range </InputLabel>
      <Select
        value={currentChart.timeRange}
        onChange={(e) =>
          dispatch(
            setTimeRange(e.target.value as 'daily' | 'monthly' | 'yearly')
          )
        }
      >
        <MenuItem value='monthly'>Monthly</MenuItem>
        <MenuItem value='yearly'>yearly</MenuItem>
        <MenuItem value='daily'>Daily</MenuItem>
      </Select>
      {error && (
        <FormHelperText sx={{ color: 'red' }}>
          you sould select a type{' '}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TimeRange;
