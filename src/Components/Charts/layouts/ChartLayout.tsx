/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { removeChart } from '../../../features/chart/chartSlice';
import { Rnd } from 'react-rnd';
import ChartCreation from '../creation/ChartCreation';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
} from 'recharts';
import { Chart } from '../../../types/Chart';

const ChartLayout: React.FC = () => {
  const charts = useSelector((state: RootState) => state.charts.charts);
  const dispatch = useDispatch();

  const renderChart = (chart: Chart) => {
    switch (chart.type) {
      case 'line':
        return (
          <LineChart
            width={500}
            height={300}
            data={chart.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey={chart.fields.yAxis}
              stroke={chart.settings.color}
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart data={chart.data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
            <Tooltip />
            {chart.settings.showLegend && <Legend />}
            <Bar dataKey={chart.fields.yAxis} fill={chart.settings.color} />
          </BarChart>
        );

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={chart.data}
              dataKey={chart.fields.yAxis}
              nameKey={chart.fields.xAxis}
              fill={chart.settings.color}
              label
            />
            <Tooltip />
            {chart.settings.showLegend && <Legend />}
          </PieChart>
        );

      // case 'area':
      //   return (
      //     <AreaChart data={chart.data}>
      //       <CartesianGrid strokeDasharray="3 3" />
      //       <XAxis dataKey={chart.fields.xAxis} />
      //       <YAxis dataKey={chart.fields.yAxis} />
      //       <Tooltip />
      //       {chart.settings.showLegend && <Legend />}
      //       <Area
      //         type="monotone"
      //         dataKey={chart.fields.yAxis}
      //         fill={chart.settings.color}
      //         stroke={chart.settings.color}
      //       />
      //     </AreaChart>
      //   );

      default:
        return (
          <LineChart data={chart.data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
            <Tooltip />
            {chart.settings.showLegend && <Legend />}
            <Line
              type='monotone'
              dataKey={chart.fields.yAxis}
              stroke={chart.settings.color}
            />
          </LineChart>
        );
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '20px' }}>
      <ChartCreation />

      {charts.map((chart) => (
        <Rnd
          key={chart.id}
          default={{
            x: chart.position?.x || 0,
            y: chart.position?.y || 0,
            width: chart.size?.width || 400,
            height: chart.size?.height || 300,
          }}
          bounds='parent'
          minWidth={300}
          minHeight={200}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              bgcolor: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              border: '1px solid #ddd',
              p: 1,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 0,
                left: 2,
                zIndex: 1,
                color: 'red',
              }}
              onClick={() => dispatch(removeChart(chart.id))}
            >
              <DeleteIcon />
            </IconButton>
            <ResponsiveContainer>{renderChart(chart)}</ResponsiveContainer>
          </Box>
        </Rnd>
      ))}
    </Box>
  );
};

export default ChartLayout;
