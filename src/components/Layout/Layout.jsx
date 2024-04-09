import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import {} from './Layout.css';
import Alcove from 'components/icons/Alcove';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <Alcove width={55} height={55} />
        </div>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/catalog" activeclassname="active">
          Catalog
        </NavLink>
        <NavLink to="/favorites" activeclassname="active">
          Favorite
        </NavLink>
      </nav>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
