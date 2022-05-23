import '@aws-amplify/ui-react/styles.css';
import Grid from '@mui/material/Grid';
import React, { Component } from "react";
import BarChartDisplay from './dashboard/BarChartDisplay';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';
import Footer from './Footer';


class HomeContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" >
        <main style={{postion:'fixed', hight:'100%'}}>
       {/*  <Header signOut={this.props.signOut} user={this.props.user}/> */}
       
          <Body/>
        </main>
      </div>
    );
  }
}

export default HomeContent;