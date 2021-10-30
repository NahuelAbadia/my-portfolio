import React from 'react'
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
  
  export default function SmallWithSocial() {
    return (
      <Stack pt={8}>
      <Box
        bg="#282B59"
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'container.xxl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Copyright © 2021 - Nahuel Abadia. Todos los derechos reservados</Text>
        </Container>
      </Box>
      </Stack>
    );
  }