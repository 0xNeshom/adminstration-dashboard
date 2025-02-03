import React, { useMemo, useState } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Sector,
} from 'recharts';
import { Chart } from '../../../types/chartTypes';
import CustomTooltip from '../customToolTip/CustomTooltip';

interface PieChartProps {
  chart: Chart;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
];

// Active shape component for better hover interaction
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor='middle' fill={fill}>
        {payload.label}
      </text>
      <text x={cx} y={cy} dy={20} textAnchor='middle' fill='#999'>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 10}
        outerRadius={outerRadius + 15}
        fill={fill}
      />
    </g>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({ chart }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  const processedData = useMemo(() => {
    if (!chart.processedData || !Array.isArray(chart.processedData)) {
      return [];
    }
    return chart.processedData;
  }, [chart.processedData]);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(undefined);
  };

  const totalValue = processedData.reduce((sum, item) => sum + item.value, 0);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={processedData}
          dataKey='value'
          nameKey='label'
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
          paddingAngle={4}
          animationBegin={0}
          animationDuration={1500}
        >
          {processedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke='#fff'
              strokeWidth={2}
            />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip />} />

        {chart.settings?.showLegend && (
          <Legend
            layout='vertical'
            align='right'
            verticalAlign='middle'
            content={({ payload }) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  fontSize: '14px',
                  padding: '15px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <span style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  Time Range: {chart.timeRange}
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    width: '100%',
                  }}
                >
                  {payload?.map((entry, index) => {
                    const value = processedData[index]?.value || 0;
                    const percentage = ((value / totalValue) * 100).toFixed(1);
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            backgroundColor: entry.color,
                            borderRadius: '3px',
                          }}
                        />
                        <span style={{ flex: 1 }}>{entry.value}</span>
                        <span style={{ color: '#666' }}>
                          {value.toLocaleString()} ({percentage}%)
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
