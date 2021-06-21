import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <div className="button-group">
        <Button variant="contained" name="Login">
          Login
        </Button>
        <Button variant="contained" name="Book Show" color="primary">
          Book Show
        </Button>
        <Button variant="contained" name="Logout">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
