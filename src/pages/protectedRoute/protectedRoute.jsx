import React from 'react'
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component:Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    console.log('this', isAuthenticated);

  return (
      <Route
        {...restOfProps}
        render={
            (props) => isAuthenticated
            ? <Component {...props} />
            : <Redirect to="/" />
        }
      >
    </Route>
  )
}

export default ProtectedRoute