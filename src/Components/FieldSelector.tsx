import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setChartField } from '../features/chart/chartSlice';
const FieldSelector = () => {
  const dispatch = useDispatch();
  const fields = useSelector(
    (state: RootState) => state.charts.currentChart.fields
  );

  const availableFields = ['name', 'pv', 'uv'];
  return (
    <div style={{ display: 'flex', gap:'10px' }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>X Axis Field</InputLabel>
        <Select
          value={fields?.xAxis || ''}
          label='X Axis Field'
          onChange={(e) =>
            dispatch(
              setChartField({
                ...fields,
                xAxis: e.target.value,
                yAxis: fields?.yAxis || '',
              })
            )
          }
        >
          {availableFields.map((field) => (
            <MenuItem key={field} value={field}>
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Y Axis Field</InputLabel>
        <Select
          value={fields?.yAxis || ''}
          label='Y Axis Field'
          onChange={(e) =>
            dispatch(
              setChartField({
                ...fields,
                yAxis: e.target.value,
                xAxis: fields?.xAxis || '',
              })
            )
          }
        >
          {availableFields.map((field) => (
            <MenuItem key={field} value={field}>
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FieldSelector;
