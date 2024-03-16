import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            width: '50%',
            margin: '0 auto',
            bgcolor: 'background.paper',
            gap: '50px',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
