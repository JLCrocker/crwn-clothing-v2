import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component.jsx.jsx';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
