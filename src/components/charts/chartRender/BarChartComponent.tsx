import React from 'react';
import { Chart } from '../../../types/chart';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';

interface BarChartProps {
  chart: Chart;
}

const BarChartComponent: React.FC<BarChartProps> = ({ chart }) => {
  const isHorizontal = chart.orientation === 'horizontal';

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        data={chart.data}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {isHorizontal ? (
          <>
            <XAxis type="number" dataKey={chart.fields.yAxis} />
            <YAxis type="category" dataKey={chart.fields.xAxis} />
            <Bar dataKey={chart.fields.yAxis} fill={chart.settings.color} />
          </>
        ) : (
          <>
            <XAxis type="category" dataKey={chart.fields.xAxis} />
            <YAxis type="number" dataKey={chart.fields.yAxis} />
            <Bar dataKey={chart.fields.yAxis} fill={chart.settings.color} />
          </>
        )}
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;