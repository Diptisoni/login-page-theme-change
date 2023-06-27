import { queryAllByAttribute } from "@testing-library/react";
import React, { useState } from "react"
import './login.css';

function LoginPage() {
  // let [darkTheme, setDarkTheme] = useState(true)
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [lightTheme, setLightTheme] = useState(false);
  
  

  function handleSubmit() {
    if (!userName)
      alert('User name required');
    else if (!password)
      alert('Password required');
    else
      alert('Login successfully');
  }

  return (
   <div className={`body ${lightTheme ? 'light-theme-color' : ''}`}>
    <div className="login-container">
      <h1>Sign in</h1>
      <p className="sub-head">Sign in and start managing your candidates!</p>
      <form id="login-form">
        <div class="form-group">
          <label for="username"></label>
          <input type="text" id="username" name="username" placeholder="Login" required onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <input type="checkbox" id="rememberMe" name="rememberMe" style={{ width: '13px' }} />
              <p style={{ fontSize: '12px' }}>Remember Me</p>
            </div>
            <div class="col">
              <a className="forget-pass">Forgot password?</a>
            </div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </form>
      <div className="themechange" >
        <button onClick={()=>setLightTheme(!lightTheme)}>change theme</button>
      </div>
    </div>
   </div>
  );
}

export default LoginPage;
