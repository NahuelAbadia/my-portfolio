import React from 'react'
import { Box, Button, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import Nahu1 from '../assets/nahu.jpeg'
import Nahu2 from '../assets/nahu2.jpg'
import Nahu3 from '../assets/nahu3.jpeg'

const Header = () => {

    return (
        <Box>
            <Stack pt={8}>
                <Stack direction="row" justify="space-between">

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
                            <Button size="lg" colorScheme="cyan" >Hire me</Button>
                        </Stack>

                        <Stack direction="row" pt={8} spacing={4}>
                            <Link href="https://www.linkedin.com/in/nahuel-tomás-abadia/" isExternal>
                                <IconButton icon={<FaLinkedinIn />} variant="outline" aria-label="Linkedin"> </IconButton>
                            </Link>
                            <Link href="https://github.com/NahuelAbadia/" isExternal>
                                <IconButton icon={<FaGithub />} variant="outline" aria-label="Github"></IconButton>
                            </Link>
                        </Stack>
                    </Stack>

                    <Stack direction="row" justify="flex-end">
                        <Image src={Nahu3} w="600" h="700" borderRadius="25px" objectFit="contain" ></Image>
                    </Stack>

                </Stack>
            </Stack>
        </Box>
    )
}

export default Header
