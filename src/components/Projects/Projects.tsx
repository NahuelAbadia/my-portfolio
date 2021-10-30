import React from 'react'
import Card from './Card.jsx'
import { Box, Container, Link, Stack, Text } from '@chakra-ui/react'

const data : { id: number, numP: string, title: string, description: string }[] = [{
    id:1,
    numP:"01",
    title:"Silla 1",
    description: "Este es mi proyecto 1",
  },{
    id:2,
    numP:"02",
    title:"Sillita 2",
    description: "2do proyecto",
  },{
    id:3,
    numP:"03",
    title:"Silla piola 3",
    description: "Este es otro proyecto",
  }]

const Projects = () => {
    return (
        <Box bgColor="#282B59">
            <Container maxW="container.xl">
                <Stack pt={12} pb={16} align="center" >

                    <Stack>
                        <Text fontSize="4xl" fontWeight="semibold" >{"<"}Projects{" />"}</Text>
                    </Stack>

                    <Stack pt={8}>
                        <Stack direction="row" spacing={28}>
                            {data.map((dato, index) => {
                               return (
                                   <Card
                                   key={index}
                                   numP={dato.numP}
                                   title={dato.title}
                                   description={dato.description}
                                   />
                               ) 
                            })}
                        </Stack>
                        {/* <Stack direction="row" spacing={28}>
                            <Card />
                            <Card />
                        </Stack> */}
                    </Stack>

                </Stack>
            </Container>
        </Box>
    )
}

export default Projects
