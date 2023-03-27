import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profiles from './views/profiles'
import Dashboard from './views/dashboard'
import StudentRegistrationAddprofile from './views/student-registration-addprofile'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profiles} exact path="/profiles" />
        <Route component={Dashboard} exact path="/" />
        <Route
          component={StudentRegistrationAddprofile}
          exact
          path="/student-registration-addprofile"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
