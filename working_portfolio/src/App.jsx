import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Designs from './Components/Designs';
import VerticalTabs from './Components/TabbedProjects';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import {Box, Stack} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
// import Container from '@mui/material/Container';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// });

function App() {
  // const modelRef = React.useRef();
  const [nightMode, setNightMode] = useState(false)
  
    const matches = useMediaQuery(
      json2mq({
        minWidth: 600
      })
    )


  return (
    <>
      <Box>
      <Router>
        <Stack direction="column" justifyContent="center">
        <Navbar nightMode={nightMode} setNightMode={setNightMode}/>
        {/* <Box xs={{typography: 'h6.fontSize', fontWeight: '500',}}> 
          Web Development 
        </Box> */}
        {/* <Designs /> */}
        </Stack>
      </Router>
      </Box>
    </>
  )
}

export default App
