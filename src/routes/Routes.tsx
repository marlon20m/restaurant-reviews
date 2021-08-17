import React, { useEffect, Suspense, lazy, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const List = lazy(() => import('../views/List'));
const Detail = lazy(() => import('../views/List'));

export enum ROUTES {
  LIST = '/',
  DETAIL = '/detail',
}

const AppRoutes = () => {

  const renderRoutes = () => {
    let routes: JSX.Element;

    routes = (
      <Routes>
        <Route path={ROUTES.LIST} element={ } />
        <Route path={ROUTES.DETAIL} element={ } />
      </Routes>
    );

    return routes;
  };

  return renderRoutes();
};

export default AppRoutes;