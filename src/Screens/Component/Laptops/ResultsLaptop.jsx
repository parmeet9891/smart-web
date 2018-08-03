import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class ResultsLaptop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    laptopArray : [
      {
        "name" : "Dell Portable",
        "imageurl" : "./../../../Images/Laptop-Images/dell.jpg",
        "detail" : "2GB RAM , 13.5 inches Display, 1 TB Hard Disk and a Graphic Card",
        "ratings" : "8.2",
        "OS" : "Ubuntu 16.0.4",
        "warranty" : 3,
        "price" : 35000,
        "tag" : "dell"
      },

      {
        "name" : "HP A1014",
        "imageurl" : "./../../../Images/Laptop-Images/HP.jpg",
        "detail" : "4GB RAM, 13.0 inches Display, 2 TB Hard Disk and Nvidia Graphic Card",
        "ratings" : "9.0",
        "OS" : "Windows 10",
        "warranty" : 3,
        "price" : 45000,
        "tag": "HP"
      },

      {
        "name" : "HP-1 A2014",
        "imageurl" : "./../../../Images/Laptop-Images/hp-1.jpg",
        "detail" : "4GB RAM, 15.2 inches Display, 512 GB Internal Hard Disk",
        "ratings" : "6.8",
        "OS" : "Windows 8",
        "warranty" : 2,
        "price" : 28000,
        "tag": "HP"
      },
      {
        "name" : "Lenovo Book",
        "imageurl" : "./../../../Images/Laptop-Images/lenovo.jpg",
        "detail" : "3GB RAM, 15.2 inches Display, 1 TB Internal Hard Disk",
        "ratings" : "8",
        "OS" : "DOS",
        "warranty" : 2,
        "price" : 32000,
        "tag": "lenovo"
      },
      {
        "name" : "Micromax Vento",
        "imageurl" : "./../../../Images/Laptop-Images/micromax.jpg",
        "detail" : "2GB RAM, 12.2 inches Display, 512 GB Internal Hard Disk",
        "ratings" : "6.9",
        "OS" : "Windows 8",
        "warranty" : 2,
        "price" : 30000,
        "tag": "micromax"
      }
    ],
      select : null,
      filterArray: [],
      priceCategory : null,
    }
  }

  componentDidMount() {
    let selectedCategory = this.props.match.params.id;
  }

  onCategoryChange(e) {
    let {select} = this.state;
    this.setState({select: e.currentTarget.value});
  }

  onPriceChange(e) {
    let {priceCategory} = this.state;
    this.setState({priceCategory: e.currentTarget.value});
  }

  render() {
    let {select, filterArray, priceCategory} = this.state;
    let props = this.props;
    console.log(parseInt(priceCategory)+10000);
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-md-12">
            <h3>Results for : <b>{props.match.params.id}</b> Laptops</h3>
          </div>
        </div>
        <div className = "row">
          <div className = "col-md-3" style = {{backgroundColor: '#2F7AB3'}}>
            <h5 className = "text-left" style = {{color: 'white'}}>Filter Results</h5>
            <hr/>
            <h4 className = "text-left" style = {{color: 'white'}}>Price</h4>
            <label>
              <input type = "radio" name="price" value = "25000" onChange = {this.onPriceChange.bind(this)}/>25000-30000
            </label><br/>
            <label>
              <input type = "radio" name="price" value = "30000" onChange = {this.onPriceChange.bind(this)}/>30000-40000
            </label><br/>
            <label>
              <input type = "radio" name="price" value = "40000" onChange = {this.onPriceChange.bind(this)}/>40000-50000
            </label><br/>
            <hr/>

            <h4 className = "text-left" style = {{color: 'white'}}>Brands</h4>
            <label>
              <input type = "radio" name="brand" value = "dell" onChange = {this.onCategoryChange.bind(this)}/>Dell
            </label><br/>
            <label>
              <input type = "radio" name="brand" value = "HP" onChange = {this.onCategoryChange.bind(this)}/>HP
            </label><br/>
            <label>
              <input type = "radio" name="brand" value = "lenovo"  onChange = {this.onCategoryChange.bind(this)}/>Lenovo
            </label><br/>
            <label>
              <input type = "radio" name="brand" value = "micromax"  onChange = {this.onCategoryChange.bind(this)}/>Micormax
            </label><br/>
          </div>
          <div className = "col-md-9">
        {
            this.state.laptopArray.filter(function(item,index) {
            if(select!= null || priceCategory!= null) {

              if(select && priceCategory===null)
                return item.tag===select;
              else if(priceCategory && select===null)
                return (item.price >= parseInt(priceCategory) && item.price <= (parseInt(priceCategory)+5000));
              else if(select && priceCategory)
                return (item.tag === select && (item.price >= parseInt(priceCategory) && item.price <= (parseInt(priceCategory)+5000)));
            }
            
            else if(props.match.params.id === "all")
              return item;
            else
              return (item.tag === props.match.params.id);
          })
          .map(function(task, index) {
            return ( <div key={index} className = "row"><br/>
                  <div className = "col-md-3">
                    <img src = {task.imageurl} className = "img-responsive" alt={task.name}/>
                  </div>
                  <div className = "col-md-9" style = {{backgroundColor : 'white'}}>
                    <h4 className = "col-md-6 text-left" style = {{fontWeight:'bold'}}>{task.name}</h4>
                    <h4 className = "col-md-6 text-right" style = {{color: '#2F7AB3'}}>₹ {task.price}</h4>
                    <hr/>
                    <ul>
                      <li>Ratings - <b>{task.ratings}</b>/10</li>
                      <li>OS Version - <b>{task.OS}</b></li>
                      <li>Warranty - <b>{task.warranty}</b></li>
                      <li>Other Info - <b>{task.detail}</b></li>
                    </ul>
                  </div>

                </div>
            )
          })
        }
          </div>
        </div>
      </div>
    )
  }
}
export default ResultsLaptop;
