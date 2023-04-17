import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid, Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './Login.css'

export default function Login() {
    return (
        <Grid className="boxForm" container >
            <Grid >
        <Box paddingX={20}>
        <form action="">
            <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align='center' style={{fontWeight: 'bold'}}>Login</Typography>
            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth></TextField>
            <Link to='/home'>
            <Button variant="contained" >Login</Button>
            </Link>
        </form>
        </Box>
        </Grid>
      </Grid>
      
      )
}
