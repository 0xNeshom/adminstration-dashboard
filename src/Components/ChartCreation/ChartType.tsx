/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { UseDispatch,useSelector   } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
const ChartType = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Chart Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={ChartType}
          label='Chart Type'
          // onChange={handleChange}
        >
          <MenuItem value={10}> Pie </MenuItem>
          <MenuItem value={20}>Line </MenuItem>
          <MenuItem value={30}> Bar </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ChartType;
