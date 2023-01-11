import {Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {RiDashboardLine, RiContactsLine, RiInputMethodLine} from "react-icons/ri";
import React from "react";
import {NavSection} from "./NavSection";
import {NavLink} from "./NavLink";

export default function Sidebar() {
    return (
        <Box as={'aside'} w={'64'} mr={'8'}>
            <Stack spacing={'12'} align={'flex-start'}>
                <NavSection title={'Geral'}>
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuários</NavLink>
                </NavSection>

                <NavSection title={'Automação'}>
                    <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink icon={RiContactsLine}>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}