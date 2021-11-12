import { RiDashboardLine, RiDatabase2Line } from 'react-icons/ri';

import { Stack } from '@chakra-ui/react';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine} text="Dashboard" />

        <NavLink href="/data" icon={RiDatabase2Line} text="Todos os Dados" />
      </NavSection>
    </Stack>
  );
}
