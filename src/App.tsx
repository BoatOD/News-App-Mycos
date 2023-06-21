import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Navbar from './components/Navbar';
import { tabs } from './utils/navbarUtils';
import { footerLinks } from './utils/footerUtils';
import Footer from './components/Footer';

function App() {
  return (
    <AppShell
      styles={{
        main: {
          padding: 0
        },
      }}
      header={<Navbar tabs={tabs} />}
      footer={<Footer data={footerLinks} />}
    >
      <Outlet />
    </AppShell>
  )
}

export default App
