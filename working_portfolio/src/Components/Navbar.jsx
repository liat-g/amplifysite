import Grid from '@mui/material/Grid'; // Grid version 1
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useState } from 'react'

const Navbar = ({nightMode, setNightMode}) => {



  return (
    <Grid>
        <div>
        <div>
      <ModeNightIcon onClick={() => setNightMode(!nightMode)}/>
      {/* <p>Night Mode: {nightMode ? 'On' : 'Off'}</p> */}
    </div>
    <h1>
    Liat Arkadia Guvenc
    </h1>
    <p>
        fullstack web developer from NY
    </p>
    </div>
    </Grid>
  )
}

export default Navbar