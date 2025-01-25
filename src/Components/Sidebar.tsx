import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
} from '@mui/material';

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const drawerWidth = 300;

  const navItems = [
    { text: 'صفحه اصلی', href: '/' },
    { text: 'گزارشات', href: '/reports' },
    { text: 'تنظیمات', href: '/settings' },
  ];

  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
