import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const Fields = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel >Fields</InputLabel>
      <Select
        label="Fields"
      >
        <MenuItem >example 1</MenuItem>
        <MenuItem >Twenty</MenuItem>
        <MenuItem >DD</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default Fields
