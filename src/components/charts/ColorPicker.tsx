// components/ColorPicker.tsx
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateChartColor } from '../../features/currentChartSlice'
import {Chart} from '../../types/chartTypes'
interface ColorPickerProps {
  chartId: string;
}

const colors = [
  {name: 'main', label: '1'},
  {name: 'secondary', label: '2 '},
  {name: 'tertiary', label: '3 '}
] as const ;

const ColorPicker = ({ chartId }: ColorPickerProps) => {
  const dispatch = useAppDispatch();
  
  const chart = useAppSelector((state) => 
    state.charts.charts.find(c => c.id === chartId)
  ) as Chart;

  const handleColorChange = (
    colorType: keyof Chart['settings']['color'], 
    color: string
  ) => {
    dispatch(updateChartColor({
      
      colorType,
      value: color
    }));
  };

  return (
    <div className="color-picker">
      {colors.map(({name, label}) => (
        <div key={name} className="color-item">
          <label>{label}</label>
          <input
            type="color"
            value={chart.settings?.color[name]}
            onChange={(e) => handleColorChange(name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;