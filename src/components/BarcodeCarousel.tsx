import {
  Box,
  Button,
  createTheme,
  MobileStepper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import QRCode from 'react-qr-code';

const theme = createTheme({ typography: { fontSize: 16 } });

interface BarcodeCarouselProps {
  value: string | string[];
  barcode?: boolean;
  qrcode?: boolean;
}

const BarcodeCarousel = (props: BarcodeCarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const { value, barcode, qrcode } = props;
  const values = typeof value === 'string' ? value.split('\n') : value;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && activeStep < values.length - 1) {
      handleNext();
    } else if (e.key === 'ArrowLeft' && activeStep > 0) {
      handleBack();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [keyDownHandler]);

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {barcode && <Barcode value={values[activeStep]} />}
      {qrcode && <QRCode value={values[activeStep]} />}
      {qrcode && <Typography variant="h6">{values[activeStep].split(';')[1]}</Typography>}
      <ThemeProvider theme={theme}>
        <MobileStepper
          variant="dots"
          steps={values.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === values.length - 1}
              onKeyDown={(e) => e.key === 'ArrowRight' && handleNext()}
            >
              Next
              <MdKeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              onKeyDown={(e) => e.key === 'ArrowLeft' && handleBack()}
            >
              <MdKeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </ThemeProvider>
    </Box>
  );
};

export default BarcodeCarousel;
