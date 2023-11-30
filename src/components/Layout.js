import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';

export const Layout = () => {
  return (<>
        <Header/>
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Footer/>
      </>
  );
};