import React from 'react'
import { Box, Button, IconButton, Stack, Text } from '@chakra-ui/react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ScrollToHome = () => {

    const scrollHome = () => {
        window.scroll({ top: 0, behavior: "smooth" })
    }

    return (
        <Box>

        {/* DARLE UNA POSITION FIXED, UBICARLO EN LA PARTE INFERIOR DERECHA */}

            <Stack align="center" pt={10} pb={4} position="fixed">
                <IconButton
                    icon={<BsFillArrowUpCircleFill />}
                    aria-label="Flecha-arriba"
                    borderRadius="full"
                    fontSize="2rem"
                    size="lg"
                    onClick={scrollHome}
                >
                </IconButton>
            </Stack>
        </Box>
    )
}

export default ScrollToHome
