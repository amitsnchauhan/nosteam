import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import MobileDetect from "mobile-detect";
import Box from '@mui/material/Box';
import Card from "./card";
import Image from "./image";
import Carousel from "react-multi-carousel";
import CarouselWithCustomDots from "./carousel-with-custom-dots";
import "../../style/style.css";
import "react-multi-carousel/lib/styles.css";
import { Parallax, Background } from "react-parallax";

class Example extends Component {
  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }

  state = { isMoving: false };

  render() {
    const bgImage =
"../../images/nosteam.svg";
const group1 =
"../../images/Group1.svg";
const group2 =
"../../images/Group2.svg";
const group3 =
"../../images/Group3.svg";


    const { classes } = this.props;
    const texts = [
      "Data is a $",
      "Understaing data is $$",
      "The more you understand it, the more $$$",
      "So why not save $$$$",
      "Our lack of understanding and controlling the energy output and CO2 emmission of building we live in and work in are not only effecting our environment but also our buttomline."
    ];
    
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
    return (
     
         <Parallax bgImage={bgImage} strength={500}>
     
     <div className={classes.root}>
        <CarouselWithCustomDots deviceType={this.props.deviceType} />
        <section style={{marginBottom: '100px'}}>
        <Box className={classes.containerBox}>
        <Box className={classes.childBox0}>
        <Typography className={classes.typo} variant="h6">
          Moniter
          <img src={group1} alt="NoSteam" className={classes.image} />
        </Typography>
        </Box>
        <Box className={classes.childBox0}>
        <Typography className={classes.typo} variant="h6">
          Control
          <img src={group2} alt="NoSteam" className={classes.image} />
        </Typography>
        </Box>
        <Box className={classes.childBox0}>
        <Typography className={classes.typo} variant="h6">
          Optimize
          <img src={group3} alt="NoSteam" className={classes.image} />
        </Typography>
        </Box>
      </Box>
        </section>
 
        {/* <Typography className={classes.title} variant="h6">
          <a target="_blank" href="https://w3js.com/">
            A Carousel supports multiple items and server-side rendering
          </a>
        </Typography>

        <Typography className={classes.title} variant="p">
          <a target="_blank" href="https://w3js.com/">
            This is the server-side rendering demo of the libiary, try to
            disable the JavaScript in your browser, you will still see our
            Carousel renders nicely
          </a>
        </Typography> */}
        </div>
        </Parallax>
      
    );
  }
}

const styles = () => ({
  root: {
    textAlign: "center",
    marginTop: 0
  },
  title: {
    color: 'white',
    maxWidth: 400,
    margin: "auto",
    marginTop: 10
  },
  containerBox:{
    //backgroundColor: "lightblue",
    borderRadius: "5px",
    marginBottom: "30px",
    height: "200px",
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    color: "white"
  },
  childBox0: {
    //backgroundColor: "green",
    color: "white",
    padding: "8px",
    borderRadius: "5px",
    width: "150px"
  },
  typo: {
    marginTop: "50px",
  },
  image:{
    height: "100px",
  }
});

export default withStyles(styles)(Example);