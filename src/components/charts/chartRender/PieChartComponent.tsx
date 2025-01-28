import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from '../../../types/Chart';

interface PieChartProps {
  chart: Chart;
}

const PieChartComponent: React.FC<PieChartProps> = ({ chart }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
