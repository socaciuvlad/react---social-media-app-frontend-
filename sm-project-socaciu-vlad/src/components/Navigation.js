import { Link, useLocation } from "react-router-dom";
import logo from "../logo.svg";
import classes from "./Navigation.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import StoreIcon from "@mui/icons-material/Store";

import styled from "styled-components";

import { Button } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navigation = () => {
  const location = useLocation();
  if (location.pathname === "/auth") {
    return <></>;
  }

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>
          <FacebookIcon color="primary" fontSize="large"></FacebookIcon>
          <input type="search" id="search" name="search" placeholder="Search" />
        </div>

        <div className={classes.navIcons}>
          <HomeIcon
            color="primary"
            fontSize="large"
            className={classes.myCustomButton}
          ></HomeIcon>
          <GroupIcon
            color="primary"
            fontSize="large"
            className={classes.myCustomButton}
          ></GroupIcon>
          <DesktopMacIcon
            color="primary"
            fontSize="large"
            className={classes.myCustomButton}
          ></DesktopMacIcon>
          <StoreIcon
            color="primary"
            fontSize="large"
            className={classes.myCustomButton}
          ></StoreIcon>
        </div>

        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Button variant="contained">
                <Link to="/" style={linkStyle}>
                  Profile
                </Link>
              </Button>
            </li>

            <li className={classes.menuItem}>
              <Button variant="contained">
                <Link to="/friends" style={linkStyle}>
                  Friends
                </Link>
              </Button>
            </li>

            <li className={classes.menuItem}>
              <Button variant="contained">
                <Link to="/chat" style={linkStyle}>
                  Chat
                </Link>
              </Button>
            </li>

            <li className={classes.menuItem}>
              <Button variant="contained">
                <Link to="/auth" style={linkStyle}>
                  Login
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
