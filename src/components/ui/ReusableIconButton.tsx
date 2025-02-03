import React from 'react';
import { IconButton } from '@mui/material';

interface ReusableIconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  sx?: object;
}

const ReusableIconButton: React.FC<ReusableIconButtonProps> = ({ icon, onClick, sx }) => {
  return (
    <IconButton
      sx={{
        color: 'primary.main',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid transparent',
        '&:focus': {
          outline: 'none',
          border: '1px solid transparent',
        },
        '&:hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export default ReusableIconButton;
