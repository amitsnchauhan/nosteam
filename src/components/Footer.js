import React from "react";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import urbslogo from "../images/urbslogo.svg";

import { AppBar, Typography, Toolbar, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles => ({
  footer: {
    top: "auto",
    bottom: 0,
    flexShrink: 0,
    elevation: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL+ "/images/nosteam.svg"})`
  },
  typo: {
    color: "white",
  },
  urbslogo: {
    height: 70,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="transparent" elevation={0} className={classes.footer}>
      <Toolbar>
        <Typography className={classes.typo} variant="button">
        <Link to="/contactus">Contact Us</Link>
        </Typography>
        <Copyright/>
        <img src={urbslogo} className={classes.urbslogo}/>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
