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
import { useMemo } from 'react';

interface LineChartProps {
  chart: Chart;
}

const LineChartComponent: React.FC<LineChartProps> = ({ chart }) => {
  /**
   * Memoizes and processes chart data array.
   * Returns empty array if data is invalid or non-array.
   * Creates shallow copy of each data item.
   */
  const processedData = useMemo(() => {
    if (!chart.data || !Array.isArray(chart.data)) {
      return [];
    }
    return chart.data.map((item) => ({
      ...item,
    }));
  }, [chart.data]);
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={processedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {chart.orientation === 'vertical' ? (
          <>
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
            <Line
              type='monotone'
              dataKey='uv'
              stroke='#82ca9d'
              activeDot={{ r: 8 }}
            />
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
            <Line
              type='monotone'
              dataKey='uv'
              stroke='purple'
              activeDot={{ r: 8 }}
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
          stroke={chart.settings.color.pv}
          activeDot={{ r: 8 }}
        />
        {/* <Line
          type='monotone'
          dataKey=
          stroke='#82ca9d'
          activeDot={{ r: 8 }}
        /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
