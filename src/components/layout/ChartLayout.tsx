
import { removeChart, saveCharts } from '../../features/chartsSlice';
import ChartCreation from '../creation/ChartCreation';
import { Box } from '@mui/material';
import { Chart } from '../../types/chartTypes';
import LineChartComponent from '../charts/chartsContainer/LineChartComponent';
import BarChartComponent from '../charts/chartsContainer/BarChartComponent';
import PieChartComponent from '../charts/chartsContainer/PieChartComponent';
import ChartItem from '../charts/ChartItem';
import { useAppDispatch } from '../../store/hooks';
import { useAppSelector } from '../../store/hooks';

const ChartLayout: React.FC = () => {
  const charts = useAppSelector((state) => state.charts.charts);
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
