import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { routes, privateRoutes } from "./routes";
import RequireAuth from "../components/auth/RequireAuth";
import Page404 from "../pages/404";

const Routings: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map(routeProps => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <RequireAuth redirectTo={`/login?redirectTo=${privateRouteProps.path}`}>
                {element}
              </RequireAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
