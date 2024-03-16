import { Typography } from '@mui/material';
import { FaBarcode } from 'react-icons/fa6';
import { LuGalleryThumbnails } from 'react-icons/lu';

const TheHeader = () => {
  return (
    <Typography
      variant="h2"
      gutterBottom
      justifyContent={'center'}
      display={'flex'}
      alignItems={'center'}
      gap={'25px'}
      mt={3}
    >
      <FaBarcode />
      Barcode Carousel
      <LuGalleryThumbnails />
    </Typography>
  );
};

export default TheHeader;
