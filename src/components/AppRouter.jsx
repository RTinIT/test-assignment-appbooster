import React from "react";
import { Routes, Route } from "react-router-dom";
import Converter from "../pages/Converter";
import { routes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const RouteComponent = route.element;
        return (
          <Route
            path={route.path}
            element={<RouteComponent />}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Route
        path="*"
        element={
          <Converter to="/test-assignment-appbooster/converter" replace />
        }
      />
    </Routes>
  );
};

export default AppRouter;
