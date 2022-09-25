// A wrapper for <Route> that redirects to the login

import React from "react";
import { Navigate } from "react-router-dom";
import { NavigationBar } from "../../assets";
import { PATH } from "../../config";
import { useAuth } from "../../customHooks/ProvideAuth.jsx";
// screen if you're not yet authenticated.
function PrivateRoute({ children }) {
  let auth = useAuth();
  return (
    <React.Fragment>
      {auth.turringTest?.access_token ? (
        <>
          <NavigationBar/>
          { children }
        </>
      ) : (
        <Navigate to={PATH.LOGIN} replace />
      )}
    </React.Fragment>
  );
}
export default PrivateRoute;
