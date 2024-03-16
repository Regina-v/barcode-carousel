import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import TabGroup from '@/components/TabGroup';
import TheHeader from '@/components/TheHeader';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme />
      <TheHeader />
      <TabGroup />
    </React.Fragment>
  );
};

export default App;
