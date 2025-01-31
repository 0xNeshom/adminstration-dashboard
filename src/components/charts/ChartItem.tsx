import React from 'react';
import { Rnd } from 'react-rnd';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { ResponsiveContainer } from 'recharts';
import { Chart } from '../../types/chartTypes';
import { useDispatch } from 'react-redux';
import { toggleChartOrientation } from '../../features/chartSlice';
interface ChartItemProps {
  chart: Chart;
  renderChart: (chart: Chart) => JSX.Element | null;
  handleDelete: (chartId: string) => void;
}

const ChartItem: React.FC<ChartItemProps> = ({
  chart,
  renderChart,
  handleDelete,
}) => {
  const dispatch = useDispatch();

  return (
    <Rnd
      default={{
        x: chart.position?.x || 0,
        y: chart.position?.y || 0,
        width: chart.size?.width || 400,
        height: chart.size?.height || 300,
      }}
      bounds='parent'
      minWidth={300}
      minHeight={200}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '100%',
          height: '100%',
          bgcolor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          border: '1px solid #ddd',
          pl: 5,
          pt: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            bgcolor: '#E8F9FF',
            height: '100%',
          }}
        >
          <IconButton
            sx={{
              color: 'error.main',
            }}
            onClick={() => handleDelete(chart.id)}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            sx={{
              color: 'lightgreen',
            }}
            onClick={() => dispatch(toggleChartOrientation(chart.id))}
          >
            <SwapVertIcon />
          </IconButton>
        </Box>
        <ResponsiveContainer>{renderChart(chart) || <></>}</ResponsiveContainer>
      </Box>
    </Rnd>
  );
};

export default ChartItem;
