import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '../context/AuthContext'
import PrivateRoute from './PrivateRoute'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Places from '../pages/Places'
import Place from '../pages/Place'

function App() {
  return (
    <AuthProvider >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/places/:id">
            <Place />
          </PrivateRoute>
          <PrivateRoute exact path="/places">
            <Places />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  );
}

export default App