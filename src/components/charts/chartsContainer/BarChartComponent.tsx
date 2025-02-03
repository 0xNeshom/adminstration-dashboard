import React, { useMemo } from 'react';
import { Chart } from '../../../types/chartTypes';
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
import CustomTooltip from '../customToolTip/CustomTooltip';

interface BarChartProps {
  chart: Chart;
}
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
//         <p className="text-sm font-medium">{`نام: ${payload[0].payload.label}`}</p>
//         <p className="text-sm">{`مقدار: ${payload[0].value}`}</p>
//       </div>
//     );
//   }
//   return null;
// };
const BarChartComponent: React.FC<BarChartProps> = ({ chart }) => {
  const isHorizontal = chart.orientation === 'horizontal';

  const processedData = useMemo(() => {
    if (!chart.processedData || !Array.isArray(chart.processedData)) {
      return [];
    }
    return chart.processedData;
  }, [chart.processedData]);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        data={processedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {isHorizontal ? (
          <>
            <XAxis type='category' dataKey='value' tick={{ fontSize: 12 }} />
            <YAxis type='category' dataKey='label' style={{ fontSize: 12 }} />
            <Bar dataKey='value' fill='black' stroke='#82ca9d'>
              <LabelList dataKey='label' position='right' />
            </Bar>
          </>
        ) : (
          <>
            <XAxis type='category' dataKey='label' tick={{ fontSize: 12 }} />
            <YAxis type='number' style={{ fontSize: 12 }} />
            <Bar dataKey='value' fill='#82ca9d' activeBar={{ r: 8 }}>
              <LabelList dataKey='name' position='top' />
            </Bar>
          </>
        )}
        <Tooltip content={<CustomTooltip />} />
        {chart.settings?.showLegend && (
          <Legend
            content={({ payload }) => {
              if (!payload || payload.length === 0) return null;

              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontSize: '14px',
                    padding: '5px',
                  }}
                >
                  <span style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    Time Range: {chart.timeRange}
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {payload.map((entry, index) => {
                      const matchedData = chart.processedData.find(
                        (data) => data.label === entry.value
                      );
                      return (
                        <span key={index} style={{ color: entry.color }}>
                          {entry.value} ({matchedData?.value ?? 'N/A'})
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
