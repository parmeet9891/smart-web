import React from 'react';
import Header from './Screens/Header/header.jsx';
import CategoriesHeader from './Screens/Header/categories.jsx';
import Carousel from './Screens/Carousel/Carousel.jsx';
import Products from './Screens/Component/Product.jsx';
import Footer from './Screens/Footer/Footer.jsx';
import Result from './Screens/Component/Mobile/Results.jsx';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <Router>
          <div className = "container-fluid" style = {{backgroundColor: '#EBF0F2'}}>
            <Header/>

            <Footer/>
          </div>
        </Router>
      )
    }
}
export default App;
