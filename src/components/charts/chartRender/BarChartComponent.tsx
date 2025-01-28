import React from 'react';
import { Chart } from '../../../types/Chart';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  chart: Chart;
}

const BarChartComponent: React.FC<BarChartProps> = ({ chart }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout={chart.orientation === 'horizontal' ? 'vertical' : 'horizontal'} data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" />
        {chart.orientation === 'vertical' ? (
          <>
            <XAxis dataKey={chart.fields.xAxis} />
            <YAxis dataKey={chart.fields.yAxis} />
          </>
        ) : (
          <>
            <XAxis type="number" dataKey={chart.fields.yAxis} axisLine={false} />
            <YAxis type="category" dataKey={chart.fields.xAxis} axisLine={false} />
          </>
        )}
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
        <Bar dataKey={chart.orientation === 'vertical' ? chart.fields.yAxis : chart.fields.xAxis} fill={chart.settings.color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
