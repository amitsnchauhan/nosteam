import { withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bg: {
    backgroundColor: "grey"
  },
  copyright: {
    flexGrow: 1,
    textAlign: "center",
    color: "white"
  }
});

function Copyright(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.copyright} variant="body2">
      {'Copyright © '}
        NoSteam
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;