import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import React, {forwardRef, ForwardRefRenderFunction} from "react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}
interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                focusBorderColor="pink.500"
                ref={ref}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);