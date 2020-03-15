import React, { Component } from 'react'
import Navigation from '../sections/Navigation'

export default class Today extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-6 offset-3">
                  <h1>Sunday, March 15</h1>
               </div>
            </div>
            <div className="row">
               <Navigation />
               <div className="col-6">
                  <div className="row"></div>
               </div>
            </div>
         </div>
      )
   }
}
