import React from "react";
import { Card } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/index.jsx";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/userActions.js";

export default function Login() {
  const [, setCookies] = useCookies(["turringTest"]);
  const dispatch = useDispatch();

  function setCookiesforUser(data) {
    setCookies("turringTest", data, { path: "/" });
  }
  function onSubmit(data) {
     dispatch(login(data, setCookiesforUser));
  }
  return (
    <div className="h-100 background-Color">
      <Card className="login-form-css">
        <Card.Body>
          <LoginForm onLoginFormSubmit={onSubmit} />
        </Card.Body>
      </Card>
    </div>
  );
}
