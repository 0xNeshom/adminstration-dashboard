import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts';
import { Chart } from '../../../types/chart';

interface LineChartProps {
  chart: Chart;
}

const LineChartComponent: React.FC<LineChartProps> = ({ chart }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={chart.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {chart.orientation === 'vertical' ? (
          <>
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
          </>
        ) : (
          <>
            <XAxis
              type='number'
              dataKey={chart.fields.yAxis}
              axisLine={false}
            />
            <YAxis
              type='category'
              dataKey={chart.fields.xAxis}
              axisLine={false}
            />
          </>
        )}
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
        <Line
          type='monotone'
          dataKey={
            chart.orientation === 'vertical'
              ? chart.fields.yAxis
              : chart.fields.xAxis
          }
          stroke={chart.settings.color}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
