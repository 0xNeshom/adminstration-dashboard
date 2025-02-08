import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import ChartLayout from './components/layout/ChartLayout';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { loadCharts } from './features/chartsSlice';
import { Chip, Stack, Tooltip, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { useAppDispatch } from './store/hooks';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

function CustomAppTitle() {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <CloudCircleIcon fontSize='large' color='primary' />
      <Typography variant='h6'>My App</Typography>
      <Chip size='small' label='BETA' color='info' />
      <Tooltip title='Connected to production'>
        <CheckCircleIcon color='success' fontSize='small' />
      </Tooltip>
    </Stack>
  );
}

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCharts());
  }, [dispatch]);

  return (
    <Router>
      <ReactRouterAppProvider>
        <AppProvider navigation={NAVIGATION} theme={demoTheme}>
          <DashboardLayout
            slots={{
              appTitle: CustomAppTitle,
            }}
          >
            <Routes>
              <Route path='dashboard' element={<ChartLayout />} />
            </Routes>
          </DashboardLayout>
        </AppProvider>
      </ReactRouterAppProvider>
    </Router>
  );
};

export default App;
