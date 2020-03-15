import React from 'react'
import Navigation from '../sections/Navigation'

export default function Archive() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-6 offset-3">
               <h1>Archive</h1>
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
