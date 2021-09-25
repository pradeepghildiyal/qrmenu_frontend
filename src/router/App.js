import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import Home from '../pages/Home'
import Login from '../pages/Login'

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
        <ToastContainer >

        </ToastContainer>
      </>
    );
}

export default App