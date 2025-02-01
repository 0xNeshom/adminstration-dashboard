import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Fields = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size='small'>
        <InputLabel>Fields</InputLabel>
        <Select label='Fields'>
          <MenuItem>Vulnerability</MenuItem>
          <MenuItem>Scan</MenuItem>
          <MenuItem>Device Overview</MenuItem>
          <MenuItem>Device Critical</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
};

export default Fields;
