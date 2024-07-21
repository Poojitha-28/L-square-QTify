import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Carousal from '../Carousal/Carousal';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';
import styles from './Filter.module.css';

export default function Filter({songsData,type,filters}) {

 // Add this line
  const [value, setValue] = useState("ALL");
  const [genreData,setgenreData]= useState([...songsData]);

  const handleChange = (event, newValue) => {
    debugger;
    setValue(newValue);
    if(newValue=="ALL")
    {
      setgenreData(songsData);

    }
    else
    {
    setgenreData(songsData.filter(x=>x.genre.key==newValue));
    }
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider',color:'white' }}>
          <TabList 
          onChange={handleChange}
          aria-label="Genre Tabs" >
            {
              filters.map((ele,idx)=>(
                <Tab key={idx} label={ele.label} value={ele.key} 
                sx={{
                  color:'white',
                 '&.Mui-selected':{
                  color:'green'
                  }
                  }}/>
              ))
            }
          </TabList>
        </Box>
       { filters.map((ele,idx)=>(
        <TabPanel key={idx} value={ele.key} label={ele.label}>
        {genreData.length===0?<CircularProgress/>:
        <Carousal data={genreData} type={type}/>
      }
      </TabPanel>
       ))
    }
      </TabContext>
    </Box>
  );
}
