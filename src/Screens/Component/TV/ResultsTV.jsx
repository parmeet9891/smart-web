import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class ResultsTV extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    tvArray : [
      {
        "name" : "Samsung LED Model B8",
        "imageurl" : "./../../../Images/TV-Images/samsung-LED.jpg",
        "detail" : "23.5 inches Display, Bluetooth, Internet Facility and LED TV",
        "ratings" : "8.2",
        "warranty" : 2,
        "price" : 35000,
        "HD" : "Yes",
        "tag" : "samsung"
      },

      {
        "name" : "Samsung Model A6",
        "imageurl" : "./../../../Images/TV-Images/samsung-TV.jpg",
        "detail" : "33.0 inches Display, Bluetooth, External Device Connectivity",
        "ratings" : "7",
        "warranty" : 2,
        "price" : 37000,
        "HD" : "No",
        "tag": "samsung"
      },

      {
        "name" : "Sansui LED Model I7B12",
        "imageurl" : "./../../../Images/TV-Images/sansui-LED.jpg",
        "detail" : "40.2 inches Display, Internet and External Device Connectivity, Bluetooth",
        "ratings" : "9",
        "warranty" : 2,
        "price" : 50000,
        "HD" : "Yes",
        "tag": "sansui"
      },
      {
        "name" : "Sansui Model D756",
        "imageurl" : "./../../../Images/TV-Images/sansui-TV.jpg",
        "detail" : "45.2 inches Display, External Device Connectivity, Bluetooth",
        "ratings" : "7.8",
        "warranty" : 2,
        "price" : 38000,
        "HD" : "No",
        "tag": "sansui"
      },
      {
        "name" : "Sony Model 55A",
        "imageurl" : "./../../../Images/TV-Images/sony-55A.jpg",
        "detail" : "20.2 inches Display, Internet, Bluetooth",
        "ratings" : "8",
        "warranty" : 3,
        "price" : 40000,
        "HD" : "No",
        "tag": "sony"
      },
      {
        "name" : "Sony Model KD",
        "imageurl" : "./../../../Images/TV-Images/sony-KD.jpg",
        "detail" : "26.2 inches Display, NO Internet, Bluetooth",
        "ratings" : "7",
        "warranty" : 2,
        "price" : 42000,
        "HD" : "Yes",
        "tag": "sony"
      },
    ],
      select : null,
      priceCategory : null
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
            <h3>Results for : <b>{props.match.params.id}</b> TV</h3>
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
              <input type = "radio" name="price" value = "40000" onChange = {this.onPriceChange.bind(this)}/>40000-50000
            </label><br/>
            <label>
              <input type = "radio" name="price" value = "45000" onChange = {this.onPriceChange.bind(this)}/>45000-50000
            </label><br/>
            <hr/>

            <h4 className = "text-left" style = {{color: 'white'}}>Brands</h4>
            <label>
              <input type = "radio" name="brand" value = "samsung" onChange = {this.onCategoryChange.bind(this)}/>Samsung
            </label><br/>
            <label>
              <input type = "radio" name="brand" value = "sansui" onChange = {this.onCategoryChange.bind(this)}/>Sansui
            </label><br/>
            <label>
              <input type = "radio" name="brand" value = "sony" onChange = {this.onCategoryChange.bind(this)}/>Sony
            </label><br/>
          </div>
          <div className = "col-md-9">
        {
          this.state.tvArray.filter(function(item,index) {
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
                      <li>HD Support - <b>{task.HD}</b></li>
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
export default ResultsTV;
