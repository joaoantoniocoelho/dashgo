import {Icon, Link as ChakraLink, LinkProps, Text} from "@chakra-ui/react";
import {RiContactsLine} from "react-icons/ri";
import React, {ElementType} from "react";
import Link from "next/link";

interface NavLinkProps extends LinkProps{
    icon: ElementType;
    children: string;
    href: string;
}
export function NavLink({icon, children, href, ...rest}: NavLinkProps) {
    return(
        <Link href={href} passHref>
            <ChakraLink display={'flex'} {...rest}>
                <Icon as={icon} fontSize={'20'} />
                <Text ml={'4'} fontWeight={'medium'}>{children}</Text>
            </ChakraLink>
        </Link>
    )
}