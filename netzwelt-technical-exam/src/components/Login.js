import '../styles.css'

const LOGIN_API_URL = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn';

const Login = () => {

  if(localStorage.getItem('login_token')) {
    //route to home page
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const [[,username], [,password]] = [...data];
    const bodyData = JSON.stringify({
      "username": username,
      "password": password
    })

    const loginAuth = async (username, password) => {

      const request = {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },

        body: bodyData
      }

      try {
        const response = await fetch(LOGIN_API_URL, request);

        if(!response.ok) throw new Error('Failed to login');

        localStorage.setItem('login_token', true);
      }

      catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    }

    loginAuth(username,password);
  }

  return (
    <div className="login-card">
    <div className="login-container">
      <h1>Login Section</h1>
      <form onSubmit={submitHandler} className="login-form">
        <div className="form-group">
          <label htmlFor="login-username">Username</label>
          <input name="login-username" id="login-username" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input name="login-password" id="login-password" type="password" />
        </div>
        <div className="form-group">
          <button className="login-button">Login</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;