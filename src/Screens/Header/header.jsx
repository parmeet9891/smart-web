import React from 'react';
import { Navbar, Nav, FormGroup, FormControl, NavItem, NavDropdown, MenuItem, InputGroup, Button } from 'react-bootstrap';
import CategoriesHeader from './categories.jsx';
import Results from './../Component/Mobile/Results.jsx';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'samsung', label: 'Samsung', tag: 'mobile' },
  { value: 'xiaomi', label: 'Xiaomi', tag: 'mobile' },
  { value: 'moto', label: 'Motorola', tag: 'mobile' },
]

class header extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedOption: null,
        category: null,
        tag : null
      }
    }

    handleChange(selectedOption) {
      this.setState({selectedOption});
      this.updateCategory(selectedOption);

  }

  updateCategory(sel) {
    let {category} = this.state;
    this.setState({category: sel.value, tag: sel.tag});
  }

  render() {

    let {selectedOption, category, tag} = this.state;
    return (
      <Router>
      <div className = "row">
        <Navbar style = {{marginBottom: 0}}>
          <Navbar.Header>
          <Navbar.Brand>
            <img src = "./../../../Images/logo.png" className="img-responsive" style = {{height: 60, width: 150}} />
          </Navbar.Brand>
          </Navbar.Header>

          <form className = "navbar-form navbar-right">
            <div className="input-group" style = {{width: 500}}>
              <Select
                value = {selectedOption}
                onChange = {this.handleChange.bind(this)}
                options = {options}
                placeholder = "Search Here"
              />
              <div className="input-group-btn">
                <Link to={`/${tag}/${category}`}><button className="btn btn-default" style = {{height:37}}>Search</button></Link>
              </div>
            </div>
          </form>
        </Navbar>
        <Route path="/" exact = {true} component = {CategoriesHeader}/><br/>
        <Route path = "/mobile/:id" exact = {true} component = {Results}/>
      </div>
      </Router>
    )
  }
}
export default header;
