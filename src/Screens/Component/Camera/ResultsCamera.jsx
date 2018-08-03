import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class ResultsCamera extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    cameraArray : [
      {
        "name" : "Canon Mark-III 5D",
        "imageurl" : "./../../../Images/Camera-Images/canon-5D.jpg",
        "detail" : "22.3 MP frame sensor, 50 ISO Sensitivity, Can take Movies",
        "ratings" : "10",
        "warranty" : 1,
        "price" : 45000,
        "ISO" : 50,
        "size" : "36x24mm",
        "tag" : "canon"
      },

      {
        "name" : "Canon 1300D",
        "imageurl" : "./../../../Images/Camera-Images/canon-1300D.jpg",
        "detail" : "18MP frame sensor, Wifi, Can Take Movies",
        "ratings" : "8",
        "warranty" : 1,
        "price" : 35000,
        "ISO" : 35,
        "size" : "30x20mm",
        "tag": "canon"
      },

      {
        "name" : "Nikon D5300",
        "imageurl" : "./../../../Images/Camera-Images/nikon-d5300.jpg",
        "detail" : "18 MP Frame sensor, Internet, Bluetooth, Good for Range Photography",
        "ratings" : "8",
        "warranty" : 2,
        "price" : 50000,
        "ISO" : 40,
        "size" : "29x18mm",
        "tag": "nikon"
      },
    ],
      select : null,
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
    let {select, priceCategory} = this.state;
    let props = this.props;
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-md-12">
            <h3>Results for : <b>{props.match.params.id}</b> Camera</h3>
          </div>
        </div>
        <div className = "row">
        <div className = "col-md-3" style = {{backgroundColor: '#2F7AB3'}}>
          <h5 className = "text-left" style = {{color: 'white'}}>Filter Results</h5>
          <hr/>
          <h4 className = "text-left" style = {{color: 'white'}}>Price</h4>
          <label>
            <input type = "radio" name="price" value = "35000" onChange = {this.onPriceChange.bind(this)}/>35000-40000
          </label><br/>
          <label>
            <input type = "radio" name="price" value = "40000" onChange = {this.onPriceChange.bind(this)}/>40000-45000
          </label><br/>
          <label>
            <input type = "radio" name="price" value = "45000" onChange = {this.onPriceChange.bind(this)}/>45000-50000
          </label><br/>
          <hr/>

          <h4 className = "text-left" style = {{color: 'white'}}>Brands</h4>
          <label>
            <input type = "radio" name="brand" value = "canon" onChange = {this.onCategoryChange.bind(this)}/>Canon
          </label><br/>
          <label>
            <input type = "radio" name="brand" value = "nikon" onChange = {this.onCategoryChange.bind(this)}/>Nikon
          </label><br/>
        </div>
          <div className = "col-md-9">
        {
          this.state.cameraArray.filter(function(item,index) {
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
                      <li>ISO - <b>{task.ISO}</b></li>
                      <li>Sensor Size - <b>{task.size}</b></li>
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
export default ResultsCamera;
