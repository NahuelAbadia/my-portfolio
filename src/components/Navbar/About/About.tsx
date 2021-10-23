import React from 'react'
import { Box, Button, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import { FaHtml5, FaCss3Alt, } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import Nahu1 from '../assets/nahu.jpeg'
import Nahu2 from '../../../assets/nahu2.jpg'
import Nahu3 from '../assets/nahu3.jpeg'

const About = () => {
    return (
        <Box>
            <Stack direction="row" pt={24}>
                <Stack>
                    <Text fontSize="3xl">Sobre mi</Text>
                    <Text>Desarrollador Web / Estudiante de Ingeniería en Sistemas.</Text>
                    <Text>Mi nombre es Nahuel Abadía, soy un desarrollador web junior autodidacta y apasionado por lo que hago. Tengo iniciativa para llevar a cabo trabajos en equipo.</Text>
                    <Text>Estoy en búsqueda de mi primer empleo en desarrollo web, donde pueda aplicar mis conocimientos y habilidades para seguir mejorando día a día.</Text>
                    <Text>También considero que poseo un buen ojo para la parte de testing a la hora de detectar y corregir problemas o desperfectos que una página pueda llegar a tener.</Text>
                    <Link>
                        <Button>Download CV</Button>
                    </Link>
                </Stack>

                <Stack>
                    <Image src={Nahu2} w="600" h="700" objectFit="contain"></Image>
                </Stack>
            </Stack>
        </Box>
    )
}

export default About
