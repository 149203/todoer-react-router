import React from 'react'
import Navigation from '../sections/Navigation'

function List() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-6 offset-3">
               <h1 className="font-weight-light">List</h1>
            </div>
         </div>
         <div className="row">
            <Navigation layout="list" />
            <div className="col-6">
               <div className="row"></div>
            </div>
         </div>
      </div>
   )
}

export default List
