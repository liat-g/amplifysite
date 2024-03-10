import React from 'react'
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import TRGROSSwireframe from '../assets/TRGROSSwireframe.png';
import logotag from '../assets/logotag.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';



// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import Fade from '@mui/material/Fade';

const ProjectsArray = [
{
    Name: "TR Gross", 
    Type: "Wireframes and Prototypes",
    Description: "T.R. Gross and I met on January 4, 2024, to discuss a plan on how to structure his portfolio website. T.R. Gross wants to sell his services as a craftsman and eventually scale up to an ecommerce website once he develops his inventory. Upon speaking to Gross, his demographics for the time being are potential employers, whether that be freelance or full time. For a portfolio website focused on selling his services, we need to have a homepage that is accessible on mobile with Gross’ best work, picture heavy. We need a gallery page that breaks down the planning process, and has writing about each of the pieces, and organizes his different crafts into categories. We also need a contact me page that has a built in emailing service that will go straight to TR’s email ",
    Role:"Freelance Designer",
    img: [TRGROSSwireframe],
    techStack: "Figma",
    embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwDyogo3lBZ0sas1nwQWmIG%2FTrevor-R-Gross%3Ftype%3Ddesign%26node-id%3D1669%253A162202%26mode%3Ddesign%26t%3DVk44cxM7SlOyXMYr-1",
    Link: "https://www.figma.com/file/wDyogo3lBZ0sas1nwQWmIG/Trevor-R-Gross?type=design&node-id=1669%3A162202&mode=design&t=R47lxgfIxxFWwLHR-1"
},
{
  Name: "Arkadia Designs", 
  Type: "Wireframes and Prototypes",
  Description: "Freelance and Brand Designing for Up-and-Coming jewelry designer",
  Role:"Freelance Designer",
  img: [logotag],
  techStack: "Figma",
  embed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWijIvb2AqtF88L4OZoYmOD%2FResearch%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DVk44cxM7SlOyXMYr-1",
  Link: "https://www.figma.com/file/WijIvb2AqtF88L4OZoYmOD/Research?type=design&node-id=0%3A1&mode=design&t=Vk44cxM7SlOyXMYr-1"
},
]

const Designs = () => {

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
        <ImageList variant="masonry" cols={matches ? 2 : 1} sx={{height:{xs:"100%", sm:"100%", md:"50%", lg:"50%"}, width:{xs:"75%",sm:"75%", md:"50%", lg:"50%"}, justifyContent: "center",
    alignItems: "center", display: "flex"}}>
            {data.img.map((imgUrl, imgIndex) => (
              <ImageListItem key={imgIndex}>
                <img
                    srcSet={`${imgUrl}?w=500&fit=contain&auto=format&dpr=2`}
                    src={`${imgUrl}?w=500&fit=contain&auto=format`}
                    // src={imgUrl}
                    alt={`Project ${index + 1} image ${imgIndex + 1}`}
                    
                                        />
                                    </ImageListItem>
                                ))}
              <ImageListItem>
              <Box sx={{width: 500, height:500, alignItems: "center"}}>
               <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'center'}}>
          </Box>
        {/* <img src={data.img} alt="loading" height="100%" /> */}
      <iframe width="100%" height="100%"src={data.embed} allowfullscreen></iframe>
    </Box>
              </ImageListItem>
          </ImageList>
   <Box>
          <a href={data.Link}>
               See the Figma Here!
          </a>
    </Box>
      </AccordionDetails>
    </Accordion>
    }
    )
}
    </Box>
//     <Grid container spacing={3}>
//          {/* <h1> Designs </h1> */}
//     <Grid>
//     { ProjectsArray.map((data) => {
//     return <Accordion
//     // expanded={expanded}
//     // onChange={handleExpansion}
//     // // slots={{ transition: Fade }}
//     // slotProps={{ transition: { timeout: 400 } }}
//     // sx={{
//     //   '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
//     //   '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
//     // }}
//   >
//       <AccordionSummary
//         expandIcon={<ArrowDownwardIcon />}
//         aria-controls="panel1-content"
//         id="panel1-header"
//       >
//         <Box
//          sx={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(4, 1fr)',
//             gap: 1,
//             gridTemplateRows: 'auto',
//             gridTemplateAreas: `"header header header header"
//           "main main .                   sidebar"
//           "footer footer footer footer"`,
//           }}
//         >
//         <Box sx={{ gridArea: 'main', fontStyle: 'bold', textAlign: 'left', fontSize: 'h6.fontSize'}}>
//         {data.Name}
//         </Box>
//         <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'right'}}>
//         {data.Type}
//         </Box>
//         </Box>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//             {data.Description}
//         </Typography>
//          {/* <Card> */}
//         {/* <CardMedia
//         component="img"
//         height="50"
//         width="50"
//         image={data.img}
//       /> */}
//       <Box sx={{ gridArea: 'sidebar', fontStyle: 'italic', textAlign: 'center'}}>
//         <img src={data.img} alt="loading" height="400" />
//         <iframe width={800} height={450} src={data.embed} allowfullscreen></iframe>
//       </Box>
//       {/* <iframe width={800} height={450} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWijIvb2AqtF88L4OZoYmOD%2FResearch%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DVk44cxM7SlOyXMYr-1" allowfullscreen></iframe> */}
//       <Box>
//           <a href={data.Link}>
//               See the Figma Here!
//           </a>
//       </Box>
//         {/* </ Card> */}
//       </AccordionDetails>
//     </Accordion>
//     }
//     )
// }
// </Grid>
//     </Grid>
  )
}

export default Designs