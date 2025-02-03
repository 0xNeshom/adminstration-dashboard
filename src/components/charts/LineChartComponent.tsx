import {CartesianGrid, XAxis,YAxis,Tooltip,Legend,Line, LineChart, ResponsiveContainer, LabelList,
} from 'recharts';
import { Chart } from '../../types/chartTypes';
import { useMemo } from 'react';
import CustomTooltip from './customToolTip/CustomTooltip';

interface LineChartProps {
  chart: Chart;
}

const LineChartComponent: React.FC<LineChartProps> = ({ chart }) => {
  const isHorizontal = chart.orientation === 'horizontal';

  const processedData = useMemo(() => {
    if (!chart.processedData || !Array.isArray(chart.processedData)) {
      return [];
    }
    return chart.processedData;
  }, [chart.processedData]);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        data={processedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        {isHorizontal ? (
          <>
            <XAxis
              type='category'
              dataKey='value'
              axisLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              style={{ fontSize: 12 }}
              type='category'
              dataKey='label'
              axisLine={false}
            />
            <Line
              type='linear'
              dataKey='value'
              stroke='#82ca9d'
              activeDot={{ r: 8 }}
            />
            <LabelList dataKey='label' position='right' />
          </>
        ) : (
          <>
            <XAxis type='category' dataKey='label' style={{ fontSize: 12 }} />
            <YAxis dataKey='value' style={{ fontSize: 12 }} />
            <Line
              type='linear'
              dataKey='value'
              stroke='#82ca9d'
              activeDot={{ r: 8 }}
            />
            <LabelList dataKey='name' position='top' />
          </>
        )}
        <Tooltip content={<CustomTooltip />} />
        {chart.settings?.showLegend && (
          <Legend
            content={({ payload }) => (
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
                  {payload?.map((entry, index) => (
                    <span key={index} style={{ color: entry.color }}>
                      {entry.value}
                    </span>
                  ))}
                </div>
              </div>
            )}
          />
        )}
        <Line
          type='monotone'
          dataKey={
            chart.orientation === 'vertical'
              ? chart.fields.yAxis
              : chart.fields.xAxis
          }
          stroke={chart.settings?.color.pv}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
