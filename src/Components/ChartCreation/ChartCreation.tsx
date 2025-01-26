import Stack from '@mui/material/Stack';
import Orientation from './Orientation';
import ChartType from './ChartType';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Fields from './Fields';

const ChartCreation = () => {
  return (
    <>
      <Typography sx={{ fontSize: '2rem' }}>Chart Creation</Typography>
      <Divider />
      <Stack
        sx={{ marginTop: '20px', width: '90%' }}
        direction="row"
        spacing={2}
      >
        <Orientation />
        <ChartType />
        <Fields/>
      </Stack>
    </>
  );
};

export default ChartCreation;
