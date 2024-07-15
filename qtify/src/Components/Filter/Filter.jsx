import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect } from 'react';

export default function Filter() {
 // Add this line
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    debugger;
    console.log('handleChange called with newValue:', newValue); // Add this line
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider',color:'white' }}>
          <TabList 
          onChange={handleChange}
          aria-label="Genre Tabs" >
            <Tab label="ALL" value="1" 
            sx={{
            color:'white',
           '&.Mui-selected':{
            color:'green'
            }
            }}/>
             <Tab label="Rock" value="2" 
            sx={{
            color:'white',
           '&.Mui-selected':{
            color:'green'
            }
            }}/>
            <Tab label="Pop" value="3"  sx={{
            color:'white',
           '&.Mui-selected':{
            color:'green'
            }
            }}/>
            <Tab label="Jazz" value="4"  sx={{
            color:'white',
           '&.Mui-selected':{
            color:'green'
            }
            }}/>
            <Tab label="Blues" value="5"  sx={{
            color:'white',
           '&.Mui-selected':{
            color:'green'
            }
            }}/>
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Box>
  );
}
