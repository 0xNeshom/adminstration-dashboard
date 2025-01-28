import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setChartOrientation } from '../../../features/chart/chartSlice'
import { Torientation } from '../../../types/orientation'

const Orientation: React.FC = () => {
  const dispatch = useDispatch()
  const orientation = useSelector((state: RootState) => state.charts.currentChart.orientation)

  const handleChange = (event: SelectChangeEvent<Torientation>) => {
    dispatch(setChartOrientation(event.target.value as Torientation))
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Orientation</InputLabel>
        <Select
          value={orientation}
          label="Orientation"
          onChange={handleChange}
        >
          <MenuItem value="vertical">Vertical</MenuItem>
          <MenuItem value="horizontal">Horizontal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default Orientation