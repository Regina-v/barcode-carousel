import { Box } from '@mui/material';
import { useState } from 'react';

import BarcodeCarousel from '@/components/BarcodeCarousel';
import InputBox from '@/components/InputBox';

const defaultValue = `ds;Labor Müller;f7f6a947-830f-491f-ab5e-37fad0e947c2
ds;Labor Maier;f460ba55-85c1-4e13-aef6-9afed1d13616`;

const DeliverySitesTab = () => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
      }}
    >
      <InputBox onChange={setValue} defaultValue={defaultValue} multiline fullWidth />
      <BarcodeCarousel value={value} qrcode />
    </Box>
  );
};

export default DeliverySitesTab;
