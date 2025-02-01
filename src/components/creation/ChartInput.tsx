import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
interface ChartTypeProps {
  handleChart: (event: SelectChangeEvent<'bar' | 'line' | 'pie'>) => void;
  error: boolean;
}
const ChartInput: React.FC<ChartTypeProps> = ({ handleChart, error }) => {
  const currentChart = useSelector((state: RootState) => state.currentChart);
  return (
    <FormControl error={error} sx={{ minWidth: 120 }} size='small'>
      <InputLabel>Chart Type</InputLabel>
      <Select
        value={currentChart.type}
        label='Chart Type'
        onChange={handleChart}
      >
        <MenuItem value='bar'>Bar</MenuItem>
        <MenuItem value='line'>Line</MenuItem>
        <MenuItem value='pie'>Pie</MenuItem>
      </Select>
      {error && <FormHelperText sx={{color:'red'}}>you sould select a type </FormHelperText>}
    </FormControl>
  );
};

export default ChartInput;
