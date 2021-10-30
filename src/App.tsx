import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ScrollToHome from './components/ScrollToHome';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import { Box, Divider, Stack, } from '@chakra-ui/react';

function App() {
  return (
    <Box bgColor="#1D2240">
        <Stack>
          <Navbar />
          <Header />
          {/* <Divider></Divider> */}
          <About />
          {/* <Divider></Divider> */}
          <Skills />
          {/* <Divider></Divider> */}
          <Projects />
          {/* <Divider></Divider> */}
          <Contact />

          <Footer />

          <Stack position="absolute" top={800} left={1780}>
            <ScrollToHome />
          </Stack>
        
        </Stack>
    </Box>
  );
}

export default App;
