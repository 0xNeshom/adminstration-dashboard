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
  LabelList,
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
      name: item.name
    }));
  }, [chart.data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        data={processedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 50 }} 
      >
        <CartesianGrid strokeDasharray="3 3" />
        {isHorizontal ? (
          <>
            <XAxis type="number" dataKey={chart.fields.yAxis} />
            <YAxis type="category" dataKey="name" />
            <Bar dataKey={chart.fields.yAxis} fill="#2973B2">
              <LabelList dataKey="name" position="right" />
            </Bar>
          </>
        ) : (
          <>
            <XAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis type="number" />
            <Bar dataKey={chart.fields.yAxis} fill={chart.settings.color.uv}>
              <LabelList dataKey="name" position="top" />
            </Bar>
          </>
        )}
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
