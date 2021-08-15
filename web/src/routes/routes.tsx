import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/landing" component={Landing} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/study" component={TeacherList} />
      <Route exact path="/give-classes" component={TeacherForm} />
    </Router>
  )
}

export default Routes
