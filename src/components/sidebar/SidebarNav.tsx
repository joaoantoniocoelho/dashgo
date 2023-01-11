import {Stack} from "@chakra-ui/react";
import {NavSection} from "./NavSection";
import {NavLink} from "./NavLink";
import {RiContactsLine, RiDashboardLine, RiInputMethodLine} from "react-icons/ri";
import React from "react";

export function SidebarNav() {
    return (
        <Stack spacing={'12'} align={'flex-start'}>
            <NavSection title={'Geral'}>
                <NavLink icon={RiDashboardLine} href={'/dashboard'}>Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href={'/users'}>Usuários</NavLink>
            </NavSection>

            <NavSection title={'Automação'}>
                <NavLink icon={RiInputMethodLine} href={'/forms'}>Formulários</NavLink>
                <NavLink icon={RiContactsLine} href={'/automation'}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}