import '@aws-amplify/ui-react/styles.css';
import { Component } from "react";
import Footer from './Footer';
import Header from './Header';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div className="container">
            <main>
                <Header/>
                
                {/* <Footer/> */}
            </main>
        </div>
    );
  }
}

export default HomePage;