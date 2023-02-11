import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login_token'))
  const loginUser = (loginState) => {
    setIsLoggedIn(loginState);
  }

  return (
    <>
      { !isLoggedIn && <Login onLogin= {loginUser} />}
      { isLoggedIn && <Home />}
    </>
  );
}

export default App;
