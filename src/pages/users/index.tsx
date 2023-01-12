import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/sidebar";
import {RiAddLine} from "react-icons/ri";
import {Header} from "../../components/header";
import {Pagination} from "../../components/pagination";
import Link from "next/link";
import {useQuery} from "react-query";

export default function UserList() {
    const {data, isLoading, error} = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/mirage/users')

        return await response.json()
    });

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header/>

            <Flex w={'100%'} my={'6'} maxWidth={1480} mx={'auto'} px={'6'}>
                <Sidebar/>

                <Box flex={'1'} borderRadius={'8'} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>Usuários</Heading>

                        <Link href={'/users/create'} passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                cursor='pointer'
                                leftIcon={<Icon as={RiAddLine}/>}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex justify={'center'}>
                                <Spinner/>
                            </Flex>
                        ) : error ? (
                            <Flex justify={'center'}>
                                <Text>Falha ao obter dados dos usuários.</Text>
                            </Flex>
                        ) : (
                            <>
                                <Table colorScheme={'whiteAlpha'}>
                                    <Thead>
                                        <Tr>
                                            <Th px={['4', '4', '6']} color={'gray.300'} width={'8'}>
                                                <Checkbox colorScheme={'pink'}/>
                                            </Th>
                                            <Th>Usuário</Th>
                                            {isWideVersion && <Th>Data de cadastro</Th>}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme={'pink'}/>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight={'bold'}>Frank Foe</Text>
                                                    <Text fontSize={'sm'} color={'gray.300'}>frank_foe@email.com</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td>04 de Abril, 2021</Td>}
                                        </Tr>
                                        <Tr>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme={'pink'}/>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight={'bold'}>John Doe</Text>
                                                    <Text fontSize={'sm'} color={'gray.300'}>john_doe@email.com</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td>04 de Abril, 2021</Td>}
                                        </Tr>
                                        <Tr>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme={'pink'}/>
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight={'bold'}>Jane Doe</Text>
                                                    <Text fontSize={'sm'} color={'gray.300'}>jane_doe@email.com</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td>04 de Abril, 2021</Td>}
                                        </Tr>
                                    </Tbody>
                                </Table>

                                <Pagination/>
                            </>
                        )
                    }
                </Box>
            </Flex>
        </Box>
    )
}