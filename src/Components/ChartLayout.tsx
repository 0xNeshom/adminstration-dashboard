/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Draggable from 'react-draggable';
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const ChartLayout: React.FC = () => {
  // const [size, setSize] = useState({ width: '600px', height: '400px' });
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div style={{ width: '100%', height: '100vh', padding: '20px' }}>
      {/* <Rnd
        // size={{ width: size.width, height: size.height }}
        // position={position}
        // onDragStop={(e, d) => {
        //   setPosition({ x: d.x, y: d.y });
        // }}
        // onResize={(e, direction, ref, delta, position) => {
        //   setSize({
        //     width: ref.style.width,
        //     height: ref.style.height,
        //   });
        //   setPosition(position);
        // }}
        // bounds="parent"
        // minWidth={300}
        // minHeight={200}
      > */}
        <div style={{ width: '100%', height: '100%', background: 'white', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      {/* </Rnd> */}
    </div>
  );
};

export default ChartLayout;
