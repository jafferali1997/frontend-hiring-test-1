// A wrapper for <Route> that redirects to the login

import React from "react";
import { Navigate } from "react-router-dom";
import { PATH } from "../../config";
import { useAuth } from "../../customHooks/ProvideAuth.jsx";
import { NavigationBar } from "../../assets";
function PublicRoute({ children }) {
  let auth = useAuth();
  return (
    <React.Fragment>
      {auth.turringTest?.access_token ? (
         <Navigate to={PATH.CALL_LIST} replace />
      ) : (
        <>
          <NavigationBar />
          {children}
        </>
      )}
    </React.Fragment>
  );
}
export default PublicRoute;
