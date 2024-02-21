import React from 'react'
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bizarrImg from '../assets/posting chair and showing post in my listings after.gif'
import bizarrImg2 from '../assets/home page (1).gif'
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import TRGROSSwireframe from '../assets/TRGROSSwireframe.png'
import gscript from '../assets/gscript.png'
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Fade from '@mui/material/Fade';

const ProjectsArray = [{
    Name: "Bizaar", 
    Type: "React Native E-commerce Mobile App",
    Description: 
    "Bizarr, a collaborative marketplace, keeps it simple, but also has everything you would need to buy and sell products in one transparent application. Our app was designed with React Native, deployed with Expo, and utilizes React Native Maps, Expo Location, and Google Places API to obtain the user’s location so that they can find products, as well as post a product to a specific location, where it can be picked up. Expo Image Picker allows users to upload images of their product, which is stored in Cloudinary. All of our listings are stored in Google’s Firebase Firestore, which we used as our database and for user authentication. We also implemented a realtime chat feature for our users to communicate amongst each other using React Native Gifted Chat.",
    Role:"Fullstack Developer",
    img: bizarrImg, bizarrImg2,
    techStack: "React Native Maps, Expo Location, Google Api, Cloudinary, Google Firestore, React Native Gifted Chat",
    Link: ""
},
{
    Name: "TR Gross Design", 
    Type: "Wireframes and Prototypes",
    Description: "T.R. Gross and I met on January 4, 2024, to discuss a plan on how to structure his portfolio website. T.R. Gross wants to sell his services as a craftsman and eventually scale up to an ecommerce website once he develops his inventory. Upon speaking to Gross, his demographics for the time being are potential employers, whether that be freelance or full time. For a portfolio website focused on selling his services, we need to have a homepage that is accessible on mobile with Gross’ best work, picture heavy. We need a gallery page that breaks down the planning process, and has writing about each of the pieces, and organizes his different crafts into categories. We also need a contact me page that has a built in emailing service that will go straight to TR’s email ",
    Role:"Freelance Designer",
    img: TRGROSSwireframe,
    techStack: "Figma",
    Link: "https://www.figma.com/file/wDyogo3lBZ0sas1nwQWmIG/Trevor-R-Gross?type=design&node-id=1669%3A162202&mode=design&t=R47lxgfIxxFWwLHR-1"
},
{
    Name: "Time Tracker", 
    Type: "Google Scripts algorithm for 1099 Contractors",
    Description: "Tool for contractors who can't make their own spreadsheets",
    Role: "developer",
    img: gscript,
    techStack: "JS, GWS, CLASP",
    Link: "https://docs.google.com/spreadsheets/d/1zzOoxFPydGHzt16gcRxGBDouw3hUMrT_zRQBIk27Ci4/edit?usp=sharing"
},
{
    Name: "Dream Journal", 
    Type: "Application for Recording Dreams",
    Description: "A simple project I made to try using Django and Python to handle posting data to a python DB",
    Role:"fullstack developer",
    img: "",
    techStack: "Python, Django",
    Link: "https://github.com/liat-g/Dream-Journal"
},
{
    Name: "3D Portfolio", 
    Type: "Interactive 3d Portfolio",
    Description: "site to experiment with 3d react technologies",
    Role:"Developer",
    img: "",
    techStack: "Three JS, React Three Fiber, React JS, Vue",
    Link: "https://github.com/liat-g/3d_port_lg"
},
]

const Projects = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  


  return (
    <Grid container spacing={1}>
         <h1> Projects </h1>
    <Grid>
    { ProjectsArray.map((data) => {
    return <Accordion
    // expanded={expanded}
    // onChange={handleExpansion}
    // // slots={{ transition: Fade }}
    // slotProps={{ transition: { timeout: 400 } }}
    // sx={{
    //   '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
    //   '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
    // }}
  >
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
          "main main .                   sidebar"
          "footer footer footer footer"`,
          }}
        >
        <Box sx={{ gridArea: 'main', fontStyle: 'bold', textAlign: 'left', fontSize: 'h6.fontSize'}}>
        {data.Name}
        </Box>
        <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'right'}}>
        {data.Type}
        </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            {data.Description}
        </Typography>
         {/* <Card> */}
        {/* <CardMedia
        component="img"
        height="50"
        width="50"
        image={data.img}
      /> */}
      <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'center'}}>
        <img src={data.img} alt="loading" height="400" />
      </Box>
      <Box>
          <a href={data.Link}>
              See the Repo Here!
          </a>
      </Box>
        {/* </ Card> */}
      </AccordionDetails>
    </Accordion>
    }
    )
}
</Grid>
    </Grid>
  )
}

export default Projects