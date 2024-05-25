import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


const AddBlog = () => {
  return (
    <div>
        
        <Typography variant='h3'style={{fontFamily:"cursive"}}></Typography>
        <Typography variant='h4' style={{color:'Highlight', fontFamily:'fantasy'}}>Blog Form</Typography><br/><br/>
        <TextField variant='outlined' label='Blog Name'></TextField><br/><br/>
        <TextField variant='outlined' label='Description'></TextField><br/><br/>
        <TextField variant='outlined' label='Author Name'></TextField><br/><br/>
        <Button variant='contained' style={{fontFamily:'revert' ,color:'AppWorkspace'}}>Submit</Button>
      
    </div>
  )
}

export default AddBlog
