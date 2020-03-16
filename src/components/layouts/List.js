import React from 'react'
import Navigation from '../sections/Navigation'
// how to import SVGs as components: https://stackoverflow.com/a/60178862/6305196
import { ReactComponent as TodayIcon } from '../../img/icon-calendar-date.svg'
import { ReactComponent as ArchiveIcon } from '../../img/icon-collection.svg'
import { ReactComponent as CompletedIcon } from '../../img/icon-inbox-check.svg'

function List() {
   return (
      <div className="container">
         <div className="row mb-2">
            <div className="col-6 offset-3">
               <h1 className="font-weight-light">List of tasks</h1>
            </div>
         </div>
         <div className="row">
            <Navigation layout="list" />
            <div className="col-6">
               <div className="row">
                  <div className="col-12 mb-2">
                     <CompletedIcon
                        className="icon-completed float-left mr-2"
                        alt="Send task to Completed"
                     />

                     <ArchiveIcon
                        className="icon-archive float-right ml-4"
                        alt="Send task to Archive"
                     />
                     <TodayIcon
                        className="icon-today float-right ml-4"
                        alt="Send task to Today"
                     />

                     <p className="mr-5">
                        This is an example of a very long task that wraps into
                        two lines so we'll see the effect it has.&nbsp;&nbsp;
                        <a href="https://google.com">Edit</a>
                     </p>
                  </div>

                  <div className="col-12 mb-2">
                     <CompletedIcon
                        className="icon-completed float-left mr-2"
                        alt="Send task to Completed"
                     />
                     <ArchiveIcon
                        className="icon-archive float-right ml-4"
                        alt="Send task to Archive"
                     />
                     <TodayIcon
                        className="icon-today float-right ml-4"
                        alt="Send task to Today"
                     />

                     {/* If the task is a single line, add a little margin to the top of it. */}
                     <p className="mr-5 mt-1">
                        This is a short task.&nbsp;&nbsp;
                        <a href="https://google.com" className="text-italic">
                           Edit
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
