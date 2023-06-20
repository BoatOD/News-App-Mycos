import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Navbar from './components/Navbar';
import { tabs } from './utils';

function App() {
  return (
    <AppShell
      padding="xs"
      header={<Navbar tabs={tabs} />}
    >
      <Outlet />
    </AppShell>
  )
}

export default App
