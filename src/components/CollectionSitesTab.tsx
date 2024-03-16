import { Box } from '@mui/material';
import { useState } from 'react';

import BarcodeCarousel from '@/components/BarcodeCarousel';
import InputBox from '@/components/InputBox';

const defaultValue = `cs;Doktor Demo;0629bfa5-7b03-4bd0-827e-01b05ee40575
cs;Demo Tester HCP;7013c66b-5486-4e09-bc8c-01fccc15b211
cs;JCS Demo HCP;62f89855-f265-42a2-b427-8989db9be8ff
cs;HCP Teneke;20f5fb87-8e99-4b98-b4f6-f01445ac886e
cs;S4DX Julia HCP;e8af07f7-9090-432d-ba33-85833f67bbab`;

const CollectionSitesTab = () => {
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

export default CollectionSitesTab;
