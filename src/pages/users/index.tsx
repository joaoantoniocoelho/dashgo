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

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

interface UserResponse {
    users: User[]
}

export default function UserList() {
    const {data, isLoading, isFetching, error} = useQuery<UserResponse>('users', async () => {
        const response = await fetch('http://localhost:3000/mirage/users')

        return await response.json()
    }, {
        staleTime: 1000 * 5
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
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Usuários

                            {!isLoading && isFetching && <Spinner size={'sm'} color={'gray.500'} ml={'4'}/>}
                        </Heading>

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

                                        {data?.users?.map(user => (
                                            <Tr key={user.id}>
                                                <Td px={['4', '4', '6']}>
                                                    <Checkbox colorScheme={'pink'}/>
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight={'bold'}>{user.name}</Text>
                                                        <Text fontSize={'sm'} color={'gray.300'}>{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion &&
                                                    <Td>
                                                        {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                                                            day: '2-digit',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                    </Td>}
                                            </Tr>
                                        ))}
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