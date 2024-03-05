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



const AccordionHeading = styled(Typography)(({theme}) => ({

  backgroundColor: palette.secondary
}))

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
    img: [ bizarrImg, bizarrlogo ],
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

const Projects = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  
    const matches = useMediaQuery(
      json2mq({
        minWidth: 600,
      }),
    );

  return (
    <Box sx={{flexWrap: 'wrap' }}>
    { ProjectsArray.map((data, index) => {
    return <Accordion
      key={index}
      >
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id={`panel${index + 1}-header`}
        
      >
        <Box>
        {data.Name}
        </Box>
        <Typography variant="caption" p={3} sx={{fontStyle: 'italic', fontFamily: "Futura"}}>
        {data.Type}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      {/* <Box sx={{overflow: "wrap"}}> */}
        <Typography variant="caption" sx={{ wordBreak: "break-word", display:"inline"}}>
            {data.Description}
        </Typography>
        {/* </Box> */}
        <ImageList variant="woven" cols={matches ? 2 : 1} sx={{height:{xs:"75%", sm:"75%", md:"50%", lg:"50%"}, width:{xs:"75%",sm:"75%", md:"50%", lg:"50%"}, justifyContent: "center",
    alignItems: "center", display: "flex"}}>
            {data.img.map((imgUrl, imgIndex) => (
              <ImageListItem key={imgIndex}>
                <img
                    srcSet={`${imgUrl}?w=248&fit=contain&auto=format&dpr=2`}
                    src={`${imgUrl}?w=248&fit=contain&auto=format`}
                    // src={imgUrl}
                    alt={`Project ${index + 1} image ${imgIndex + 1}`}
                    
                                        />
                                    </ImageListItem>
                                ))}
          </ImageList>
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
    </Box>
  )
}

export default Projects