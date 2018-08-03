import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    mobileArray : [
      {
        "name" : "Moto E4",
        "imageurl" : "./../../../Images/Mobile-Images/moto-e4.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "3GB RAM | 5.5 inches Display | 13MP Camera and 32 GB Internal Memory",
        "ratings" : "8.2",
        "android" : "7.1.1",
        "warranty" : 1,
        "price" : 9000,
        "tag" : "moto"
      },

      {
        "name" : "Moto G5S",
        "imageurl" : "./../../../Images/Mobile-Images/moto-g5s.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 5.2 inches Display, 16MP Camera and 32 GB Internal Memory",
        "ratings" : "7.5",
        "android" : "7.1.1",
        "warranty" : 1,
        "price" : 8000,
        "tag": "moto"
      },

      {
        "name" : "Moto X",
        "imageurl" : "./../../../Images/Mobile-Images/moto-x.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 5.2 inches Display, 12MP Camera and 64 GB Internal Memory",
        "ratings" : "9",
        "android" : "7.1",
        "warranty" : 1,
        "price" : 13000,
        "tag": "moto"
      },
      {
        "name" : "Samsung J6",
        "imageurl" : "./../../../Images/Mobile-Images/samsung-j6.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "3GB RAM, 5.6 inches Display, 13MP Camera and 32 GB Internal Memory",
        "ratings" : "7",
        "android" : "8.0",
        "warranty" : 1,
        "price" : 16000,
        "tag": "samsung"
      },
      {
        "name" : "Samsung J8",
        "imageurl" : "./../../../Images/Mobile-Images/samsung-j8.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "3GB RAM, 5.6 inches Display, 12MP Camera and 32 GB Internal Memory",
        "ratings" : "6",
        "android" : "7.1",
        "warranty" : 1,
        "price" : 10000,
        "tag": "samsung"
      },
      {
        "name" : "Samsung ON7",
        "imageurl" : "./../../../Images/Mobile-Images/samsung-on7.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 6 inches Display, 16MP Camera and 64 GB Internal Memory",
        "ratings" : "8.2",
        "android" : "8.0",
        "warranty" : 1,
        "price" : 20000,
        "tag": "samsung"
      },
      {
        "name" : "Xiaomi Redmi 4",
        "imageurl" : "./../../../Images/Mobile-Images/redmi-4.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 5.7 inches Display, 8MP Camera and 32 GB Internal Memory",
        "ratings" : "7.5",
        "android" : "7.1.1",
        "warranty" : 2,
        "price" : 7000,
        "tag": "xiaomi"
      },
      {
        "name" : "Xiaomi Redmi 5",
        "imageurl" : "./../../../Images/Mobile-Images/xiaomi-redmi-5.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 6 inches Display, 12MP Camera and 64 GB Internal Memory",
        "ratings" : "7.5",
        "android" : "7.1.1",
        "warranty" : 2,
        "price" : 11000,
        "tag": "xiaomi"
      },
      {
        "name" : "Xiaomi Redmi Y1",
        "imageurl" : "./../../../Images/Mobile-Images/xiaomi-y1.jpg",
        "network1" : "4G",
        "network2" : "3G",
        "detail" : "4GB RAM, 6 inches Display, 10MP Camera and 64 GB Internal Memory",
        "ratings" : "9.5",
        "android" : "8.0",
        "warranty" : 2,
        "price" : 9500,
        "tag": "xiaomi"
      }
    ],
      filterArray : [],
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
            <h3>Results for : <b>{props.match.params.id}</b> Mobiles</h3>
          </div>
        </div>
        <div className = "row">
        <div className = "col-md-3" style = {{backgroundColor: '#2F7AB3'}}>
          <h5 className = "text-left" style = {{color: 'white'}}>Filter Results</h5>
          <hr/>
          <h4 className = "text-left" style = {{color: 'white'}}>Price</h4>
          <label>
            <input type = "radio" name="price" value = "5000" onChange = {this.onPriceChange.bind(this)}/>5000-10000
          </label><br/>
          <label>
            <input type = "radio" name="price" value = "10000" onChange = {this.onPriceChange.bind(this)}/>10000-15000
          </label><br/>
          <label>
            <input type = "radio" name="price" value = "15000" onChange = {this.onPriceChange.bind(this)}/>15000-20000
          </label><br/>
          <hr/>

          <h4 className = "text-left" style = {{color: 'white'}}>Brands</h4>
          <label>
            <input type = "radio" name="brand" value = "samsung" onChange = {this.onCategoryChange.bind(this)}/>Samsung
          </label><br/>
          <label>
            <input type = "radio" name="brand" value = "xiaomi" onChange = {this.onCategoryChange.bind(this)}/>Xiaomi
          </label><br/>
          <label>
            <input type = "radio" name="brand" value = "moto"  onChange = {this.onCategoryChange.bind(this)}/>Motorola
          </label><br/>
        </div>
          <div className = "col-md-9">
        {
          this.state.mobileArray.filter(function(item,index) {
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
              return (item.tag === props.match.params.id || item.network1 === props.match.params.id || item.network2 === props.match.params.id);
          })
          .map(function(task, index) {
            return ( <div key={index} className = "row"><br/>
                  <div className = "col-md-3">
                    <img src = {task.imageurl} className = "img-responsive" alt={task.name} style = {{height: 255}}/>
                  </div>
                  <div className = "col-md-9" style = {{backgroundColor : 'white'}}>
                    <h4 className = "col-md-6 text-left" style = {{fontWeight:'bold'}}>{task.name}</h4>
                    <h4 className = "col-md-6 text-right" style = {{color: '#2F7AB3'}}>₹ {task.price}</h4>
                    <hr/>
                    <ul>
                      <li>Preferred Network Type - <b> {task.network1} , {task.network2} </b></li><br/>
                      <li>Ratings - <b>{task.ratings}</b>/10</li><br/>
                      <li>Android Version - <b>{task.android}</b></li><br/>
                      <li>Warranty - <b>{task.warranty}</b></li><br/>
                      <li>Other Info - <b>{task.detail}</b></li><br/>
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
export default Results;
