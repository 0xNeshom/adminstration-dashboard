import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeChart, saveCharts } from '../../features/chartsSlice';
import ChartCreation from '../creation/creationContainer/ChartCreation';
import { Box } from '@mui/material';
import { Chart } from '../../types/chartTypes';
import LineChartComponent from '../charts/LineChartComponent';
import BarChartComponent from '../charts/BarChartComponent';
import PieChartComponent from '../charts/PieChartComponent';
import ChartItem from '../charts/chartsContainer/ChartItem';
import { useAppDispatch } from '../../store/hooks';
// import CustomizableChart from '../components/charts/creation/CustomizableChart ';

const ChartLayout: React.FC = () => {
  const charts = useSelector((state: RootState) => state.charts.charts);
  const dispatch = useAppDispatch();

  const handleDelete = async (chartId: string) => {
    await dispatch(removeChart(chartId));
    dispatch(saveCharts());
  };

  const renderChart = (chart: Chart) => {
    switch (chart.type) {
      case 'line':
        return <LineChartComponent chart={chart} />;
      case 'bar':
        return <BarChartComponent chart={chart} />;
      case 'pie':
        return <PieChartComponent chart={chart} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '20px' }}>
      <ChartCreation />
      {charts.map((chart) => (
        <ChartItem
          key={chart.id}
          chart={chart}
          renderChart={renderChart}
          handleDelete={handleDelete}
        />
      ))}
    </Box>
  );
};

export default ChartLayout;
