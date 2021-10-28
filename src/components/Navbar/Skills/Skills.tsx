import React from 'react'
import { Box, Button, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaReact, } from 'react-icons/fa'
import { SiJavascript, SiChakraui } from 'react-icons/si'

const Skills = () => {
    return (
        <Box>
            <Stack pt={12} pb={16} align="center" spacing={6}>
                
                <Stack>
                    <Text fontSize="4xl" fontWeight="semibold">{"<"}My Skills{" />"}</Text>
                </Stack>

                <Text fontSize="lg">These are some of my skills</Text>

                <Stack direction="row" spacing={14} pt={8}>
                    <Icon as={FaHtml5} h={24} w={24} textColor="orange.500"></Icon>
                    <Icon as={FaCss3Alt} h={24} w={24} textColor="#00A0E4"></Icon>
                    {/* <Icon as={FaCss3Alt} h={16} w={16} textColor="blue.300"></Icon> */}
                    <Icon as={SiJavascript} h={20} w={20} textColor="yellow.400"></Icon>
                    <Icon as={FaReact} h={20} w={20} textColor="cyan.400"></Icon>
                    <Icon as={FaGitAlt} h={20} w={20} textColor="orange.400"></Icon>
                    <Icon as={FaGithub} h={20} w={20} bgColor="blackAlpha.300" textColor="whiteAlpha.800" borderRadius="full"></Icon>
                    <Icon as={SiChakraui} h={20} w={20} textColor="#44C7C0"></Icon>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Skills
