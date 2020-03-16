import React from 'react'
import Navigation from '../sections/Navigation'
// how to import SVGs as components: https://stackoverflow.com/a/60178862/6305196
import { ReactComponent as TodayIcon } from '../../img/icon-calendar-date.svg'
import { ReactComponent as ListIcon } from '../../img/icon-inbox-full.svg'
import { ReactComponent as ArchiveIcon } from '../../img/icon-collection.svg'

export default function Completed() {
   return (
      <div className="container">
         <div className="row mb-2">
            <div className="col-6 offset-3">
               <h1 className="font-weight-light">Completed tasks</h1>
            </div>
         </div>
         <div className="row">
            <Navigation layout="completed" />
            <div className="col-6">
               <div className="row">
                  <div className="col-12 mb-4">
                     <ArchiveIcon
                        className="icon-archive float-right ml-4"
                        alt="Send task to Archive"
                     />
                     <ListIcon
                        className="icon-list float-right ml-4"
                        alt="Send task to List"
                     />
                     <TodayIcon
                        className="icon-today float-right ml-4"
                        alt="Send task to Today"
                     />
                     <p className="mr-5">
                        This is an example of a very long task that wraps into
                        two lines so we'll see the effect it has.&nbsp;&nbsp;
                        <a href="https://google.com">Edit</a>
                        &nbsp;&nbsp;<i>3/10/20</i>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
