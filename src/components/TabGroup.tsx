import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import CollectionSitesTab from '@/components/CollectionSitesTab';
import DeliverySitesTab from '@/components/DeliverySitesTab';
import SamplesTab from '@/components/SamplesTab';
import SmartTubesTab from '@/components/SmartTubesTab';
import TabPanel from '@/components/TabPanel';

const TabGroup = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Samples" />
          <Tab label="SmartTubes" />
          <Tab label="Collection sites" />
          <Tab label="Delivery sites" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SamplesTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SmartTubesTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CollectionSitesTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DeliverySitesTab />
      </TabPanel>
    </>
  );
};

export default TabGroup;
