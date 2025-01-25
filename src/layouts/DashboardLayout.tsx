/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          ml: { sm: '300px' }, // عرض Sidebar
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
