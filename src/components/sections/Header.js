import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
   return (
      <div className="header mb-4">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <p className="lead mb-0">
                     <Link
                        to="/"
                        style={{
                           textDecoration: 'none',
                           color: '#ffffff',
                        }}
                     >
                        Todoer
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
