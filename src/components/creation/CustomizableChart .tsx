// /* eslint-disable @typescript-eslint/no-unused-vars */
// // components/CustomizableChart.tsx
// import {
//   Card,
//   CardContent,
//   Box,
//   InputLabel,
//   TextField,
//   Typography,
// } from '@mui/material';
// import { setChartColors } from '../../../features/chart/chartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// // import { Label } from '@mui/material';
// // import { Input } from '@/components/ui/input';
// // import { useAppDispatch, useAppSelector } from '@/store/hooks';
// // import { setChartColors } from '@/store/chartSlice';

// const CustomizableChart = () => {
//   const dispatch = useDispatch();
//   const chartColors = useSelector(
//     (state: RootState) => state.charts.currentChart.settings?.color
//   );

//   //   const data = [
//   //     { name: 'A', pv: 2400, uv: 4000 },
//   //     { name: 'B', pv: 1398, uv: 3000 },
//   //     { name: 'C', pv: 9800, uv: 2000 },
//   //     { name: 'D', pv: 3908, uv: 2780 },
//   //     { name: 'E', pv: 4800, uv: 1890 },
//   //   ]

//   const handleColorChange = (metric: 'pv' | 'uv', color: string) => {
//     dispatch(setChartColors({ 
//         color: {
//             ...chartColors,
//             [metric]:color
//         }
//     }));
//   };

//   return (
//     // <Card sx={{ width: '100%', maxWidth: '4xl', p: 2 }}>
//     //   <CardContent>
//     <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', height:'100%'}}>
//       {/* <Typography variant='h5' component='h2' gutterBottom>
//         Customization
//       </Typography> */}

//       <Box sx={{ mb: 4, display: 'flex', gap: 4,}}>
//         <Box>
//           <InputLabel htmlFor='pvColor'>Color PV:</InputLabel>
//           <TextField
//             id='pvColor'
//             type='color'
//             value={chartColors?.pv}
//             onChange={(e) => handleColorChange('pv', e.target.value)}
//             sx={{ 
//               width: '80px',
//               height: '100%',
//               '& .MuiInputBase-input': {
//                 padding: '4px',
//               },
//             }}
//           />
//         </Box>

//         <Box>
//           <InputLabel htmlFor='uvColor'>Color UV:</InputLabel>
//           <TextField
//             id='uvColor'
//             type='color'
//             value={chartColors?.uv}
//             onChange={(e) => handleColorChange('uv', e.target.value)}
//             sx={{
//               width: '80px',
//               height: '32px',
//               '& .MuiInputBase-input': {
//                 padding: '4px',
//               },
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//     /* <BarChart width={600} height={300} data={data}>
//           <XAxis dataKey="name" />
//         <YAxis />
//       <Tooltip />      <Legend />
//    <Bar dataKey="pv" fill={chartColors?.pv} />
//    <Bar dataKey="uv" fill={chartColors?.uv} />
//       </BarChart>
//       </CardContent>
    
//     </Card> */
//   );
// };

// export default CustomizableChart;

// {
//   /* // function useDispatch() {
// //     throw new Error('Function not implemented.');
// // }

// // function useAppSelector(arg0: (state: any) => any) {
// //     throw new Error('Function not implemented.');
// // } */
// }
