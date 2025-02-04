import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { Box, Button, Collapse, Divider, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { ResponsiveContainer } from 'recharts';
import { Chart } from '../../types/chartTypes';
import { toggleChartOrientation } from '../../features/chartsSlice';
import { useAppDispatch } from '../../store/hooks';
import ReusableIconButton from '../ui/ReusableIconButton';

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
          gap: 1,
          width: '100%',
          height: '100%',
          bgcolor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          border: '1px solid #ddd',
        }}
      >
        <Button
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            bgcolor: 'white',
            height: 40,
            cursor: 'pointer',
            pl: 1,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid transparent',
            '&:focus': {
              outline: 'none',
              border: '1px solid transparent',
            },
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
                top: 10,
                left: 35,
                bgcolor: 'white',
                zIndex: 30,
              }}
            >
              <ReusableIconButton
                icon={<DeleteIcon />}
                onClick={() => handleDelete(chart.id)}
              />

              <Divider orientation='vertical' />
              <ReusableIconButton
                icon={<SwapVertIcon />}
                onClick={() => dispatch(toggleChartOrientation(chart.id))}
              />
            </Paper>
          </Collapse>
        </Button>
        <ResponsiveContainer>{renderChart(chart) || <></>}</ResponsiveContainer>
      </Box>
    </Rnd>
  );
};

export default ChartItem;
