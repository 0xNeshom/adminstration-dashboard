import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Rnd } from 'react-rnd';
import ChartCreation from './ChartCreation/ChartCreation';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const ChartLayout: React.FC = () => {
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <div style={{ width: '100%', height: '100vh', padding: '20px' }}>
      <ChartCreation />

      <Rnd
        size={{ width: size.width, height: size.height }}
        position={position}
        onDragStop={(e, d) => {
          setPosition({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, newPosition) => {
          setSize({
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
          });
          setPosition(newPosition);
        }}
        bounds='parent'
        minWidth={300}
        minHeight={200}
        style={{
          background: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          border: '1px solid #ddd',
        }}
      >
        <div style={{ width: '100%', height: '100%', padding: '10px' }}>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='value'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Rnd>
    </div>
  );
};

export default ChartLayout;
