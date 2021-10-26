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
                    <Text fontSize="2xl">Desarrollador Web / Estudiante de Ingeniería en Sistemas.</Text>
                    <Text>Mi nombre es Nahuel Abadía, soy un desarrollador web junior autodidacta y apasionado por lo que hago. Tengo iniciativa para llevar a cabo trabajos en equipo.</Text>
                    <Text>Estoy en búsqueda de mi primer empleo en desarrollo web, donde pueda aplicar mis conocimientos y habilidades para seguir mejorando día a día.</Text>
                    <Text>También considero que poseo un buen ojo para la parte de testing a la hora de detectar y corregir problemas o desperfectos que una página pueda llegar a tener.</Text>
                    <Link pt={4}>
                        <Button>Download CV</Button>
                    </Link>
                </Stack>

            </Stack>
        </Box>
    )
}

export default About
