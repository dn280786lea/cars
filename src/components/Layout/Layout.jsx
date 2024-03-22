import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import {} from './Layout.css';
import Alcove from 'components/icons/Alcove';

const Layout = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <Alcove width={60} height={60} />
        </div>
        <NavLink to="/" activeclassname="active" exact>
          Home
        </NavLink>
        <NavLink to="/catalog" activeclassname="active" exact>
          Catalog
        </NavLink>
        <NavLink to="/favorites" activeclassname="active" exact>
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
