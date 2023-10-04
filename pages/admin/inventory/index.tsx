import { useDisclosure } from '@chakra-ui/react';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';

const Inventory = () => {
  const NavItems = {
    firstItems: [
      {
        name: 'dashboard',
        label: 'Dashboard',
        icon: '',
        url: '/dashboard',
      },
    ],
    secondItems: [
      {
        name: 'logout',
        label: 'Logout',
        color: 'red',
        icon: '',
        url: '/logout',
      },
    ],
  };
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Sidenav isOpen={isOpen} />
    </div>
  );
};

export default Inventory;
