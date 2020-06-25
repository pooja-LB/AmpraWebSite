import React, { Component } from 'react'

export class Navigation extends Component {
 

  render() {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container"> 
          <div className="navbar-header">
             <a href="#header">
             <img src="http://ampra.in/wp-content/uploads/2018/06/amprasolution-logo-png1.png" alt="Ampra Solutions" className="img-responsive" /></a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>        
            {/* <a href="#header" class="navbar-brand page-scroll" href="#header" title="Ampra Solutions">
               <img src="http://ampra.in/wp-content/uploads/2018/06/amprasolution-logo-png1.png" alt="Ampra Solutions" className="img-responsive" /></a> */}
            </div>
          
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about" className="page-scroll">WHO WE ARE</a></li>
              <li><a href="#services" className="page-scroll">WHAT WE DO</a></li>
              <li><a href="#team" className="page-scroll">Team</a></li>
              <li><a href="#testimonials" className="page-scroll">TESTIMONIALS</a></li>
              <li><a href="#careers" className="page-scroll">CAREERS</a></li>
              <li><a href="#contact" className="page-scroll">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>
    //   <nav className="navbar navbar-expand-lg navbar-light pt-3 pl-0 pr-0">
    //   <a href="home.html">
    //   <img src="http://ampra.in/wp-content/uploads/2018/06/amprasolution-logo-png1.png" alt="Ampra Solutions" className="img-responsive" /></a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    
    //   <div className="collapse navbar-collapse w-100 ml-4 pl-2" id="navbarTogglerDemo02">
    //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li className="nav-item">
    //           <a href="about.html" className="nav-link">About 
    //           </a>
    //       </li>
    //       <li className="nav-item">
    //           <div id="solution-drop" className="dropdown">
    //               <div className=" dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                   Solutions
    //               </div>
    //               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                 <a className="dropdown-item" href="managed-office.html">Managed Offices</a>
    //                 <a className="dropdown-item" href="wfh.html">Work From Home</a>
    //               </div>
    //             </div>
    //       </li>
    //       <li className="nav-item">
    //           <a href="contactus.html" className="nav-link">Locations 
    //           </a>
    //       </li>
    //     </ul>
    //     <div className="form-inline my-2 my-lg-0 float-right">
    //       <a href="contactus.html" className="nav-link contact-link">Contact 
    //       </a>
    //          <a href="contactus.html"> <button className="btn req-btn my-2 my-sm-0">Book Now</button></a>
    //   </div>
    //   </div>
    // </nav>
    )
  }
}

export default Navigation
