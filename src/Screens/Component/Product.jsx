import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import ResultsLaptop from './Laptops/ResultsLaptop.jsx';
import Results from './Mobile/Results.jsx';
import ResultsCamera from './Camera/ResultsCamera.jsx';

class Product extends React.Component {

  scrollDown () {
    console.log("Hello");
    this.refs.content.scrollIntoView();
  }

  render() {
    return (
    <Router>
      <div className = "container">
        <div className = "row">
          <div className = "col-md-4" style = {{backgroundColor : '#FFFFFF', marginTop: -10, borderRadius: 3}}>
            <div className = "dealsOfTheDay">
              <h3 className="text-center" style = {{color: '#379BDC', fontWeight: 'bold', fontSize: 20}}>DEALS OF THE DAY!</h3>
              <hr/>

              <center>
                <img className = "img-responsive" src = "./../Images/tvproduct.jpg"/>

                <p style = {{fontWeight: 'bold'}}>Samsung Smart LED TV, M Series 32M4300 HD Ready Black</p>
              </center>
              <p className = "text-left" style = {{color: '#379BDC', fontWeight: 'bold'}}>₹10,900</p>
            </div>
          </div>

          <div className = "col-md-8">
            <Link to =  "/mobile/all">
              <div className = "featured">

              <div className="col-md-4" style = {{marginTop: -10, borderRadius: 3}}>
                <div className="thumbnail">
                  <img src="./../Images/mobile.jpg" alt="Mobile Section" style = {{width:200, height:120}}/>
                  <div className="caption">
                    <h4>Get Latest Smartphone of Your Choice</h4>
                    <Link to = "/mobile/all"> <button className = "btn btn-primary" onClick = {this.scrollDown.bind(this)}>Explore</button>  </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style = {{marginTop: -10, borderRadius: 3}}>
                <div className="thumbnail">
                  <img src="./../Images/computing.jpg" alt="Mobile Section"/>
                  <div className="caption">
                    <h4>Find the Best Deals that Suits your pocket</h4>
                    <Link to = "/laptops/all"> <button className = "btn btn-primary" onClick = {this.scrollDown.bind(this)}>Explore</button>  </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4" style = {{marginTop: -10, borderRadius: 3}}>
                <div className="thumbnail">
                  <img src="./../Images/camera.jpg" alt="Mobile Section" />
                  <div className="caption">
                    <h4>Click with our best products</h4>
                    <Link to = "/camera/all"> <button className = "btn btn-primary" onClick = {this.scrollDown.bind(this)}>Explore</button>  </Link>
                  </div>
                </div>
              </div>

              </div>
            </Link>
          </div>

        </div><br/>

        <div className = "row">
          <div className = "col-md-12" style = {{backgroundColor : 'white'}}>
            <img src = "./../Images/SaleBanner.png" alt = "Sale Banner" className = "img-responsive"/>
          </div>
        </div><br/>

        <div className = "row">
          <div className = "col-md-3">
          <center>
            <div className = "col-md-12" style = {{backgroundColor: 'white'}}>
              <img src = "./../Images/logos/com-clip-art.png" alt = "Computer Logo" style = {{width: 100, height:100}} />
              <h4>RESERVE ONLINE & COLLECT</h4>
              <p style = {{color: '#BDBDBD'}}>Order Online from anywhere and collect from your nearby stores</p>
            </div>
          </center>
          </div>

          <div className = "col-md-3">
            <center>
              <div className = "col-md-12" style = {{backgroundColor: 'white'}}>
                <img src = "./../Images/logos/fd.png" alt = "Computer Logo" style = {{width: 100, height:100}} />
                <h4>FREE DELIVERY ON ALL PRODUCTS</h4>
                <p style = {{color: '#BDBDBD'}}>Book anything and get free delivery on any items</p>
              </div>
            </center>
          </div>

          <div className = "col-md-3">
            <center>
              <div className = "col-md-12" style = {{backgroundColor: 'white'}}>
                <img src = "./../Images/logos/recycle.png" alt = "Computer Logo" style = {{width: 100, height:100}} />
                <h4>FREE RECYCLING ON ALL PRODUCTS</h4>
                <p style = {{color: '#BDBDBD'}}>Recycle for a good cause at free of cost</p>
              </div>
            </center>
          </div>

          <div className = "col-md-3">
            <center>
              <div className = "col-md-12" style = {{backgroundColor: 'white'}}>
                <img src = "./../Images/logos/tools.png" alt = "Computer Logo" style = {{width: 100, height:100}} />
                <h4>WE CAN INSTALL</h4>
                <p style = {{color: '#BDBDBD'}}>For items that need to be installed at somewhere, we will do that as well.</p>
              </div>
            </center>
          </div>
        </div><br/>

        <div className = "row">
          <div className = "col-md-4" style = {{padding:0}}>
          <a href = "#" style = {{textDecoration: 'none '}}>
            <div className = "facebook-box" style = {{backgroundColor : '#3B5997', height:40}}>
                <p className = "text-center" style = {{color: 'white', fontWeight: 'bold', lineHeight:3}}>Connect Via Facebook</p>
            </div>
          </a>
          </div>

          <div className = "col-md-4" style = {{padding:0}}>
            <a href = "#" style = {{textDecoration: 'none '}}>
              <div className = "facebook-box" style = {{backgroundColor : '#3FCCFD', height:40}}>
                  <p className = "text-center" style = {{color: 'white', fontWeight: 'bold', lineHeight: 3}}>Connect Via Twitter</p>
              </div>
            </a>
          </div>

          <div className = "col-md-4" style = {{padding:0}}>
          <a href = "#">
            <div className = "facebook-box" style = {{backgroundColor : '#71B70E', height:40}}>
                <p className = "text-center" style = {{color: 'white', fontWeight: 'bold', lineHeight:3}}>Connect Via Google</p>
            </div>
          </a>
          </div>

        </div>
        <div ref = "content">
          <Route path="/laptops/:id" component = {ResultsLaptop}/>
          <Route path="/mobile/:id" component = {Results}/>
          <Route path = "/camera/:id" component = {ResultsCamera}/>
        </div>
      </div>
    </Router>
    )
  }
}

export default Product;
