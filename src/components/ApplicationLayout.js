import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from "aws-amplify";
import React, { Component } from "react";
import Main from "./Main";
import Amplify from "aws-amplify";
import awsExports from '../aws-exports';
import Box from '@mui/material/Box';

class ApplicationLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      list: [],
      item: {},
      showDetails: false
    };
  }

  async componentDidMount() {
    await this.fetchList();
  }
  handleChange = event => {
    const id = event.target.id;
    this.setState({ [id]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    await API.post("todosApi", "/items", {
      body: {
        id: Date.now().toString(),
        title: this.state.title,
        content: this.state.content
      }
    });

    this.setState({ content: "", title: "" });
    this.fetchList();
  };
  async fetchList() {
    const response = await API.get("todosApi", "/items");
    this.setState({ list: [...response] });
  }

  loadDetailsPage = async id => {
    const response = await API.get("todosApi", "/items/" + id);
    this.setState({ item: { ...response }, showDetails: true });
  };

  loadListPage = () => {
    this.setState({ showDetails: false });
  };

  delete = async id => {
    //TODO: Implement functionality
  };

  render() {
    return (
      <div>
      <Box
      sx={{
        mt:20,
        w: '100vh',
        h: '100vh',
        //backgroundColor: '#757575'
        /* backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        }, */
      }}
    >
      <Authenticator style={{bottom:500}}>
      {({ signOut, user }) => (
           <Main
           signOut = {signOut}
           user = {user}
           />
      )}
      </Authenticator>
      </Box>
      </div>
    );
  }
}

export default ApplicationLayout;