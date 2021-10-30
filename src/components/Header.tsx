import React from 'react'
import { Box, Button, Container, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import Nahu3 from '../assets/nahu3.jpeg'

const Header = () => {
    return (
        <Box>
            <Container maxW="container.xl" h="845px">
                <Stack pt={8} pb={16}>
                    <Stack direction="row" justify="space-between">
                        {/* <Stack direction="row" justify="space-between" bgImage={Nahu3} w="700" h="900"> ver como hago para poner la foto a la derecha */}

                        <Stack pt={32}>
                            <Stack spacing={-1}>
                                <Text fontSize="3xl" fontWeight="semibold">Hi, my name is</Text>
                                <Text fontSize="7xl" fontWeight="semibold">Nahuel Abadía</Text>
                                <Stack direction="row" spacing={4}>
                                    <Text fontSize="5xl" fontWeight="semibold">I'm a</Text>
                                    <Text fontSize="5xl" fontWeight="semibold" color="cyan.300">
                                        {<Typewriter options={{
                                            autoStart: true,
                                            loop: true,
                                        }}
                                            onInit={(typewriter) => {
                                                typewriter.typeString("Frontend Developer").pauseFor(1000).deleteAll()
                                                    .typeString("Backend Developer").pauseFor(1000).deleteAll()
                                                    .typeString("Full Stack Developer").pauseFor(1000).deleteAll().start()
                                            }}
                                        />}
                                    </Text>
                                </Stack>
                            </Stack>

                            <Stack direction="row" pt={5}>
                                <Link href="mailto:nahuabadia@gmail.com" style={{ textDecoration: 'none' }}>
                                    <Button size="lg" colorScheme="cyan">Hire me</Button>
                                </Link>
                            </Stack>

                            <Stack direction="row" pt={8} spacing={4}>
                                <Link href="https://www.linkedin.com/in/nahuel-tomás-abadia/" isExternal>
                                    <IconButton icon={<FaLinkedinIn />} variant="outline" aria-label="Linkedin"> </IconButton>
                                </Link>
                                <Link href="https://github.com/NahuelAbadia/" isExternal>
                                    <IconButton icon={<FaGithub />} variant="outline" aria-label="Github"></IconButton>
                                </Link>
                                <Link href="https://www.instagram.com/nahue.abadia/" isExternal>
                                    <IconButton icon={<FaInstagram />} variant="outline" aria-label="Instagram"></IconButton>
                                </Link>
                            </Stack>
                        </Stack>

                        <Stack direction="row">
                            <Image src={Nahu3} w="600" h="700" borderRadius="25px" objectFit="contain" ></Image>
                        </Stack>

                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default Header
