import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  return (
    <>
      {!localStorage.getItem('login_token') && <Login />}
      {localStorage.getItem('login_token') && <Home />}
    </>
  );
}

export default App;
