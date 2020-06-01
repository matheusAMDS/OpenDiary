import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'

import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'

function RedirectToLogin() {
  return <Redirect to="/login" />
}

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={RedirectToLogin} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path="/:username" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes