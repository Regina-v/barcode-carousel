import { Box } from '@mui/material';
import { useState } from 'react';

import BarcodeCarousel from '@/components/BarcodeCarousel';
import InputBox from '@/components/InputBox';

const defaultValue = `632024031601
612024031601
682024031601
672024031601
772024031601
642024031601`;

const SamplesTab = () => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
      }}
    >
      <InputBox onChange={setValue} defaultValue={defaultValue} multiline />
      <BarcodeCarousel value={value} barcode />
    </Box>
  );
};

export default SamplesTab;
