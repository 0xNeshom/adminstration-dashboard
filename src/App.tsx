/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AddchartIcon from '@mui/icons-material/Addchart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import ChartCreation from './Components/ChartCreation';
import ChartLayout from './Components/ChartLayout';
import { createTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

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
    segment: 'chartCreation',
    title: 'Chart Creation',
    icon: <AddchartIcon />,
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

// function DemoPageContent({ pathname }: { pathname: string }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

const App = () => {
  return (
    <Router>
      <ReactRouterAppProvider>
        <AppProvider navigation={NAVIGATION} theme={demoTheme}>
          <DashboardLayout>
            <Routes>
              <Route path="dashboard" element={<ChartLayout/>} />
              <Route path="/create-chart" element={<ChartCreation />} />
              {/* <Route path="/bar-chart" element={<BarChartLayout />} /> */}
            </Routes>
          </DashboardLayout>
        </AppProvider>
      </ReactRouterAppProvider>
    </Router>
  );
};

export default App;
