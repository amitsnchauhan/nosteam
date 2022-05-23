import '@aws-amplify/ui-react/styles.css';
import Amplify from "aws-amplify";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import awsExports from './aws-exports';
import ApplicationLayout from './components/ApplicationLayout';
import ContactUs from './components/ContactUs';
import HomeContent from './components/HomeContent';
import Header from './components/Header';
import Footer from './components/Footer';

Amplify.configure(awsExports);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    
      <Router>
       <Header/>
         <Routes>
         <Route exact path="/" element={<HomeContent/>}/>
         <Route exact path="/contactus" element={<ContactUs/>}/>
         <Route exact path="/signUp" element={<ApplicationLayout/>}/>
        {/*<Route exact path="/" element={<ApplicationLayout/>}/>
         <Route exact path="/" element={<Proto16/>}/>
         <Route exact path="/signUp" element={<Proto28/>}/>*/}

       {/*   <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> 
          <Route path="*" element={<NotFound/>}/>*/}

        {/* <Route exact path="/home" component={Main} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/blog" component={BlogContainer} /> */}
       </Routes>
       <Footer/>
  </Router>
    );
  }
}

export default App;