import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"


const Fields = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel >Fields</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        // id="demo--select"
        // value={age}
        label="Fields"
        // onChange={handleChange}
      >
        <MenuItem >example 1</MenuItem>
        <MenuItem >Twenty</MenuItem>
        <MenuItem >Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Fields
