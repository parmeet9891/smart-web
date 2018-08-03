import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className = "container" style = {{backgroundColor : '#373737'}}>
        <div className = "row">
          <div className = "footer"><br/>

            <div className = "col-md-4">
              <img src = "./../Images/logos/sm-logo.png" alt = "Smartprix logo" className = "img-responsive"/>
            </div>

            <div className = "col-md-4">
              <h5 style = {{color: 'white', fontWeight: 'bold'}} className = "text-left">Payment Methods</h5>
            </div>

            <div className = "col-md-4">
              <h5 style = {{color: 'white', fontWeight: 'bold'}} className = "text-left">Store Location</h5>
            </div>

          </div>
        </div>

        <div className = "row">
          <div className = "col-md-3">
            <p className = "text-left" style = {{color: '#BEBEBE'}}>Find the deals that best suits your pocket, with large number of facilities.</p>
          </div>

          <div className = "col-md-offset-1 col-md-4">
            <img src = "./../Images/cards/visa.png" className = "img-responsive" alt="cards"/>
          </div>

          <div className = "col-md-3">
            <i className = "fa fa-map-marker" style = {{color: '#BEBEBE'}}> - No 1123, Sky Tower, New York, USA </i>
            <i className = "fa fa-phone-square" style = {{color: '#BEBEBE'}}> - 123456789 </i><br/>
            <i className = "fa fa-envelope" style = {{color: '#BEBEBE'}}> - info@smartprix.com </i>
          </div>

        </div><br/>

      </div>
    )
  }
}
export default Footer;
