import React, { Component } from 'react'

export class Services extends Component {
  render() {
    return (
        <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>Softwares change how we interact and feel with devices. Users are also constantly in search of better apps to improve their day to day tasks. Great ideas come from great insights. Great insights come from observations and empathy. We immerse ourselves in your problem and work backwards to create innovative applications and softwares for you, our Clients - small to large scale enterprises. In today’s world of disparate, complex systems and ever changing technologies, we help you develop sustainable architecture. We, your ‘trusted’ partners work with you hand-in-hand to build the best solution that is user friendly, faster, scalable and less expensive to maintain, making your business more profitable!</p>
          </div>
          <div className="row">

          {this.props.data ? this.props.data.map(d => 
              <div className="col-md-4"> <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ): 'loading'}
          
           
          
        
            </div>
          </div>
        </div>
    )
  }
}

export default Services
