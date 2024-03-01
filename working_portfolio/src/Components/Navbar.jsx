import { Grid, Box, Stack, Typography} from '@mui/material'; // Grid version 1
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useState } from 'react'

const Navbar = ({nightMode, setNightMode}) => {



  return (
    <Stack>
      <ModeNightIcon onClick={() => setNightMode(!nightMode)}/>
    <Box sx={{ typography: 'h6.fontSize'}}>
    Liat Arkadia Guvenc
    </Box>
    <Typography variant="caption" sx={{ fontWeight: 'light', fontStyle: 'italic'}}>
        fullstack web developer from NY
    </Typography>
    </Stack>

  )
}

export default Navbar