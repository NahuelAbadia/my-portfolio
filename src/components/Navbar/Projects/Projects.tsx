import React from 'react'
import Card from './Card'
import { Box, Link, Stack, Text } from '@chakra-ui/react'

const Projects = () => {
    return (
        <Box>
            <Stack pt={12} pb={16} align="center" >

                <Stack>
                    <Text fontSize="4xl" fontWeight="semibold" >{"<"}Projects{" />"}</Text>
                </Stack>

                <Stack pt={8}>
                    <Stack direction="row" spacing={28}>
                        <Card />
                        <Card />
                    </Stack>
                    <Stack direction="row" spacing={28}>
                        <Card />
                        <Card />
                    </Stack>
                </Stack>
                
            </Stack>
        </Box>
    )
}

export default Projects
