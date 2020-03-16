import React from 'react'
// how to import SVGs as components: https://stackoverflow.com/a/60178862/6305196
import { ReactComponent as TodayIcon } from '../../img/icon-calendar-date.svg'
import { ReactComponent as ListIcon } from '../../img/icon-inbox-full.svg'
import { ReactComponent as ArchiveIcon } from '../../img/icon-collection.svg'
import { ReactComponent as CompletedIcon } from '../../img/icon-inbox-check.svg'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

export default function Navigation(props) {
   console.log(props.layout)

   const { layout } = props

   return (
      <div className="col-3">
         <div className="row mb-5">
            {/* TODO: If layout === this active nav item, render a non-Link component */}
            <Link to="/today" style={{ width: '100%', textDecoration: 'none' }}>
               <div
                  className={classnames('col-12 p-2 nav-today', {
                     'nav-today-highlighted': layout === 'today',
                  })}
               >
                  <TodayIcon className="icon-today-md-muted" alt="" />
                  <p className="lead d-inline ml-3 label-today">Today</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link to="/list" style={{ width: '100%', textDecoration: 'none' }}>
               <div
                  className={classnames('col-12 p-2 nav-list', {
                     'nav-list-highlighted': layout === 'list',
                  })}
               >
                  <ListIcon className="icon-list-md-muted" alt="" />
                  <p className="lead d-inline ml-3 label-list">List</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link
               to="/archive"
               style={{ width: '100%', textDecoration: 'none' }}
            >
               <div
                  className={classnames('col-12 p-2 nav-archive', {
                     'nav-archive-highlighted': layout === 'archive',
                  })}
               >
                  <ArchiveIcon className="icon-archive-md-muted" alt="" />
                  <p className="lead d-inline ml-3 label-archive">Archive</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link
               to="/completed"
               style={{ width: '100%', textDecoration: 'none' }}
            >
               <div
                  className={classnames('col-12 p-2 nav-completed', {
                     'nav-completed-highlighted': layout === 'completed',
                  })}
               >
                  <CompletedIcon className="icon-completed-md-muted" alt="" />
                  <p className="lead d-inline ml-3 label-completed">
                     Completed
                  </p>
               </div>
            </Link>
         </div>
      </div>
   )
}
