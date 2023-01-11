import {Avatar, Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

export function Profile() {
    return (
        <Flex align={'center'}>
            <Box mr={'4'} textAlign={'right'}>
                <Text>João Coelho</Text>
                <Text color={'gray.300'} fontSize={'small'}>joao@email.com</Text>
            </Box>

            <Avatar size={'md'} name={'João Coelho'} src={'https://github.com/joaoantoniocoelho.png'}/>
        </Flex>
    )
}