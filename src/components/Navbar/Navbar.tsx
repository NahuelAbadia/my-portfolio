import React from 'react'
import { Box, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaMoon, FaSun, } from 'react-icons/fa'

const Navbar = () => {

    // const { colorMode, toggleColorMode } = useColorMode();
    // const isDark = colorMode === "dark";

    const scrollHome = () => {
        window.scroll({ top: 0, behavior: "smooth" })
    }
    const scrollAbout = () => {
        window.scroll({ top: 850, behavior: "smooth" })
    }
    const scrollSkills = () => {
        window.scroll({ top: 1700, behavior: "smooth" })
    }
    const scrollProjects = () => {
        window.scroll({ top: 2050, behavior: "smooth" })
    }
    const scrollContact = () => {
        window.scroll({ top: 3200, behavior: "smooth" })
    }

    return (
        <Box>
            <Stack direction="row" justify="space-between" mt={4}>

                <Stack direction="column" fontWeight="semibold">
                    <Text fontSize="2.7rem" cursor="pointer">{"<"}My Portfolio{" />"}</Text>
                </Stack>

                <Stack direction="row" spacing={14} fontSize="md" fontWeight="semibold" pt={6} >
                    <Link onClick={scrollHome}>
                        <Text cursor="pointer">Home</Text>
                    </Link>
                    <Link onClick={scrollAbout}>
                        <Text cursor="pointer">About</Text>
                    </Link>
                    <Link onClick={scrollSkills}>
                        <Text cursor="pointer">Skills</Text>
                    </Link>
                    <Link onClick={scrollProjects}>
                        <Text cursor="pointer">Projects</Text>
                    </Link>
                    <Link onClick={scrollContact}>
                        <Text cursor="pointer">Contact</Text>
                    </Link>

                    {/* <Stack direction="row">
                        <IconButton aria-label="Change Color" borderRadius={15} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}></IconButton>
                    </Stack> */}
                    
                </Stack>

            </Stack>
        </Box>
    )
}

export default Navbar
