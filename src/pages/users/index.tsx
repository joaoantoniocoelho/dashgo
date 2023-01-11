import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import React from "react";
import Sidebar from "../../components/sidebar";
import {RiPencilLine, RiAddLine} from "react-icons/ri";
import {Pagination} from "../../components/Pagination";

export default function UserList() {
    return (
        <Box>
            <Header/>

            <Flex w={'100%'} my={'6'} maxWidth={1480} mx={'auto'} px={'6'}>
                <Sidebar/>

                <Box flex={'1'} borderRadius={'8'} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>Usuários</Heading>

                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" cursor="pointer" leftIcon={<Icon as={RiAddLine} /> }>Criar novo</Button>
                    </Flex>

                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px={'6'} color={'gray.300'} width={'8'}>
                                    <Checkbox colorScheme={'pink'}/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={'6'}>
                                    <Checkbox colorScheme={'pink'}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>Frank Foe</Text>
                                        <Text fontSize={'sm'} color={'gray.300'}>frank_foe@email.com</Text>
                                    </Box>
                                </Td>
                                <Td>10 de Janeiro, 2023</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        cursor="pointer"
                                        leftIcon={<Icon as={RiPencilLine} fontSize={'16'}/>}
                                    >
                                        Editar
                                    </Button>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={'6'}>
                                    <Checkbox colorScheme={'pink'}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>John Doe</Text>
                                        <Text fontSize={'sm'} color={'gray.300'}>john_doe@email.com</Text>
                                    </Box>
                                </Td>
                                <Td>05 de Janeiro, 2023</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        cursor="pointer"
                                        leftIcon={<Icon as={RiPencilLine} fontSize={'16'}/>}
                                    >
                                        Editar
                                    </Button>

                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={'6'}>
                                    <Checkbox colorScheme={'pink'}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={'bold'}>Jane Doe</Text>
                                        <Text fontSize={'sm'} color={'gray.300'}>jane_doe@email.com</Text>
                                    </Box>
                                </Td>
                                <Td>10 de Janeiro, 2023</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        cursor="pointer"
                                        leftIcon={<Icon as={RiPencilLine} fontSize={'16'}/>}
                                    >
                                        Editar
                                    </Button>

                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}