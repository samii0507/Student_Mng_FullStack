import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
export default function Student() {
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const classes = useStyles();
    const[name,SetName] = useState('')
    const[address,SetAddress]=useState('')
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1,  },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
                value={name}
                onChange={(e)=>SetName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth 
                value={address}
                onChange={(e)=>SetAddress(e.target.value)}
                />
            </Box>
        </Paper>
    </Container>
    
  );
}
