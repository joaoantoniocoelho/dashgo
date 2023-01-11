import {Icon, Link, LinkProps, Text} from "@chakra-ui/react";
import {RiContactsLine} from "react-icons/ri";
import React, {ElementType} from "react";

interface NavLinkProps extends LinkProps{
    icon: ElementType;
    children: string;
}
export function NavLink({icon, children, ...rest}: NavLinkProps) {
    return(
        <Link display={'flex'} {...rest}>
            <Icon as={icon} fontSize={'20'} />
            <Text ml={'4'} fontWeight={'medium'}>{children}</Text>
        </Link>
    )
}