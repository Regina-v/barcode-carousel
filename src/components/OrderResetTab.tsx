import { Box } from '@mui/material';
import { useState } from 'react';
import QRCode from 'react-qr-code';

import InputBox from '@/components/InputBox';

const defaultValue = `f7f6a947-830f-491f-ab5e-37fad0e947c2`;

const OrderResetTab = () => {
  const [value, setValue] = useState(defaultValue);
  const code = `order-reset;${value}`;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
      }}
    >
      <InputBox onChange={setValue} defaultValue={defaultValue} fullWidth />
      <QRCode value={code} />
    </Box>
  );
};

export default OrderResetTab;
