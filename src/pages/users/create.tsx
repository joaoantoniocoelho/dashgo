import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/sidebar";
import {Input} from "../../components/form/Input";
import {Header} from "../../components/header";
import Link from "next/link";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {api} from "../../services/api";
import {CreateUserFormData} from "../../types/types";
import {queryClient} from "../../services/queryClient";
import {useRouter} from "next/router";

const createUserSigninSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
});

export default function Create() {
    const router = useRouter();
    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('/users', {
            user: {
                ...user,
                createdAt: new Date()
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    })

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserSigninSchema)
    });
    const {errors} = formState;

    const handleCreateUser = async (values: any) => {
        await createUser.mutateAsync(values);

        router.push('/users');
    }

    return (
        <Box>
            <Header/>

            <Flex w={'100%'} my={'6'} maxWidth={1480} mx={'auto'} px={'6'}>
                <Sidebar/>

                <Box as={'form'} flex={'1'} borderRadius={'8'} bg={'gray.800'} p={['6', '8']} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size={'lg'} fontWeight={'normal'}>Criar usuário</Heading>

                    <Divider my={'6'} borderColor={'gray.700'}/>

                    <VStack spacing={'8'}>
                        <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
                            <Input label={'Nome completo'} {...register('name')} error={errors.name}/>
                            <Input label={'E-mail'} {...register('email')} error={errors.email}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w={'100%'}>
                            <Input type='password' label={'Senha'} {...register('password')} error={errors.password}/>
                            <Input type='password' label={'Confirmação da senha'} {...register('password_confirmation')} error={errors.password_confirmation}/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt={'8'} justify={'flex-end'}>
                        <HStack spacing={'4'}>
                            <Link href={'/users'} passHref>
                                <Button colorScheme={'whiteAlpha'}>Cancelar</Button>
                            </Link>
                            <Button type={'submit'} colorScheme={'pink'} isLoading={formState.isSubmitting}>Salvar</Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}