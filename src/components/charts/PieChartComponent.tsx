import React, { useMemo } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from '../../types/chart';

interface PieChartProps {
  chart: Chart;
}

const PieChartComponent: React.FC<PieChartProps> = ({ chart }) => {
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
      <PieChart>
        <Pie
          data={processedData}
          dataKey={chart.fields.yAxis}
          nameKey={chart.fields.xAxis}
          fill={chart.settings.color.pv}
          label
        />
        <Tooltip />
        {chart.settings.showLegend && <Legend />}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
