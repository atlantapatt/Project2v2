

import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })
  console.log(React.version)


  return (
        <div>
          {/* <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} loginData={loginData}/> */}
          <Home setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} loginData={loginData} setLoginData={setLoginData}/>
        </div>
  );
}

export default App;
