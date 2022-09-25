import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useAuth } from "../../customHooks/ProvideAuth.jsx";
import { IMAGES } from "../images";
import { useCookies } from "react-cookie";
export function NavigationBar() {
    const [, remove] = useCookies(["flight_central_user"]);
    let auth = useAuth()
    function Logout(){
        remove("turringTest", { path: "/", name: "yes" }, { path: "/" })
    }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <div className="col-12 d-flex justify-content-between">
        <img src={IMAGES.APPLOGO} alt="logo" width="400px" />
        {auth.turringTest?.access_token && <Button className="pl-4 pr-4" onClick={Logout}>Logout</Button>}
      </div>
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
}
