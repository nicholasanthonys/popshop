import './App.scss';
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/DashboardPage';
import MyNav from './elements/Nav';

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    hasNav: false,
  },
  {
    path: "/login",
    element: <LoginPage />,
    hasNav: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    hasNav: true

  },
  {
    path: "*",
    element: <ErrorPage />,
    hasNav: false,
  }
]



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.hasNav) {
            return (
              <React.Fragment key={route.path}>

                <Route key={route.path} path={route.path} element={<>
                  <MyNav />
                  {route.element}
                </>} />
              </React.Fragment>
            );
          } else {
            return (
              <Route key={route.path} path={route.path} element={route.element} />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
