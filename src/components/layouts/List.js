import React from 'react'
import Navigation from '../sections/Navigation'
// how to import SVGs as components: https://stackoverflow.com/a/60178862/6305196
import { ReactComponent as TodayIcon } from '../../img/icon-calendar-date.svg'
import { ReactComponent as ArchiveIcon } from '../../img/icon-collection.svg'

function List() {
   return (
      <div className="container">
         <div className="row mb-2">
            <div className="col-6 offset-3">
               <h1 className="font-weight-light">List</h1>
            </div>
         </div>
         <div className="row">
            <Navigation layout="list" />
            <div className="col-6">
               <div className="row">
                  <div className="col-12 mb-4">
                     <TodayIcon
                        className="icon-today-lg float-right ml-3"
                        alt="Send task to Today"
                     />
                     <ArchiveIcon
                        className="icon-archive-lg float-right ml-3"
                        alt="Send task to Archive"
                     />
                     <p className="d-inline mr-5">
                        This is an example of a very long task that wraps to two
                        lines so we'll see the effect it has.&nbsp;&nbsp;
                        <a href="https://google.com" className="text-italic">
                           Edit task
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default List
