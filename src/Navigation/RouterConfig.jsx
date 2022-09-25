import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import NoPage from "../components/NoPageFound";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Login from "../Layout/Login";
import CallList from "../Layout/CallList";
import { useAuth } from "../customHooks/ProvideAuth";
import { RefreshToken } from "../redux/actions";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

export function RouterConfig () {
  const [, setCookies] = useCookies(["turringTest"]);
  const dispatch = useDispatch();

  function setCookiesforUser(data) {
    setCookies("turringTest", data, { path: "/" });
  }
  const auth = useAuth()
  useEffect(()=>{
    if(auth.turringTest.access_token){
      setInterval(()=>dispatch(RefreshToken({refresh_token:auth.turringTest.refresh_token}, setCookiesforUser, auth)), 45000 )
    }
    return ()=>{clearInterval()}
  },[])
  return (
    <div>
      <Routes>
        <Route
          path={PATH.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path={PATH.CALL_LIST}
          element={
            <PrivateRoute>
              <CallList />
            </PrivateRoute>
          }
        ></Route>
        <Route path={PATH.NOPAGE} element={<NoPage />}></Route>
      </Routes>
    </div>
  );
};
