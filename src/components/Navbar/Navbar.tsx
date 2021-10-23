import React from 'react'
import { Box, IconButton, Stack, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaMoon, FaSun, } from 'react-icons/fa'
const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Box>
            <Stack direction="row" justify="space-between" mt={4}>
                
                <Stack direction="column" fontWeight="semibold">
                    <Text fontSize="2.7rem" cursor="pointer"> My Portfolio</Text>
                </Stack>
                
                <Stack direction="row" alignItems="baseline" spacing={14} fontWeight="semibold" >
                    <Text mt={6} cursor="pointer">Home</Text>
                    <Text cursor="pointer">About</Text>
                    <Text cursor="pointer">Skills</Text>
                    <Text cursor="pointer">Projects</Text>
                    <Text cursor="pointer">Contact</Text>
                    <Stack direction="row">
                        <IconButton aria-label="Change Color" borderRadius={15} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}></IconButton>
                    </Stack>
                </Stack>
            
            </Stack>
        </Box>
    )
}

export default Navbar
