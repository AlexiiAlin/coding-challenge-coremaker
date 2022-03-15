import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './NavBar.css';

export default function NavBar(props: any) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="row-reverse">
          {props.children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
