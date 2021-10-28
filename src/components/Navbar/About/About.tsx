import React from 'react'
import { Box, Button, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import Nahu1 from '../../../assets/nahu.jpeg'
import Nahu2 from '../../../assets/nahu2.jpg'
import Nahu3 from '../../../assets/nahu3.jpeg'

const About = () => {
    return (
        <Box>
            <Stack direction="row" pt={16} pb={16} justify="space-between">
                
                <Stack>
                    <Image src={Nahu1} borderRadius="25px" objectFit="contain"></Image>
                </Stack>

                <Stack pl={10} spacing={10}>
                    <Text fontSize="3xl" fontWeight="semibold">{"<"}Sobre mi{" />"}</Text>
                    <Text fontSize="2xl">Desarrollador Web</Text>
                    <Text>Mi nombre es Nahuel Abadía, soy un desarrollador frontend y apasionado por lo que hago. Tengo iniciativa para llevar a cabo trabajos en equipo.</Text>
                    <Text>Estoy constantemente en búsqueda de nuevos conocimientos para así mejorar día a día tanto mis proyectos personales como en lo laboral.</Text>
                    <Text>También considero que poseo un buen ojo para la parte de testing a la hora de detectar y corregir problemas o desperfectos que una página pueda llegar a tener.</Text>
                    <Link pt={4} style={{textDecoration: 'none'}}>
                        <Button>Download CV</Button>
                    </Link>
                </Stack>

            </Stack>
        </Box>
    )
}

export default About
