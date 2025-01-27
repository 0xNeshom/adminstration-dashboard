import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
const Orientation:React.FC = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel >Orientation</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        // value={age}
        label="Orientation"
        // onChange={handleChange}
      >
        <MenuItem >Vertical</MenuItem>
        <MenuItem >Horizontal</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Orientation
