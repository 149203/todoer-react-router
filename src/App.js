import React from 'react'
import './style/master.scss' // applies global scss styles
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Today from './components/layouts/Today'
import List from './components/layouts/List'
import Completed from './components/layouts/Completed'
import Trash from './components/layouts/Trash'
import FourOhFour from './components/layouts/FourOhFour'

export default function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Today} />
               <Route exact path="/today" component={Today} />
               <Route exact path="/list" component={List} />
               <Route exact path="/completed" component={Completed} />
               <Route exact path="/trash" component={Trash} />
               <Route component={FourOhFour} />
            </Switch>
         </div>
      </Router>
   )
}
