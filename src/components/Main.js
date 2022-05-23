import '@aws-amplify/ui-react/styles.css';
import { API } from "aws-amplify";
import React, { Component } from "react";
import Details from "./Details";
import List from "./List";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header1 from './Header1';
import AreaChartDisplay from './dashboard/AreaChartDisplay';
import BarChartDisplay from './dashboard/BarChartDisplay';
import PieChartDisplay from './dashboard/PieChartDisplay';
import RadialChartDisplay from './dashboard/RadialChartDisplay';
import Grid from '@mui/material/Grid';


class Main extends Component {
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
      <div className="container">
        <main>
        <Header1 signOut={this.props.signOut} user={this.props.user}/>
        <Grid container spacing={4}>
        <Grid item md={6} sm={12} xs={12}>
        <AreaChartDisplay/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <BarChartDisplay/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <PieChartDisplay/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
        <RadialChartDisplay/>
        </Grid>
        </Grid>
        </main>
       
        
       {/*  <form onSubmit={this.handleSubmit}>
          <legend>Add</legend>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              placeholder="Content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <hr />
        {this.state.showDetails ? (
          <Details
            item={this.state.item}
            loadListPage={this.loadListPage}
            delete={this.delete}
          />
        ) : (
          <List list={this.state.list} loadDetailsPage={this.loadDetailsPage} />
        )} */}
      </div>
     
    );
  }
}

export default Main;