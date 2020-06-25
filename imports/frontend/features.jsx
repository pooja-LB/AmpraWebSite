import React, { Component } from 'react'

export class features extends Component {
  render() {
    return (
        <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>What We Do</h2>
            <p>Softwares change how we interact and feel with devices. Users are also constantly in search of better apps to improve their day to day tasks. Great ideas come from great insights. Great insights come from observations and empathy. We immerse ourselves in your problem and work backwards to create innovative applications and softwares for you, our Clients - small to large scale enterprises. In today’s world of disparate, complex systems and ever changing technologies, we help you develop sustainable architecture. We, your ‘trusted’ partners work with you hand-in-hand to build the best solution that is user friendly, faster, scalable and less expensive to maintain, making your business more profitable!</p>
          </div>
          <div className="row">
          {this.props.data ? this.props.data.map((d) => 
            <div className="col-xs-6 col-md-3"> <i className={d.icon}></i>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
            </div>
          ) : 'Loading...'}
           
          
          </div>
        </div>
      </div>
    )
  }
}

export default features
