import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Orientation = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel >Orientation</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        // id="demo--select"
        // value={age}
        label="Orientation"
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Orientation
