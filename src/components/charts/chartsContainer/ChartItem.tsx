import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { ResponsiveContainer } from 'recharts';
import { Chart } from '../../../types/chartTypes';
import { toggleChartOrientation } from '../../../features/chartsSlice';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useAppDispatch } from '../../../store/hooks';
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
  const dispatch = useAppDispatch();
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
          gap: '10px',
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
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              bgcolor: 'white',
              height: '40px',
              cursor: 'pointer',
              pl: '5px',
              border: '1px solid',
              borderColor: 'primary.main',
            }}
            onClick={() => setIsPanelOpen(!isPanelOpen)}
          >
            <MenuOpenIcon color='primary' />

            <Collapse in={isPanelOpen}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  p: 1,
                  position: 'absolute',
                  top: '10px',
                  left: '35px',
                  bgcolor: 'white',
                  zIndex: 30,
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
                <Divider orientation='vertical' />
                <IconButton
                  sx={{
                    color: 'primary.main',
                  }}
                  onClick={() => dispatch(toggleChartOrientation(chart.id))}
                >
                  <SwapVertIcon />
                </IconButton>
              </Paper>
            </Collapse>
          {/* <Box
            sx={{
              mt: '5px',
              width: '50%',
            }}
          >
            <Typography
              sx={{ width: '100%', textAlign: 'center', alignItems: 'center' }}
              variant='h6'
            >
              {chart.timeRange}
            </Typography>
          </Box> */}
        </Box>
        <ResponsiveContainer>{renderChart(chart) || <></>}</ResponsiveContainer>
      </Box>
    </Rnd>
  );
};

export default ChartItem;
