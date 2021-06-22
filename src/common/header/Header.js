import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
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
