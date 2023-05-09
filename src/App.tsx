import "./App.scss";
import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import MyNav from "./elements/Nav";
import { Sidenav, initTE } from "tw-elements";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
    hasNav: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    hasNav: true,
  },
  {
    path: "*",
    element: <ErrorPage />,
    hasNav: false,
  },
];

const App = () => {
  useEffect(() => {
    initTE({ Sidenav });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.hasNav) {
            return (
              <React.Fragment key={route.path}>
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <>
                      <MyNav>{route.element}</MyNav>
                    </>
                  }
                />
              </React.Fragment>
            );
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
