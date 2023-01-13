import React from "react";
import {Button, Flex, Stack} from "@chakra-ui/react";
import {Input} from "../components/form/Input";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/router";
import {Logo} from "../components/header/Logo";

const signInFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória')
})

export default function Home() {
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(signInFormSchema)
    });
    const router = useRouter();

    const {errors} = formState;
    async function handleSignIn(values: any) {
        // await promisse, resolve after 2 seconds and navigate to dashboard
        await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            router.push('/dashboard');
        })
    }

    return (
        <>
            <Flex
                w={'100vw'}
                h={'100vh'}
                align={'center'}
                justify={'center'}
            >
                <Logo />
                <Flex
                    as={'form'}
                    w={'100%'}
                    maxW={360}
                    bg={'gray.800'}
                    p={8}
                    borderRadius={8}
                    flexDir={'column'}
                    onSubmit={handleSubmit(handleSignIn)}
                >
                    <Stack spacing={4}>
                        <Input
                            type={'email'}
                            label={'E-mail'}
                            error={errors.email}
                            {...register('email')}
                        />
                        <Input
                            type={'password'}
                            label={'Senha'}
                            error={errors.password}
                            {...register('password')}
                        />

                    </Stack>

                    <Button type={'submit'} mt={6} colorScheme={'pink'} size={'lg'}
                            isLoading={formState.isSubmitting}>Entrar</Button>
                </Flex>
            </Flex>
        </>
    )
}
