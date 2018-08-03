import React from 'react';
import { Navbar, Nav, FormGroup, FormControl, NavItem, NavDropdown, MenuItem, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Result from './../Component/Mobile/Results.jsx';
import ResultsLaptop from './../Component/Laptops/ResultsLaptop.jsx';
import ResultsTV from './../Component/TV/ResultsTV.jsx';
import ResultsCamera from './../Component/Camera/ResultsCamera.jsx';
import Carousel from './../Carousel/Carousel.jsx';
import Products from './../Component/Product.jsx';

class header extends React.Component {
  render() {
    return (

    <Router>
    <div>
      <nav className="navbar navbar-default" style = {{backgroundColor : '#2F7AB3', marginBottom:0}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/"><a className="navbar-brand" href="#"><span style = {{color:'white', marginLeft:50, fontWeight: 'bold'}}>  Home  </span></a></Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span style = {{color: 'white', fontWeight: 'bold', marginLeft: 30}}> Categories </span> <span style = {{color: 'white'}} className="caret"></span></a>
                <ul className="dropdown-menu" style = {{width: 450}}>

                  <div className = "row">
                    <div className = "col-md-4 col-xs-12">
                      <h4 className = "text-center">Brands</h4>
                      <hr/>

                      <div className = "col-md-12 col-xs-12">
                        <li><Link to = "/mobile/samsung">Samsung</Link></li><br/>
                        <li><Link to = "/mobile/xiaomi">Xiaomi</Link></li><br/>
                        <li><Link to = "/mobile/moto">Motorola</Link></li><br/>
                      </div>

                    </div>

                    <div className = "col-md-4 col-xs-12">
                      <h4 className = "text-center">Categories</h4>
                      <hr/>

                      <div className = "col-md-12 col-xs-12">
                        <li><Link to = "/mobile/all">All Mobiles</Link></li><br/>
                        <li><Link to = "/mobile/4G">4G Mobiles</Link></li><br/>
                        <li><Link to = "/mobile/3G">3G Mobiles</Link></li><br/>
                        <li><Link to = "/laptops/all">Laptops</Link></li><br/>
                        <li><Link to = "/cameras/all">Cameras</Link></li><br/>
                      </div>

                    </div>

                    <div className = "col-md-4 col-xs-12">
                      <h4 className = "text-center">Price</h4>
                      <hr/>

                      <div className = "col-md-12 col-xs-12">
                        <li><Link to = "/mobile/less-than-5000"> Less than ₹5000 </Link></li><br/>
                        <li><Link to = "/mobile/price-5000_to_10000">₹5000-₹10000</Link></li><br/>
                        <li><Link to = "/mobile/price-10000_to_20000">₹10000-₹20000</Link></li><br/>
                        <li><Link to = "/mobile/price-20000"> Above ₹20000</Link></li><br/>
                      </div>

                    </div>

                  </div>
                </ul>
              </li>

              <li><Link to = "/TV/all"> <span style = {{color: 'white', fontWeight: 'bold', marginLeft: 30}}> Smart TV </span> </Link></li>
              <li><a href = "#"> <span style = {{color: 'white', fontWeight: 'bold', marginLeft: 30}}> Blog </span> </a></li>

            </ul>
          </div>
        </div>
      </nav>
        <Route path="/" exact = {true} component={Carousel}/>
        <Route path = "/" exact = {true} component = {Products}/>

        <Route path="/mobile/:id" exact = {true} component={Result}/>
        <Route path="/laptops/:id" exact = {true} component = {ResultsLaptop}/>
        <Route path="/TV/:id" exact = {true} component = {ResultsTV}/>
        <Route path = "/cameras/:id" exact = {true} component = {ResultsCamera}/>
      </div>
    </Router>
     )
  }
}
export default header;
