import React, { useMemo } from 'react';
import { Chart } from '../../types/chartTypes';
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
      <BarChart
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        data={processedData}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {isHorizontal ? (
          <>
            <XAxis type='number' dataKey={chart.fields.yAxis} />
            <YAxis type='category' dataKey={chart.fields.xAxis} />
            <Bar dataKey={chart.fields.yAxis} fill='#2973B2' />
            <Bar dataKey='uv' fill='#2973B2' />{' '}
          </>
        ) : (
          <>
            <XAxis type='category' dataKey={chart.fields.xAxis} />
            <YAxis type='number' dataKey={chart.fields.yAxis} />
            <Bar dataKey={chart.fields.yAxis} fill={chart.settings.color.uv} />
            <Bar dataKey='uv' fill='#2973B2' />{' '}
          </>
        )}
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
