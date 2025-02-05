// components/ColorPicker.tsx
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateChartColor } from '../../features/chartsSlice';
import { Chart } from '../../types/chartTypes';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface ColorPickerProps {
  chartId: string;
}

const colors = [
  { name: 'main', label: 'Purple', color: '#493D9E' },
  { name: 'secondary', label: 'Blue', color: '#A1E3F9' },
  { name: 'tertiary', label: 'Green', color: '#16C47F' },
] as const;

const ColorPicker = ({ chartId }: ColorPickerProps) => {
  const dispatch = useAppDispatch();

  const chart = useAppSelector((state) =>
    state.charts.charts.find((c) => c.id === chartId)
  ) as Chart;

  const handleColorChange = (color: string) => {
    dispatch(updateChartColor({ id: chart.id, colorType: 'main', value: color }));
  };

  return (
    <div className='color-picker'>
      <FormControl size='small' fullWidth >
        <InputLabel>Select Color</InputLabel>
        <Select
          value={chart.settings.color.main}
          label="Select Color"
          onChange={(e) => handleColorChange(e.target.value)}
        >
          {colors.map((option) => (
            <MenuItem key={option.name} value={option.color}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: option.color,
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '10px',
                }}
              ></div>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ColorPicker;
