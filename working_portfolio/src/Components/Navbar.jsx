import Grid from '@mui/material/Grid'; // Grid version 1
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React, { useState } from 'react'

const Navbar = ({nightMode, setNightMode}) => {



  return (
    <Grid container spacing={100}>
    <Grid item xs={12} sm={6}>
        <div>
        <div>
      <ModeNightIcon onClick={() => setNightMode(!nightMode)}/>
    </div>
    <h1>
    Liat Arkadia Guvenc
    </h1>
    <p>
        fullstack web developer from NY
    </p>
    </div>
    </Grid>
    </Grid>
  )
}

export default Navbar