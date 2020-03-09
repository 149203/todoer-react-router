import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Today extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="text-info">Today</h1>
               </div>

               <div className="col-3">
                  <Link to="/today" className="btn btn-block btn-info">
                     Today
                  </Link>
               </div>
               <div className="col-3">
                  <Link to="/list" className="btn btn-block btn-primary">
                     List
                  </Link>
               </div>
               <div className="col-3">
                  <Link to="completed" className="btn btn-block btn-success">
                     Completed
                  </Link>
               </div>
               <div className="col-3">
                  <Link to="trash" className="btn btn-block btn-danger">
                     Trash
                  </Link>
               </div>
            </div>
         </div>
      )
   }
}
