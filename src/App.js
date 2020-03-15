import React from 'react'
import './style/master.scss' // applies global scss styles
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Today from './components/layouts/Today'
import List from './components/layouts/List'
import Completed from './components/layouts/Completed'
import Archive from './components/layouts/Archive'
import FourOhFour from './components/layouts/FourOhFour'
import Header from './components/sections/Header'

export default function App() {
   return (
      <Router>
         <div className="App">
            <Header />
            <Switch>
               <Route exact path="/" component={Today} />
               <Route exact path="/today" component={Today} />
               <Route exact path="/list" component={List} />
               <Route exact path="/completed" component={Completed} />
               <Route exact path="/archive" component={Archive} />
               <Route component={FourOhFour} />
            </Switch>
         </div>
      </Router>
   )
}
