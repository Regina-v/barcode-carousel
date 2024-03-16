import { Box } from '@mui/material';
import { useState } from 'react';

import BarcodeCarousel from '@/components/BarcodeCarousel';
import InputBox from '@/components/InputBox';

const defaultValue = 'regina';

const SmartTubesTab = () => {
  const [value, setValue] = useState(defaultValue);
  const values = Array.from({ length: 10 }, (_, i) => 'st' + value + (i + 1));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
      }}
    >
      <InputBox onChange={setValue} defaultValue={defaultValue} />
      <BarcodeCarousel value={values} barcode />
    </Box>
  );
};

export default SmartTubesTab;
