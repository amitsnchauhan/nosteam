import React, { Component } from "react";
import Carousel from 'react-material-ui-carousel';
import CrousalItem from './CrousalItem';
import Example from './crousel/Example';

class Body extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
        <Example/>
    )
}
}
export default Body;