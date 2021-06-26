import React, { Fragment, useState } from "react";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import TabPanel from "../tabPanel/TabPanel";
import "./Header.css";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [value, setValue] = useState(0);

  const loginHandler = () => {
    setLoginOpen(true);
  };

  const closeLoginHandler = () => {
    setLoginOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="button-group">
          <Button variant="contained" name="Login" onClick={loginHandler}>
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

      <Modal
        isOpen={loginOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "500px",
            right: "500px",
            bottom: "40px",
            width: "300px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TextField label="Username" required style={{ margin: "5px 0px" }} />
          <TextField
            label="Password"
            required
            type="password"
            style={{ margin: "5px 0px" }}
          />
          <Button
            variant="contained"
            onClick={closeLoginHandler}
            color="primary"
            style={{ margin: "20px 20px" }}
          >
            Login
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField
            label="First Name"
            required
            style={{ margin: "5px 0px" }}
          />
          <TextField label="Last Name" style={{ margin: "5px 0px" }} />
          <TextField label="Email" required style={{ margin: "5px 0px" }} />
          <TextField
            label="Password"
            required
            type="password"
            style={{ margin: "5px 0px" }}
          />
          <TextField
            label="Contact No"
            required
            style={{ margin: "5px 0px" }}
          />
          <Button
            variant="contained"
            onClick={closeLoginHandler}
            color="primary"
            style={{ margin: "20px 20px" }}
          >
            Register
          </Button>
        </TabPanel>
      </Modal>
    </Fragment>
  );
};

export default Header;
