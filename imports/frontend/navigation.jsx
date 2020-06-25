import React, { Component } from 'react'

export class Navigation extends Component {
 

  render() {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container"> 
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>        
            <a href="#header" class="navbar-brand page-scroll" href="#header" title="Ampra Solutions">
               <img src="http://ampra.in/wp-content/uploads/2018/06/amprasolution-logo-png1.png" alt="Ampra Solutions" className="img-responsive" /></a>
            </div>
          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/* <li><a href="#features" className="page-scroll">HOME</a></li> */}
              <li><a href="#about" className="page-scroll">WHO WE ARE</a></li>
              {/* <li><a href="#services" className="page-scroll">WHY US</a></li> */}
              <li><a href="#services" className="page-scroll">WHAT WE DO</a></li>
              <li><a href="#team" className="page-scroll">Team</a></li>
              <li><a href="#testimonials" className="page-scroll">TESTIMONIALS</a></li>
              <li><a href="#careers" className="page-scroll">CAREERS</a></li>
              <li><a href="#contact" className="page-scroll">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
