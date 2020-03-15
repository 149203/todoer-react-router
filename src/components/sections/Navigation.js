import React from 'react'
// how to import SVGs as components: https://stackoverflow.com/a/60178862/6305196
import { ReactComponent as TodayIcon } from '../../img/icon-calendar-date.svg'
import { ReactComponent as ListIcon } from '../../img/icon-inbox-full.svg'
import { ReactComponent as ArchiveIcon } from '../../img/icon-collection.svg'
import { ReactComponent as CompletedIcon } from '../../img/icon-inbox-check.svg'
import { Link } from 'react-router-dom'

export default function Navigation() {
   return (
      <div className="col-3">
         <div className="row mb-5">
            <Link to="/today" style={{ width: '100%', textDecoration: 'none' }}>
               <div className="col-12 p-2 nav-active">
                  <TodayIcon className="nav-icon" alt="" />
                  <p className="lead d-inline ml-3 nav-label">Today</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link to="/list" style={{ width: '100%', textDecoration: 'none' }}>
               <div className="col-12 p-2">
                  <ListIcon className="nav-icon" alt="" />
                  <p className="lead d-inline ml-3 nav-label">List</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link
               to="/archive"
               style={{ width: '100%', textDecoration: 'none' }}
            >
               <div className="col-12 p-2">
                  <ArchiveIcon className="nav-icon" alt="" />
                  <p className="lead d-inline ml-3 nav-label">Archive</p>
               </div>
            </Link>
         </div>

         <div className="row mb-5">
            <Link
               to="/completed"
               style={{ width: '100%', textDecoration: 'none' }}
            >
               <div className="col-12 p-2">
                  <CompletedIcon className="nav-icon" alt="" />
                  <p className="lead d-inline ml-3 nav-label">Completed</p>
               </div>
            </Link>
         </div>
      </div>
   )
}
