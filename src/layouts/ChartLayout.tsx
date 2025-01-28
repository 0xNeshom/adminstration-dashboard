 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import {removeChart,saveChart,} from '../features/chart/chartSlice';
import ChartCreation from '../components/charts/creation/ChartCreation';
import { Box } from '@mui/material';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,} from 'recharts';
import { Chart } from '../types/Chart';
import LineChartComponent from '../components/charts/chartRender/LineChartComponent';
import BarChartComponent from '../components/charts/chartRender/BarChartComponent';
import PieChartComponent from '../components/charts/chartRender/PieChartComponent';
import ChartItem from '../components/charts/ChartItem';



const ChartLayout: React.FC = () => {


  const charts = useSelector((state: RootState) => state.charts.charts);
  const dispatch = useDispatch();


  const handleDelete=async (chartId:string)=>{
     await dispatch(removeChart(chartId));
    dispatch(saveChart());
  }

  const renderChart = (chart: Chart) => {
    switch (chart.type) {
      case 'line':
        return <LineChartComponent chart={chart} />;
      case 'bar':
        return <BarChartComponent chart={chart} />;
      case 'pie':
        return <PieChartComponent chart={chart} />;
      default:
        return (
          <LineChart data={chart.data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
            <Tooltip />
            {chart.settings.showLegend && <Legend />}
            <Line type='monotone' dataKey={chart.fields.yAxis} stroke={chart.settings.color} />
          </LineChart>
        );
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '20px' }}>
      <ChartCreation />
      {charts.map((chart) => (
        <ChartItem key={chart.id} chart={chart} renderChart={renderChart} handleDelete={handleDelete} />
      ))}
    </Box>
  );
};

export default ChartLayout;
