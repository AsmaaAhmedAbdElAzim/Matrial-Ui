import React from 'react'
import {Box, InputAdornment, TextField ,Button }from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Create() {
  return (<>
    <Box component='form' sx={{width:'380px'}}>
    <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={{ mt:'40px' , display:'block' }}
         fullWidth
          variant="outlined"
          required
        />
    <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          fullWidth
          sx={{ mt:'40px' , display:'block' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="outlined"
          required
        />
        <Button sx={{mt:'10px'}} className='btn' variant="contained" >
  Submit
<ArrowForwardIosIcon/>
</Button>
    </Box>
  
  </>
    
  )
}
