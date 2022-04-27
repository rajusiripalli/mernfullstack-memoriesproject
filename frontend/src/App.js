import React from 'react'
import {Container, AppBar,Typography, Grid, Grow } from '@material-ui/core';
const App = () => {
  return (
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
            <Typography variant='h2' align="center">Memories</Typography>
        </AppBar>
      </Container>
  )
}

export default App