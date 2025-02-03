// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import {  Card,CardHeader, CardTitle, CardContent } from '@mui/material';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { RootState } from '../../../store/store';
// import { useDispatch, useSelector } from 'react-redux';
// const CustomizeColor = () => {
//   const dispatch = useDispatch();
//   const currentChart = useSelector((state: RootState) => state.charts.currentChart);

//   const handleColorChange = (metric, color) => {
//     setChartColors(prev => ({
//       ...prev,
//       [metric]: color
//     }));
//   };
//   return (
//     <Card className='w-full max-w-4xl p-4'>
//       <CardHeader>
//         <CardTitle>نمودار قابل شخصی‌سازی</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className='mb-4 flex gap-4'>
//           <div>
//             <Label htmlFor='pvColor'>رنگ PV:</Label>
//             <Input
//               id='pvColor'
//               type='color'
//               value={currentChart.settings?.color.pv}
//               onChange={(e) => handleColorChange('pv', e.target.value)}
//               className='w-20 h-8'
//             />
//           </div>
//           <div>
//             <Label htmlFor='uvColor'>رنگ UV:</Label>
//             <Input
//               id='uvColor'
//               type='color'
//               value={chartColors.uv}
//               onChange={(e) => handleColorChange('uv', e.target.value)}
//               className='w-20 h-8'
//             />
//           </div>
//         </div>

//         <BarChart width={600} height={300} data={data}>
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis dataKey='name' />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey='pv' fill={chartColors.pv} />
//           <Bar dataKey='uv' fill={chartColors.uv} />
//         </BarChart>
//       </CardContent>
//     </Card>
//   );
// };

// export default CustomizeColor;
