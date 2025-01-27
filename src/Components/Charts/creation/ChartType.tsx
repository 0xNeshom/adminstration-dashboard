/* eslint-disable @typescript-eslint/no-unused-vars */
 
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useSelector   } from 'react-redux';
import { RootState } from '../../../store/store';
import { ChartType as ChartTypeEnum } from '../../../types/Chart';
import { useDispatch } from 'react-redux';
import { setChartType } from '../../../features/chart/chartSlice';

interface ChartTypeProps {
  handleChartTypeChange : (event: SelectChangeEvent<"line" | "bar" | "pie" | "scatter">) => void;
}
const ChartType:React.FC<ChartTypeProps> = ({handleChartTypeChange}) => {
  const dispatch = useDispatch();
  const currentType = useSelector((state :RootState)=>state.charts.currentChart.type);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Chart Type</InputLabel>
        <Select
          value={currentType}
          label='Chart Type'
          onChange={handleChartTypeChange}
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
