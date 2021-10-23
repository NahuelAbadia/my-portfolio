import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import About from './components/Navbar/About/About';

function App() {
  return (
    <Box>
      <Container maxW="container.xl" >
        <Stack>
          <Navbar />
          <Header />
          <About />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
