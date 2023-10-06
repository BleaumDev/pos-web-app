import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import Products from 'pages/products';

const Inventory = () => {
  return (
    <div>
      <Sidenav>
        <Products />
      </Sidenav>
    </div>
  );
};

export default Inventory;
