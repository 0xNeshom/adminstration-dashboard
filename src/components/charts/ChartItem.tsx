import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Box, Collapse, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { ResponsiveContainer } from 'recharts';
import { Chart } from '../../types/chartTypes';
import { useDispatch } from 'react-redux';
import { toggleChartOrientation } from '../../features/chartSlice';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
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
          position: '',
          width: '100%',
          height: '100%',
          bgcolor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          border: '1px solid #ddd',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            bgcolor: 'white',
            height: '40px',
            cursor: 'pointer',
            pl: '5px',
            border:'1px solid',
            borderColor: 'primary.main',
          }}
          onClick={() => setIsPanelOpen(!isPanelOpen)}
        >
          <MenuOpenIcon  color='primary' />

          <Collapse in={isPanelOpen}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                p: 1,
                bgcolor: 'white',
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
            </Paper>
          </Collapse>
        </Box>
        <ResponsiveContainer>{renderChart(chart) || <></>}</ResponsiveContainer>
      </Box>
    </Rnd>
  );
};

export default ChartItem;
