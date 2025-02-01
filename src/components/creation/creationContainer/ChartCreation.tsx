import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { addChart, saveCharts } from '../../../features/chartsSlice';
import { setChartType } from '../../../features/currentChartSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';
import { Chart, ChartType } from '../../../types/chartTypes';
import OrientationInput from '../OrientationInput';
import ChartInput from '../ChartInput';
import { useAppDispatch } from '../../../store/hooks';
import flattenedData from '../../../data/data';
import FieldsInput from '../FieldsInput';

const ChartCreation = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorField, setErrorField] = useState<boolean>(false);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const dispatch = useAppDispatch();
  const currentChart = useSelector((state: RootState) => state.currentChart);

  const titles = Array.from(new Set(flattenedData.map((item) => item.name)));

  const filteredData = flattenedData.filter(
    (item) => item.name === selectedTitle
  );

  const handleTitleChange = (event: SelectChangeEvent<string>) => {
    setSelectedTitle(event.target.value as string);
  };

  const handleCreate = () => {
    if (!currentChart.type) {
      setError(true);
      return;
    }

    if (!selectedTitle) {
      setErrorField(true);
      // setSelectedTitle('')
      return;
    }

    const newChart: Chart = {
      id: Date.now().toString(),
      type: currentChart.type,
      orientation: currentChart.orientation,
      fields: currentChart.fields,
      settings: currentChart.settings,
      position: currentChart.position,
      size: { width: 400, height: 300 },
      data: filteredData,
    };
    console.log(newChart);
    dispatch(addChart(newChart));
    setError(false);
  };

  const handleChartTypeChange = (event: SelectChangeEvent<ChartType>) => {
    dispatch(setChartType(event.target.value as ChartType));
  };

  const handleSave = () => {
    dispatch(saveCharts());
  };

  return (
    <>
      <Box
        style={{
          display: 'flex',
          width: '100%',
          height: '50px',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          Chart Creation
        </Typography>
        <Divider orientation='vertical' />
        <OrientationInput />
        <ChartInput error={error} handleChart={handleChartTypeChange} />
        <FieldsInput errorField={errorField} selectedTitle={selectedTitle}  handleTitleChange={handleTitleChange}  titles={titles} />
        {/* <FormControl error={error} sx={{ minWidth: 120 }} size='small'>
          <InputLabel>Fields</InputLabel>
          <Select
            value={selectedTitle}
            onChange={handleTitleChange}
            label='Fields'
          >
            {titles.map((title) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
          </Select>
          {errorField && (
            <FormHelperText sx={{ color: 'red' }}>
              you sould select a field{' '}
            </FormHelperText>
          )}
        </FormControl> */}

        <Button
          variant='contained'
          onClick={handleCreate}
          sx={{ height: '80%' }}
        >
          Create
        </Button>
        <Button
          sx={{ height: '80%' }}
          variant='contained'
          onClick={handleSave}
          disabled={!currentChart.type || !selectedTitle}
        >
          Save
        </Button>
      </Box>
      <Divider orientation='horizontal' sx={{ marginTop: '10px' }} />
    </>
  );
};

export default ChartCreation;
