import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import {} from './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/catalog" activeClassName="active" exact>
          Catalog
        </NavLink>
        <NavLink to="/favorites" activeClassName="active" exact>
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
