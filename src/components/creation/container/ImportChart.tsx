import React, { ChangeEvent } from 'react';
import { importChartFromJSON } from '../../../features/importThunks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const ImportChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.charts);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      dispatch(importChartFromJSON(file));
    }
  };

  return (
    <>
      <Button
        component='label'
        role={undefined}
        variant='contained'
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type='file'
          accept='.json'
          onChange={handleFileChange}
          multiple
        />
      </Button>
    </>
  );
};

export default ImportChart;
