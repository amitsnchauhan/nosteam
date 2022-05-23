import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@mui/material/Button';
import Typography from "@material-ui/core/Typography";
import ApplicationLayout from '../ApplicationLayout';
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: "100%",
    backgroundColor: 'transparent',
    color: 'white',
    border: 0
  },
  media: {
    height: 140
  },
  content: {
    height: 300,
  }
};

let signup = () => {
  alert("dsf")
  return (
    <ApplicationLayout/>
  )
  }

function MediaCard(props) {
  const { classes, image, link, headline, description, isMoving } = props;

  return (
    <a onClick={(e) => {
        if(isMoving) {
          e.preventDefault();
        }
      }} href='#' target="_blank"> 
      {/* href='https://w3js.com' target="_blank" */}
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={headline} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      {link==='six' &&
      <CardActions style={{color: 'white', display: 'flex', justifyContent: 'center'}}>
         <Button
              //onClick={signup}
              type="submit"
              variant="contained"
              sx={{bgcolor: 'transparent', border: '1px solid white'}}
            >
              <Link to="/signUp">Sign Up</Link>
          </Button>
      </CardActions>
      }
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  </a>
  );
}
export default withStyles(styles)(MediaCard);