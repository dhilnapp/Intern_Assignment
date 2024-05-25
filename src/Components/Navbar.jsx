import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import BlurOnTwoToneIcon from '@mui/icons-material/BlurOnTwoTone';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BlurOnTwoToneIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }} style={{color:'HighlightText', fontFamily:'cursive',fontSize:'x-large'}}>
          HomePage
          </Typography>
          <Link to={"/view"}><Button variant="contained" style={{fontSize:'medium'}}>Add Blog</Button></Link>&nbsp;
          <Link to={"/"}><Button variant="contained" style={{fontSize:'medium'}}>Home</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    <br/><br/>
    </div>
  )
}

export default Navbar
