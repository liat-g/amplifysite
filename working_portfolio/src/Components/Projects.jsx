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
    Link: ""
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
    <Box sx={{ whiteSpace: 'nowrap' }}>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={6}>
         <h1> Projects </h1>
         <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
    </Grid>
    {/* <Grid> */}
    { ProjectsArray.map((data, index) => {
    return <Accordion
      key={index}
      
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
        id={`panel${index + 1}-header`}
        
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
          // boxShadow: 1 
          }}
          md={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header"
          "main main .                   sidebar"
          "footer footer footer footer"`,
          // boxShadow: 1 
          }}
        >
        <Box sx={{ gridArea: 'header', fontStyle: 'bold', textAlign: 'left', fontSize: 'h6.fontSize',}}>
        {data.Name}
        </Box>
        <Box sx={{ gridArea: 'main', fontStyle: 'italic', textAlign: 'left'}}>
        {data.Type}
        </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
      <Box>
        <Typography>
            {data.Description}
        </Typography>
        </Box>
        <AspectRatio objectFit="contain">
        {/* <Box> */}
        <ImageList variant="masonry" cols={3}>
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
          </AspectRatio>
          {/* </Box> */}
      {/* <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
  {data.img.map((item) => (
    <ImageListItem>
      {console.log(data.img, 'data.img')}
      <img
        srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item}?w=161&fit=crop&auto=format`}
      />
    </ImageListItem>
  ))}
</ImageList> */}
      {/* <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'center'}}>
        <img src={data.img} alt="loading" height="400" />
      </Box> */}
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
    </Box>
  )
}

export default Projects