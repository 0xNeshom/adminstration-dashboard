import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { Chart } from '../../types/chartTypes';
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
      name: item.name ,
    }));
  }, [chart.data]);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={processedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {chart.orientation === 'vertical' ? (
          <>
            <XAxis dataKey='name' />
            <YAxis dataKey={chart.fields.yAxis} />
            <Line
              type='monotone'
              dataKey={chart.fields.yAxis}
              stroke='#82ca9d'
              activeDot={{ r: 8 }}
            />
            <LabelList dataKey='name' position='top' />
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
              dataKey='name'
              axisLine={false}
            />
            <Line
              type='monotone'
              dataKey={chart.fields.yAxis}
              stroke='purple'
              activeDot={{ r: 8 }}
            />
            <LabelList dataKey='name' position='right' />
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
