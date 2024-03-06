import { Grid, Box, Stack, Typography} from '@mui/material'; // Grid version 1
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Projects from './Projects';
import Designs from './Designs'

// const Navbar = ({nightMode, setNightMode, props}) => {
  
//   const { children, value, index, ...other } = props;




//   return (
//     <Stack>
//       {/* <ModeNightIcon onClick={() => setNightMode(!nightMode)}/> */}
//     <Box sx={{ typography: 'h6.fontSize'}}>
//     Liat Arkadia Guvenc
//     </Box>
//     <Typography variant="caption" sx={{ fontWeight: 'light', fontStyle: 'italic'}}>
//         fullstack web developer from NY
//     </Typography>
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Web Development" value="1" />
//             <Tab label="Wireframes and Prototypes" value="2" />
//             <Tab label="3D Design" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//     </Stack>

//   )
// }

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ typography: 'h6.fontSize', fontFamily: "Futura"}}>
    Liat Arkadia Guvenc
    </Box>
    <Typography variant="caption" sx={{ fontWeight: 'light', fontStyle: 'italic'}}>
        fullstack web developer from NY
    </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', fontFamily: "Futura"}}>
        <Tabs value={value} onChange={handleChange} sx={{fontFamily: "Futura"}} textColor="secondary"
  indicatorColor="secondary" variant="fullWidth" >
          <Tab sx={{fontFamily: "Futura"}} label="Web and Mobile App Development" {...a11yProps(0)} />
          <Tab sx={{fontFamily: "Futura"}} label="UX Designs" {...a11yProps(1)} />
          <Tab sx={{fontFamily: "Futura"}} label="3D Modelling" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Designs />
        {/* Coming soon! */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming soon!
      </CustomTabPanel>
    </Box>
  );
}

export default Navbar