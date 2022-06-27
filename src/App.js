
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import React from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)
  console.log(React.version)
  return (
   <Router>
    <Switch>
      <Route exact path='/'>
        <Home isLoggedIn={isLoggedIn}/>
      </Route>
      <Route exact path='/login'>
        <Login setIsLoggedIn={setIsLoggedIn}/>
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
