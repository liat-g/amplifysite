import React from 'react'
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bizarrImg from '../assets/followup.gif'
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import TRGROSSwireframe from '../assets/TRGROSSwireframe.png'
import gscript from '../assets/gscript.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import postingChair from '../assets/postingChair.gif';
import bizarrlogo from '../assets/bizarrlogo.jpeg';
import { styled } from "@mui/material/styles";
import AspectRatio from '@mui/joy/AspectRatio';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import json2mq from 'json2mq';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



// const AccordionHeading = styled(Typography)(({theme}) => ({

//   backgroundColor: palette.secondary
// }))

// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Fade from '@mui/material/Fade';


// const Wrapper = styled(Box)(({ theme }) => ({
//   // background: "#1976d2",
//   height: "100vh",
//   [theme.breakpoints.down("md")]: {
//     background: "orange",
//   },
//   [theme.breakpoints.down("sm")]: {
//     background: "blue",
//   },
//   [theme.breakpoints.up("lg")]: {
//     background: "purple",
//   },
// }));

const ProjectsArray = [{
    Name: "Bizaar", 
    Type: "React Native E-commerce Mobile App",
    Description: 
    "Bizarr, a collaborative marketplace, keeps it simple, but also has everything you would need to buy and sell products in one transparent application. Our app was designed with React Native, deployed with Expo, and utilizes React Native Maps, Expo Location, and Google Places API to obtain the user’s location so that they can find products, as well as post a product to a specific location, where it can be picked up. Expo Image Picker allows users to upload images of their product, which is stored in Cloudinary. All of our listings are stored in Google’s Firebase Firestore, which we used as our database and for user authentication. We also implemented a realtime chat feature for our users to communicate amongst each other using React Native Gifted Chat.",
    Role:"Fullstack Developer",
    img: [ bizarrImg, postingChair, bizarrlogo ],
    techStack: "React Native Maps, Expo Location, Google Api, Cloudinary, Google Firestore, React Native Gifted Chat",
    Link: "https://github.com/04-cs-2109-compoutine/Bizarr"
},
{
  Name: "Dream Journal", 
  Type: "Application for Recording Dreams",
  Description: "A simple project I made to try using Django and Python to handle posting data to a python DB",
  Role:"fullstack developer",
  img: [],
  techStack: "Python, Django",
  Link: "https://github.com/liat-g/Dream-Journal"
},
{
  Name: "3D Portfolio", 
  Type: "Interactive 3d Portfolio",
  Description: "site to experiment with 3d react technologies",
  Role:"Developer",
  img: [],
  techStack: "Three JS, React Three Fiber, React JS, Vue",
  Link: "https://github.com/liat-g/3d_port_lg"
},
{
    Name: "Time Tracker", 
    Type: "Google Scripts algorithm for 1099 Contractors",
    Description: "Tool for contractors who can't make their own spreadsheets",
    Role: "developer",
    img: [ gscript ],
    techStack: "JS, GWS, CLASP",
    Link: "https://docs.google.com/spreadsheets/d/1zzOoxFPydGHzt16gcRxGBDouw3hUMrT_zRQBIk27Ci4/edit?usp=sharing"
},
]
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        variant="fullWidth"
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {ProjectsArray.map((data, index) => (
          <Tab key={index} label={data.Name} {...a11yProps(index)}   wrapped/>
        ))}
      </Tabs>
      {ProjectsArray.map((data, index) => (
        <TabPanel key={index} value={value} index={index}>
          {data.Description}
        </TabPanel>
      ))}
    </Box>
  );
}
export default VerticalTabs